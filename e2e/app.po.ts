import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getText() {
    return element(by.css('app-root')).getText();
  }
}
