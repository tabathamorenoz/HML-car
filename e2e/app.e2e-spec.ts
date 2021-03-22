import { AppPage } from './app.po';

describe('app', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should contain copyright', () => {
    page.navigateTo();
    expect(page.getText()).toContain('© 2019 Car Rental Inc.');
  });
});
