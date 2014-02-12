// m16_001 #538
//
casper.test.begin('m16-001 #538 check for WRLC holding', 1, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/2364479';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('WRLC Shared Collections', 'verified WRLC holding is displayed');
    }).run(function() {
        test.done();
    });
});
