import { browser, ElementFinder, protractor, promise } from 'protractor';

export async function safeClick(button: ElementFinder) {
  const EC = protractor.ExpectedConditions;
  await browser.wait(EC.elementToBeClickable(button), 10000);
  button.click();
}

export function getRandomInt(max, min = 0) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function reverseStr(strFinder: promise.Promise<string>) {
  const str = await strFinder;
  return str.split('').reverse().join('');
}