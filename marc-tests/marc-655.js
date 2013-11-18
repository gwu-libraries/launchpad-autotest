// m15_001 marc-655
//
casper.test.begin('m15_001 marc-655 Subjects', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/12439356';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Awakening to the great sleep war', 'page title Awakening... found');
	test.assertTextExists('Subjects', 'Subjects TAG 655');
	test.assertTextExists('Magic Realism (Literature).', 'found Subject Genre Magic Realism');
    }).run(function() {
        test.done();
    });
});
