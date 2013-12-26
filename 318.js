// m13_001 #318
//
casper.test.begin('m13_001 #318 local settings template ', 2, function suite(test) { 
casper.echo("Test environment: github launchpad master");
var ENTITY='https://github.com/gwu-libraries/launchpad/blob/master/lp/lp/local_settings.py.template'
	casper.start(ENTITY, function() {
	test.assertTextExists('SER_SOL_DBID_TEXT' , 'template value SER_SOL_DBID_TEXT found'); 
	test.assertTextExists('TN5' , 'template value TN5 found'); 
    }).run(function() {
        test.done();
    });
});
