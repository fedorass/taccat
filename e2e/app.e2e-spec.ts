import { TacCatPage } from './app.po';

describe('taccat App', () => {
  let page: TacCatPage;

  beforeEach(() => {
    page = new TacCatPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
