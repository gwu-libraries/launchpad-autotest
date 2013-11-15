// m15_001 marc-785
//
casper.test.begin('m15_001 marc-785 Title Changed To', 4, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/12533360';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Applied occupational and', 'page title Applied occupational... found');
	test.assertTextExists('Title Changed To', 'Title Changed To TAG 785');
	test.assertTextExists('AIHA journal', 'found AIHA');
	test.assertTextExists('Journal of occupational and environmental hygiene', 'found Journal of occupational and environmental hygiene');
    }).run(function() {
        test.done();
    });
});
