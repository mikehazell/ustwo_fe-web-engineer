var baseUrl = 'http://localhost:5000/';
var errorMessage = 'Please tell us what type of celebration you are having';

casper.test.begin('Form should show error for celebrationType', 6, function(test) {
    casper.start(baseUrl, function() {
        test.assertEquals(this.getCurrentUrl(), baseUrl);
        test.assertTitle('Cake Enquiry Form');
        test.assertExists('form', "main form is found");
        this.fill('form', {
            name: "Test user",
            email: "test@email.com",
            celebrationType: 'Other',
        }, true);
    });

    casper.then(function() {
        test.assertExists('div.error');
        var errorText = this.fetchText('div.error');
        casper.test.assertEquals(errorText, errorMessage, 'Has the correct error message.');
        // Should not have navigated
        test.assertEquals(this.getCurrentUrl(), baseUrl, 'Has not submitted.');
    });

    casper.run(function() {
        test.done();
    });
});


casper.test.begin('From should submit', 6, function(test) {
    casper.start(baseUrl, function() {
        test.assertEquals(this.getCurrentUrl(), baseUrl);
        test.assertTitle('Cake Enquiry Form');
        test.assertExists('form', "Main form is found");
        this.fill('form', {
            name: "Test user",
            email: "test@email.com",
            celebrationType: 'Birthday',
            dreamCake: 'The Melenium Falcon flying out of an exploding Death Star'
        }, true);
    });

    casper.then(function() {
        test.assertExists('div.error');
        var errorText = this.fetchText('div.error');
        test.assertEquals(errorText, '', 'Does not have an error message');
        test.assert(this.getCurrentUrl() !== baseUrl, 'Form has submitted');
    });

    casper.run(function() {
        test.done();
    });
});
