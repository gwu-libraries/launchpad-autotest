// m15_001 marc-800
//
casper.test.begin('m15_001 marc-800 Series', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/12442580';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Lulu and the duck in the park', 'page title Lulu... found');
	test.assertTextExists('Series', 'Series TAG 800');
	test.assertTextExists('McKay', 'found Mckay series');
    }).run(function() {
        test.done();
    });
});
