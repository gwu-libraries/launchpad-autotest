// m15_002 #433 #476
// 
//
casper.test.begin('m15_002 #433 #476 Remove link to WRLC Catalog', 2, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/2256589';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Sociology and architectural design' , 'page title Sociology... found');
	test.assertTextDoesntExist('WRLC Catalog' , 'Verified WRLC Catalog link removed');
    }).run(function() {
        test.done();
    });
});
