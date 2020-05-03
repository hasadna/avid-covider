import { browser, by, element, ElementFinder, ElementArrayFinder, protractor, promise } from 'protractor';

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
  activeAnswerType: AnswerType;
  asnswersCounter = {
    optionsSingle: 0,
    optionsMulti: 0,
  };

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
  getHtlInput(): ElementFinder {
    return element(by.css('htl-input input'));
  }

  getHtlInputConfrim() {
    return element(by.css('htl-input button'));
  }

  // == options ==
  private getActiveHtlSingleOptions(useIndex?: number): ElementArrayFinder {
    const index = this.asnswersCounter.optionsSingle;
    return element.all(by.css('htl-messages htl-message-options'))
      .get(index)
      .all(by.css('.options button'));
  }

  private getActiveHtlMultiOptions(useIndex?: number): ElementArrayFinder {
    // get all options without 'other' class ('other' is confirm button)
    const index = this.asnswersCounter.optionsMulti;
    return element.all(by.css('htl-messages htl-message-multi-options'))
      .get(index)
      .all(by.css('button:not(.other)'));
  }

  private getActiveHtlMultiOptionsConfirm(): ElementFinder {
    // get all options other than last ('other' is confirm button)
    const index = this.asnswersCounter.optionsMulti;
    return element.all(by.css('htl-messages htl-message-multi-options'))
      .get(index)
      .element(by.css('button.other'));
  }

  // wait until next answer elements ready for interaction
  async waitForNextAnswerElements() {
    switch(this.activeAnswerType) {
      case AnswerType.OptionsSingle: {
        this.asnswersCounter.optionsSingle++;
        break;
      }
      case AnswerType.OptionsMulti:{
        this.asnswersCounter.optionsMulti++;
        break;
      }
    }
    const EC = protractor.ExpectedConditions;
    const inputReady = EC.elementToBeClickable(this.getHtlInput());
    const optionsSingleReady = EC.elementToBeClickable(this.getActiveHtlSingleOptions().last()); // next single option
    const optionsMultiReady = EC.elementToBeClickable(this.getActiveHtlMultiOptionsConfirm());    // next multi option confirm

    await browser.wait(EC.or(inputReady, optionsSingleReady, optionsMultiReady), 100000);
  }
  async getActiveQuestionText(): promise.Promise<string> {
    return element.all(by.css('htl-message-to')).last().element(by.css('.speech-bubble span')).getText();
  }

  // check if strung exist ins last 1-3 messages
  // (To be specific: 'nth-last-child' will take the last 3 items, and will filter those who are not 'htl-message-to')
  async existInPostAnswerText(searchText): promise.Promise<boolean> {
    return element.all(by.css(`htl-messages htl-message-to:nth-last-child(-n+3) .speech-bubble span`))
      .filter((elem) => elem.getText().then((text)  => text.includes(searchText)))
      .isPresent();
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
    this.activeAnswerType = result.type;
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
      // confirm element for optionsMulti
      result.confirmElement = this.getActiveHtlMultiOptionsConfirm();
    }
    this.activeAnswerType = result.type;
    log(`Next answer element is using Hatool Options [${isSingle ? 'single' : 'multi'}]`);
    return result;
  }
}
