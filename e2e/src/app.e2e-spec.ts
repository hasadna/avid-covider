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

/*******************************
 * Sanity test - test chat basic functionality
 * Flow test - test a complete conversion scenario (example: new user filling a report)
 * Action test - test a specific action
 * test list: https://github.com/hasadna/avid-covider/wiki/Sanity-Checks
 */
describe('[Sanity] should click "ben" for a new user', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // basic sanity check
  it('[Sanity] should click "ben" for a new user', () => {
    page.navigateTo();

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
  const asnwers: Array<AnswerTestDataType> = [0, 24, STR.telAvivYaffo, STR.herzl];
  const alias = `${STR.ben} 24 ${STR.from}${STR.herzl} ${STR.telAvivYaffo}`;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should fill report for a new user ', async () => {
    page.navigateTo();
    await simulateChatFlow(page, STR.reportSent, asnwers);
    // report sent - get wouldSend object
    browser.executeScript('return window.wouldSend;').then(function (wouldSend) {
      log(`*** wouldSend[alias] : ${wouldSend['alias']} *** `);
      expect(wouldSend['alias']).toBeDefined();
      expect(wouldSend['alias']).toEqual(alias);
    });
  });
});

describe('[Flow] Returning user can not start a new report in the same day', () => {
  let page: AppPage;
  // bat 30 from balfour raanana
  const asnwers: Array<AnswerTestDataType> = [1, 30, STR.raanana, STR.balfour];
  const alias = `${STR.bat} 30 ${STR.from}${STR.balfour} ${STR.raanana}`;

  beforeEach(async() => {
    page = new AppPage();
    // fill random user report for 'alias'
    page.navigateTo();
    await simulateChatFlow(page, STR.reportSent, asnwers);
    page = new AppPage();
  });

  fit('should not allow another report on same day', async () => {
    page.navigateTo();
    await page.waitForNextAnswerElements();
    const nextAnswerElement = await page.getNextAnswerElement();

    expect(nextAnswerElement.type).toEqual(AnswerElementType.OptionsSingle);
    expect(nextAnswerElement.options.isPresent()).toBeTruthy();
    // button should be disabled and contain alias text
    expect(nextAnswerElement.options.first().getText()).toEqual(alias);
    expect(nextAnswerElement.options.first().getAttribute('class')).toContain('disabled');
  });
});
