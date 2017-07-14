import { AuSchedulePage } from './app.po';

describe('au-schedule App', () => {
  let page: AuSchedulePage;

  beforeEach(() => {
    page = new AuSchedulePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
