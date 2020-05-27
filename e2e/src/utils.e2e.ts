import { browser, ElementFinder, protractor, promise } from 'protractor';
import { AnswerTestDataType } from './models.e2e';

const DAY = 24 * 60 * 60 * 1000;
const WAIT_TIMEOUT = 10000;
const RANDOM_TIME_OFFSET_MAX = 4 * DAY;

const err = (msg, arg: any = '') => console.error(`[Utils - Error] ${msg}`, arg);

export async function safeClick(button: ElementFinder) {
  const EC = protractor.ExpectedConditions;
  await browser.wait(EC.presenceOf(button), WAIT_TIMEOUT);
  await browser.wait(EC.visibilityOf(button), WAIT_TIMEOUT);
  await browser.wait(EC.elementToBeClickable(button), WAIT_TIMEOUT);
  await button.click();
}

export function getRandomInt(max: number, min = 0) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function reverseStr(strFinder: promise.Promise<string>) {
  const str = await strFinder;
  return reverseStrSync(str);
}
export function reverseStrSync(str: string) {
  return str.split('').reverse().join('');
}

export function getValidNumberInput(max: number, min: number, nextAnswer: AnswerTestDataType): number {
  let isValidNextAnswer = false;
  if (nextAnswer !== null) {
    nextAnswer = typeof nextAnswer === 'number' ? nextAnswer : parseInt(nextAnswer, 10);
    isValidNextAnswer = !isNaN(nextAnswer) && nextAnswer >= min && nextAnswer <= max;
    if (!isValidNextAnswer) {
      err(`answer [${nextAnswer}] not valid as for input type number`);
    }
  }
  return isValidNextAnswer ? (nextAnswer as number) : getRandomInt(max, min);
}

export function getValidDateInput(nextAnswer: AnswerTestDataType): string {
  let isValidNextAnswer = false;
  if (nextAnswer !== null) {
    isValidNextAnswer = typeof nextAnswer === 'string' && new Date(nextAnswer).toString() !== 'Invalid Date';
    if (!isValidNextAnswer) {
      err(`answer [${nextAnswer}] not valid as for input type date`);
    }
  }
  return isValidNextAnswer ? (nextAnswer as string) : getRandomDateString();
}

function getRandomDateString() {
  const offset = getRandomInt(RANDOM_TIME_OFFSET_MAX, 0);
  const date = new Date(Date.now() - offset);
  const day = ('0' + date.getDate()).slice(-2); // get in 2 digit format
  const month = ('0' + date.getMonth()).slice(-2); // get in 2 digit format
  const fullYear = date.getFullYear();
  return `${fullYear}-${month}-${day}`; // ISO standard
}

export function getValidOptionIndex(lastIndex: number, nextAnswer: AnswerTestDataType): number {
  // avoid choosing low index for multi-select with more than 4 options
  // note: this is due to current problem with scrolling up on low indices
  const minOptionIndex = (lastIndex > 4) ? 4 : 0;

  let isValidNextAnswer = false;
  if (nextAnswer !== null) {
    nextAnswer = typeof nextAnswer === 'number' ? nextAnswer : parseInt(nextAnswer, 10);
    isValidNextAnswer = !isNaN(nextAnswer) && nextAnswer <= lastIndex;
    if (!isValidNextAnswer) {
      err(`answer [${nextAnswer}] not valid as option (type number with lastIndex of${lastIndex})`);
    }
  }
  return isValidNextAnswer ? (nextAnswer as number) : getRandomInt(lastIndex, minOptionIndex);
}
