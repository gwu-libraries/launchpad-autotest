// m14_001 339 + 354 
//
casper.test.begin('m14_001 #339 + 354 readme updated', 1, function suite(test) {
casper.echo("Test environment: github.com");
    casper.start('https://github.com/gwu-libraries/launchpad/blob/master/README.md', function() {
	test.assertTextExists('python2.7', 'page body contains "python2.7"');
    }).run(function() {
        test.done();
    });
});
