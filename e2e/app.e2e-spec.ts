import { EasyTaxPage } from './app.po';

describe('easy-tax App', function() {
  let page: EasyTaxPage;

  beforeEach(() => {
    page = new EasyTaxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
