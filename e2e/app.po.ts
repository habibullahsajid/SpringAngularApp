import { browser, element, by } from 'protractor';

export class TestPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('views-root h1')).getText();
  }
}
