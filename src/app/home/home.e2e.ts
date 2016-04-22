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

  it('should have `Simon Briggs` x-large', () => {
    let subject = element(by.css('[x-large]')).getText();
    let result  = 'Simon Briggs';
    expect(subject).toEqual(result);
  });


});
