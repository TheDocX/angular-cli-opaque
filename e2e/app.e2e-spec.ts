import { AngularCliOpaquePage } from './app.po';

describe('angular-cli-opaque App', function() {
  let page: AngularCliOpaquePage;

  beforeEach(() => {
    page = new AngularCliOpaquePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
