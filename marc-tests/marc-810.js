// m15_001 marc-810
//
casper.test.begin('m15_001 marc-810 Series', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/62168';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Report of the special study', 'page title Report ... found');
	test.assertTextExists('Series', 'Series TAG 810');
	test.assertTextExists('United States. Congress. House. Report', 'found US Congress House series');
    }).run(function() {
        test.done();
    });
});
