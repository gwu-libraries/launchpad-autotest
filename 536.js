// m16_001 #536
//
casper.test.begin('m16_001 #536 add EXPLORE_TYPE to local settings', 1, function suite(test) {
casper.echo("Test environment: github.com");
    casper.start('https://github.com/gwu-libraries/launchpad/blob/master/lp/lp/local_settings.py.template', function() {
	test.assertTextExists('EXPLORE_TYPE', 'local settings template contains "EXPLORE_TYPE"');
    }).run(function() {
        test.done();
    });
});
