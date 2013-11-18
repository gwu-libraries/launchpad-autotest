// m15_001 marc-550
//
casper.test.begin('m15_001 marc-550 Notes', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/12531891';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Afrika matematika' , 'page title Afrika matematika... found');
	test.assertTextExists('Notes' , 'Notes (general) TAG 550');
	test.assertTextExists('avec le concours financier' , 'found 550 note');
    }).run(function() {
        test.done();
    });
});
