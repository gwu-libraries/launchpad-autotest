// m14_001 339 
//
casper.test.begin('m14_001 #339 readme updated', 1, function suite(test) {
casper.echo("Test environment: github.com/gwu-libraries");
    casper.start('https://github.com/gwu-libraries/launchpad/blob/master/apache/lp', function() {
	test.assertTextExists('python/2.7', 'apache/lp contains "python/2.7"');
    }).run(function() {
        test.done();
    });
});
