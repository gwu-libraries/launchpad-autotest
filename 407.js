// m16_001 407
//
casper.test.begin('m16_001 #407 settings for openlibrary book covers', 1, function suite(test) {
casper.echo("Test environment: github.com");
    casper.start('https://github.com/gwu-libraries/launchpad/blob/master/lp/lp/local_settings.py.template', function() {
	test.assertTextExists('ENABLE_OPENLIBRARY_COVERS', 'setting contains "ENABLE OPEN LIBRARY COVERS"');
    }).run(function() {
        test.done();
    });
});
