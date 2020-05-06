import { AppPage, IAnswerElements, AnswerElementType } from './app.po';
import { ElementFinder, ElementArrayFinder, browser } from 'protractor';
import { safeClick, reverseStr, getValidNumberInput, getValidDateInput, getValidOptionIndex, reverseStrSync } from './utils.e2e';
import { AnswerTestDataType } from './models.e2e';

const MAX_ANSWERS_PER_REPORT = 30;
const log = (msg, arg: any = '') => console.log(`[chat-flow] ${msg}`, arg);
// Simulate a complete conversion with chat-bot
// can use pre-detemined answers, or - choose them randomally when not provided
export async function simulateChatFlow(page: AppPage, answers: Array<AnswerTestDataType> = []) {
  let activeQuestionText;
  let activeAnswerElement;
  let wouldSend = null;
  let nextAnswer;
  let i;

  log('=== start chat flow simulation ===');
  if (answers.length > 0) {
    log('provided answers: ', answers);
  }

  for (i = 0; i < MAX_ANSWERS_PER_REPORT && !wouldSend; i++) {
    log(` --- Quesion ${i + 1} ---`);
    nextAnswer = (answers.length > 0) ? answers.shift() : null;

    // wait for browser
    await page.waitForNextAnswerElements();
    // log next question
    activeQuestionText = await reverseStr(page.getActiveQuestionText());
    const activeAnswerText = nextAnswer === null ? 'answer randomally' : 'answer data: ' + nextAnswer;
    log(`Active quesion: ${activeQuestionText}, ${activeAnswerText}`);

    // get next answer elements
    activeAnswerElement = await page.getNextAnswerElement();
    await doAnswer(activeAnswerElement, nextAnswer);

    // check if report ended
    wouldSend = await page.getWouldSend();
    if (wouldSend) {
      log('=== end chat flow simulation ===');
      return {
        wouldSend,
        questions: i, // how many questions where asked
      };
    }
  }
}

// interaction functions
async function doAnswer(answerElements: IAnswerElements, nextAnswer: AnswerTestDataType) {
  switch (answerElements.type) {
    case AnswerElementType.InputText: {
      const input = nextAnswer ? nextAnswer as string : 'yada yada';
      answerElements.input.sendKeys(input);
      log(`Answer using input-text: ${reverseStrSync(input)}`);
      await safeClick(answerElements.confirmElement);
      break;
    }
    case AnswerElementType.InputNumber: {
      const max = parseInt(await answerElements.input.getAttribute('max'), 10);
      const min = parseInt(await answerElements.input.getAttribute('min'), 10);
      const input = getValidNumberInput(max, min, nextAnswer);
      answerElements.input.sendKeys(input);
      log(`Answer using input-number: ${input}`);
      await safeClick(answerElements.confirmElement);
      break;
    }
    case AnswerElementType.InputDate: {
      const input = getValidDateInput(nextAnswer);
      answerElements.input.click(); // to active date field
      answerElements.input.sendKeys(input);
      log(`Answer using input-date: ${input}`);
      await safeClick(answerElements.confirmElement);
      break;
    }
    case AnswerElementType.OptionsSingle: {
      await selectRandomOptionSingle(answerElements.options, nextAnswer);
      break;
    }
    case AnswerElementType.OptionsMulti: {
      await selectRandomOptionMulti(answerElements.options, answerElements.confirmElement, nextAnswer);
      break;
    }
  }
}

async function selectRandomOptionSingle(options: ElementArrayFinder, nextAnswer: AnswerTestDataType) {
  const lastOptionIndex = (await options.count()) - 1;
  const optionIndex = getValidOptionIndex(lastOptionIndex, nextAnswer);
  const optionElement = options.get(optionIndex);
  const optionText = await reverseStr(optionElement.getText());
  log(`Answer using single-select option - click button index: ${optionIndex} of ${lastOptionIndex} (${optionText})`);
  await safeClick(optionElement);
}
async function selectRandomOptionMulti(options: ElementArrayFinder, confirmElement: ElementFinder, nextAnswer: AnswerTestDataType) {
  const lastOptionIndex = (await options.count()) - 1;
  let optionIndex;

  // multi-select option
  const howManyOptionsToClick = 1; // change to test multiple clicking - may require changes in answers array
  for (let i = 0; i < howManyOptionsToClick; i++) {
    // click randomally (same option may be clicked multiple times)
    optionIndex = getValidOptionIndex(lastOptionIndex, nextAnswer);
    const optionElement = options.get(optionIndex);

    const optionText = await reverseStr(optionElement.getText());
    log(`Answer using multi-select option - click button index: ${optionIndex} of ${lastOptionIndex} (${optionText})`);
    await safeClick(optionElement);
    await safeClick(confirmElement);
  }
}
