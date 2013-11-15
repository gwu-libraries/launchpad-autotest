// m15_001 marc-242
//
casper.test.begin('m15_001 marc-242 Other title', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/393873';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('spravochnik po zhivotnovodstvu' , 'page title Slovar-spravochnik... found');
	test.assertTextExists('Other Title' , 'Other Title TAG 242');
	test.assertTextExists('Dictionary and handbook of animal husbandry', 'Dictionary and handbook...');
    }).run(function() {
        test.done();
    });
});
