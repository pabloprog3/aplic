import { AplicPage } from './app.po';

describe('aplic App', function() {
  let page: AplicPage;

  beforeEach(() => {
    page = new AplicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
