import { AppPage } from './app.po';

const STR = {
  ben: 'בן',
  bat: 'בת',
};

describe('test chatbot scenarion 1 - new user', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should simulate a click for a new user', () => {
    page.navigateTo();

    // click on "ben"
    page.getMessageOptions().first().click();
    const lastMessage =  page.getMessagesTo().last().getText();
    expect(lastMessage).toContain(STR.ben);
    expect(lastMessage).not.toContain(STR.bat);
  });
});
