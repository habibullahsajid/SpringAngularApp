import { TestPage } from './app.po';

describe('test App', () => {
  let page: TestPage;

  beforeEach(() => {
    page = new TestPage();
  });

  it('should display message saying views works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('App works!');
  });
});
