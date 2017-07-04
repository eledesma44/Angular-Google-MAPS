import { AngularGoogleMapsPage } from './app.po';

describe('angular-google-maps App', () => {
  let page: AngularGoogleMapsPage;

  beforeEach(() => {
    page = new AngularGoogleMapsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
