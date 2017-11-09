import { PowerranksPage } from './app.po';

describe('powerranks App', () => {
  let page: PowerranksPage;

  beforeEach(() => {
    page = new PowerranksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
