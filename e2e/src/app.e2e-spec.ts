import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    // changed expected value to 'Walidator PESEL'
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Walidator PESEL');
  });

  afterEach(async () => {
    // Anything?
  });
});
