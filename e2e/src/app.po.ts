import { browser, by, element, ElementFinder, ElementArrayFinder } from 'protractor';

// AppPage is used for getting main elements on page
// This logic is seperated from test itself since itmay change from time to time

export enum AnswerType {
  InputNumber = 'InputNumber',
  InputText = 'InputText',
  InputDate = 'InputDate',
  OptionsSingle = 'OptionsSingle',
  OptionsMulti = 'OptionsMulti',
}

export interface INextAnswer {
  type: AnswerType;
  input?: ElementFinder; // for type Input
  options?: ElementArrayFinder; // for type Options
  confirmElement?: ElementFinder; // Input OR Options(multi)
}

const log = (msg, arg: any = '') => console.log(`[App Page] ${msg}`, arg);

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getMessageOptions() {
    return element.all(by.css('htl-message-options .options button'));
  }

  getMessagesTo() {
    return element.all(by.css('htl-message-to .speech-bubble span'));
  }

  // == input ==
  getHtlInput() {
    return element(by.css('htl-input input'));
  }

  getHtlInputConfrim() {
    return element(by.css('htl-input button'));
  }

  // == options ==
  getActiveHtlSingleOptions() {
    return element.all(by.css('htl-messages htl-message-options:last-child .options button'));
  }

  getActiveHtlMultiOptions(): ElementArrayFinder {
    // get all options other than last ('other' is confirm button)
    return element.all(by.css('htl-messages htl-message-multi-options:last-child .options button:not(.other)'));
    // return allButtons.filter((elem, index) => elem !== allButtons.last());
  }

  getActiveHtlMultiOptionsConfirm(): ElementFinder {
    // get last option ('other' is confirm button)
    return element(by.css('htl-messages htl-message-multi-options:last-child .options button.other'));
  }

  // due to layout structure, this function may return 1-3 messages, depend on the displayed elements
  // (To be specific: 'nth-last-child' will take the last 3 items, and will filter those who are not 'htl-message-to')
  // async getLastMessagesText(): Promise<string> {
  //   return element.all(by.css(`htl-message-to:nth-last-child(-n+3) .speech-bubble span`)).getText();
  // }
  async getActiveQuestionText(): Promise<string> {
    return element.all(by.css('htl-message-to')).last().element(by.css('.speech-bubble span')).getText();
  }

  // get the next element will be used for answer
  async getNextAnswerElement(): Promise<INextAnswer> {
    const isHtlInputPresent = await this.getHtlInput().isPresent();
    if (isHtlInputPresent) {
      // using htl input
      return this.getNextAnswerInputElement();
    } else {
      // use htl options
      return this.getNextAnswerOptionElement();
    }
  }

  private async getNextAnswerInputElement(): Promise<INextAnswer> {
    const result: INextAnswer = { type: AnswerType.InputText };
    const htlInput = await this.getHtlInput();
    const inputType = await htlInput.getAttribute('type');

    switch (inputType) {
      case 'date': {
        result.type = AnswerType.InputDate;
        break;
      }
      case 'number': {
        result.type = AnswerType.InputNumber;
        break;
      }
      default: {
        result.type = AnswerType.InputText;
        break;
      }
    }
    result.input = htlInput;
    result.confirmElement = this.getHtlInputConfrim();
    log(`Next answer element is using Hatool Input [${result.type}]`);
    return result;
  }

  private async getNextAnswerOptionElement(): Promise<INextAnswer> {
    const result: INextAnswer = { type: AnswerType.InputText };
    const htlSingleSelectOption = this.getActiveHtlSingleOptions();
    // is active hatool options are of type single
    const isSingle = await htlSingleSelectOption.isPresent();

    result.type = isSingle ? AnswerType.OptionsSingle : AnswerType.OptionsMulti;
    result.options = isSingle ? htlSingleSelectOption : this.getActiveHtlMultiOptions();
    if (!isSingle) {
      result.confirmElement = this.getActiveHtlMultiOptionsConfirm();
    }
    log(`Next answer element is using Hatool Options [${isSingle ? 'single' : 'multi'}]`);
    return result;
  }
}
