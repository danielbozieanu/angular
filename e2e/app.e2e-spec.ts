import { ViitorulNGPage } from './app.po';

describe('viitorul-ng App', function() {
  let page: ViitorulNGPage;

  beforeEach(() => {
    page = new ViitorulNGPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
