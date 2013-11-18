// m15_001 marc-610
//
casper.test.begin('m15_001 marc-610 Subjects', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/62115';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('State Department and diplomatic', 'page title State Depart... found');
	test.assertTextExists('Subjects', 'Subjects TAG 610');
	test.assertTextExists('United States. Dept. of State -- Officials and employees.', 'found Subject US Dept. of State');
    }).run(function() {
        test.done();
    });
});
