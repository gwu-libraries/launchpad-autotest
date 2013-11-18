// m15_001 marc-600
//
casper.test.begin('m15_001 marc-600 Subjects', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/62115';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('State Department and diplomatic', 'page title State Depart... found');
	test.assertTextExists('Subjects', 'Subjects TAG 600');
	test.assertTextExists('Mann, Thomas C. (Thomas Clifton), 1912-', 'found Subject Mann, Thomas');
    }).run(function() {
        test.done();
    });
});
