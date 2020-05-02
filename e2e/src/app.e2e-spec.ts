import { AppPage, INextAnswer, AnswerType } from './app.po';
import { browser, ElementFinder, ElementArrayFinder, protractor } from 'protractor';

const MAX_ANSWERS_PER_REPORT = 30;
const STR = {
  ben: 'בן',
  bat: 'בת',
  reportSent: 'זהו, סיימנו',
};
const log = (msg, arg: any = '') => console.log(`[app.e2e-spec] ${msg}`, arg);
/*******************************
 * Concepts:
 * There are 2 kinds of tests
 * Blind test - will choose answers randomally
 * Case test - for specified questions - answers specified answers. for others questions - choose answers randomally
 */
describe('test chatbot scenarion 1 - new user', () => {
  let page: AppPage;
  const answers = [];

  beforeEach(() => {
    // browser.executeScript('window.localStorage.clear();');
    page = new AppPage();
  });

  it('[Case] should simulate a "ben" click for a new user', () => {
    page.navigateTo();

    // click on "ben"
    page.getMessageOptions().first().click();
    const lastMessage = page.getMessagesTo().last().getText();
    expect(lastMessage).toContain(STR.ben);
    expect(lastMessage).not.toContain(STR.bat);
  });

  fit('[Blind] should simulate a "ben" click for a new user', async() => {
    page.navigateTo();
    let activeQuestionText;
    let activeAnswerElement;
    let reportSent = false;
    for (let i = 0; i < MAX_ANSWERS_PER_REPORT && !reportSent; i++) {
      browser.sleep(3000);
      activeQuestionText = await page.getActiveQuestionText();
      log('Active quesion:', activeQuestionText.toString().split('').reverse().join(''));
      activeAnswerElement = await page.getNextAnswerElement();
      await answerRandomally(activeAnswerElement);
      // reportSent = (lastMessageText).includes(STR.reportSent);
    }
  });
});

// interaction functions
async function answerRandomally(answer: INextAnswer) {
  switch (answer.type) {
    case AnswerType.InputText: {
      const input = 'yada yada'
      answer.input.sendKeys(input);
      await confirmAnswer(answer.confirmElement);
      log(`Answer using input-text: ${input}`);
      break;
    }
    case AnswerType.InputNumber: {
      const min = await answer.input.getAttribute('min');
      const max = await answer.input.getAttribute('max');
      const input = getRandomInt(parseInt(max, 10), parseInt(min, 10));
      answer.input.sendKeys(input);
      await confirmAnswer(answer.confirmElement);
      log(`Answer using input-number: ${input}`);
      break;
    }
    case AnswerType.InputDate: {
      const input = (new Date()).toISOString();
      answer.input.sendKeys(input);
      await confirmAnswer(answer.confirmElement);
      log(`Answer using input-date: ${input}`);
      break;
    }
    case AnswerType.OptionsSingle: {
      await selectRandomOptionSingle(answer.options);
      break;
    }
    case AnswerType.OptionsMulti: {
      await selectRandomOptionMulti(answer.options, answer.confirmElement);
      break;
    }
  }
}
async function selectRandomOptionSingle(options: ElementArrayFinder) {
  const lastOptionIndex = (await options.count()) - 1;
  const clickBtnIndex = getRandomInt(lastOptionIndex);
  log(`Answer using single-select option - click button index: ${clickBtnIndex}`);
  options.get(clickBtnIndex).click();
}

async function selectRandomOptionMulti(options: ElementArrayFinder, confirmElement: ElementFinder) {
  const lastOptionIndex = (await options.count()) - 1;
  let clickBtnIndex = getRandomInt(lastOptionIndex);
    // multi-select option
    const howManyToSelect = 1; // remove
    for (let index = 0; index < howManyToSelect; index++) {
    // click randomally (same option may be clicked multiple times)
    clickBtnIndex = getRandomInt(lastOptionIndex);
    log(`Answer using multi-select option - click button index: ${clickBtnIndex} (last index is ${lastOptionIndex})`);
    options.get(1).click(); // remove
    confirmAnswer(confirmElement);
  }
}

async function confirmAnswer(confirmElement: ElementFinder) {
  const EC = protractor.ExpectedConditions;
  browser.wait(EC.presenceOf(confirmElement), 5000);
  confirmElement.click();
}

function getRandomInt(max, min = 0) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
