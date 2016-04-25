describe('App', () => {

  beforeEach(() => {
    // change hash depending on router LocationStrategy
    browser.get('/#/home');
  });


  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'Simon Briggs';
    expect(subject).toEqual(result);
  });
  
  it('should have `Select Language` as first span tag', () => {
    let subject = element(by.css('span')).getText();
    let result  = 'Select Language:';
    expect(subject).toEqual(result);
  });

});