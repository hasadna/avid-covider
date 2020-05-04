import { AppPage } from './app.po';
import { browser } from 'protractor';
import { simulateChatFlow } from './chat-flow.e2e';
import { AnswerTestDataType } from './models.e2e';

const STR = {
  ben: 'בן',
  bat: 'בת',
  telAvivYaffo: 'תל אביב - יפו',
  herzl: 'הרצל',
  reportSent: 'זהו, סיימנו',
};
/*******************************
 * Concepts:
 * There are 2 kinds of tests
 * Sanity test - test chat basic functionality
 * Scenario test - test a complete conversion scenario (example: new user filling a report)
 */
describe('test chatbot scenarion 1 - new user', () => {
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

  fit('[Scenario] should fill report for a new user ', async() => {
    const asnwers: Array<AnswerTestDataType> = [
      0,  // ben
      24, // 24 yrs24 old
      STR.telAvivYaffo,
      STR.herzl,
    ];
    page.navigateTo();
    await simulateChatFlow(page, STR.reportSent, asnwers);
    // report sent - get wouldSend object
    browser.executeScript('return window.wouldSend;').then(function (wouldSend) {
      console.log('*** ', wouldSend);
    });
  });
});
