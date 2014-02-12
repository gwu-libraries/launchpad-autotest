// m16_001 #541
//
casper.test.begin('m16-001 #541 handle GT bib with no related WRLC record', 1, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/b12450509';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Memorial addresses','verified title retrieved.');
    }).run(function() {
        test.done();
    });
});
