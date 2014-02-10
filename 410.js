// m16_001 #410
//
casper.test.begin('m16_001 #410 javascript functions load from external file', 1, function suite(test) {
casper.echo("Test environment: github.com");
    casper.start('https://github.com/gwu-libraries/launchpad/blob/master/lp/ui/templates/item.html', function() {
	test.assertTextDoesntExist('launchpad.js', 'verified launchpad.js is not referenced here"');
    }).run(function() {
        test.done();
    });
});
