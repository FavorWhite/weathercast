import { WaethercastPage } from './app.po';

describe('waethercast App', () => {
  let page: WaethercastPage;

  beforeEach(() => {
    page = new WaethercastPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
