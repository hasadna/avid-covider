import { AppPage, AnswerElementType } from './app.po';
import { browser } from 'protractor';
import { simulateChatFlow } from './chat-flow.e2e';
import { AnswerTestDataType } from './models.e2e';

const STR = {
  ben: 'בן',
  bat: 'בת',
  from: 'מ',
  telAvivYaffo: 'תל אביב - יפו',
  raanana: 'רעננה',
  balfour: 'בלפור',
  herzl: 'הרצל',
  reportSent: 'זהו, סיימנו',
};

const log = (msg, arg: any = '') => console.log(`[app-spec] ${msg}`, arg);
async function showTestMessage(page: AppPage, msg: string) {
  log(msg);
  await page.displayTestData(msg);
}

/*******************************
 * Sanity test - test chat basic functionality
 * Flow test - test a complete conversion scenario (example: new user filling a report)
 * Action test - test a specific action
 * test list: https://github.com/hasadna/avid-covider/wiki/Sanity-Checks
 */
describe('[Sanity] should click "ben" for a new user', () => {
  let page: AppPage;

  beforeAll(async () => {
    page = new AppPage();
    await page.navigateTo();
    await page.clearLocalStorage();
  });

  // basic sanity check
  it('should click "ben" for a new user', async () => {
    showTestMessage(page, 'START: should click "ben" for a new user');
    await page.waitForNextAnswerElements();

    // click on "ben"
    page.getMessageOptions().first().click();
    const lastMessage = page.getMessagesTo().last().getText();
    expect(lastMessage).toContain(STR.ben);
    expect(lastMessage).not.toContain(STR.bat);
  });
});

describe('[Flow] Reporting For a first address on a device', () => {
  let page: AppPage;
  // ben 24 from herzl tel aviv yaffo
  const answers: Array<AnswerTestDataType> = [0, 24, STR.telAvivYaffo, STR.herzl];
  const alias = `${STR.ben} 24 ${STR.from}${STR.herzl} ${STR.telAvivYaffo}`;

  beforeAll(async() => {
    browser.restartSync();
    page = new AppPage();
    await page.navigateTo();
    await page.clearLocalStorage();
  });

  it('should fill report for a new user ', async () => {
    showTestMessage(page, 'START: should fill report for a new user');

    await simulateChatFlow(page, STR.reportSent, answers);
    // report sent - get wouldSend object
    const wouldSend = await browser.executeScript('return window.wouldSend;');
    log(`*** wouldSend[alias] : ${wouldSend['alias']} *** `);
    expect(wouldSend['alias']).toBeDefined();
    expect(wouldSend['alias']).toEqual(alias);
  });
});

describe('[Flow] Returning user can not start a new report on the same day', () => {
  let page: AppPage;
  // bat 30 from balfour raanana
  const beforeAllanswers: Array<AnswerTestDataType> = [1, 30, STR.raanana, STR.balfour];
  const alias = `${STR.bat} 30 ${STR.from}${STR.balfour} ${STR.raanana}`;

  beforeAll(async () => {
    browser.restartSync();
    page = new AppPage();
    await page.navigateTo();
    await page.clearLocalStorage();
    await showTestMessage(page, 'BEFOREALL: [Flow] Returning user can not start a new report on the same day');
    // fill random user report for 'alias'
    await simulateChatFlow(page, STR.reportSent, beforeAllanswers);
  });

  it('should NOT start a new report in the same day', async () => {
    await showTestMessage(page, 'START: should NOT start a new report in the same day');
    page.navigateTo();
    await page.waitForNextAnswerElements();
    const nextAnswerElement = await page.getNextAnswerElement();

    expect(nextAnswerElement.type).toEqual(AnswerElementType.OptionsSingle);
    expect(nextAnswerElement.options.isPresent()).toBeTruthy();
    // button should be disabled and contain alias text
    expect(nextAnswerElement.options.first().getText()).toEqual(alias);
    expect(nextAnswerElement.options.first().getAttribute('class')).toContain('disabled');
  });

  it('should be able to start a new report after 1 day', async () => {
    showTestMessage(page, 'START: should be able to start a new report after 1 day');
    // set last report date one day earlier - 'wait a day' simulation
    const script = `
      var reports = JSON.parse(window.localStorage.reports);
      var d = new Date(reports[0][0]);
      d.setDate(d.getDate()-2)
      reports[0][0] = d.toISOString();
      window.localStorage.reports = JSON.stringify(reports);
    `;
    await browser.executeScript(script);
    await page.navigateTo();

    const answers = [0];  // choose another report for the same alias
    await simulateChatFlow(page, STR.reportSent, answers);
    // report sent - get wouldSend object
    const wouldSend = await browser.executeScript('return window.wouldSend;');
    log(`*** wouldSend[alias] : ${wouldSend['alias']} *** `);
    expect(wouldSend['alias']).toBeDefined();
    expect(wouldSend['alias']).toEqual(alias);
  });
});
