// m15_001 marc-502
//
casper.test.begin('m15_001 marc-502 Thesis / Dissertation note', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/63568';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('State and statecraft' , 'page title State and statecraft... found');
	test.assertTextExists('Thesis' , 'Thesis / Dissertation note TAG 502');
	test.assertTextExists('Thesis (M.A.)--Cornell, 1964.' , 'found Thesis note');
    }).run(function() {
        test.done();
    });
});
