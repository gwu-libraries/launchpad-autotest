// m15_001 marc-534
// THIS TEST WILL NOW FAIL, THE RECORD HAS BEEN REVISED IN THE CATALOG
casper.test.begin('m15_001 marc-534 Original Version note', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/12483219';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Flamenco Live!' , 'page title Flamenco Live! ... found');
	test.assertTextExists('Original Version' , 'Original Version note TAG 534');
	test.assertTextExists('Cante Gitano Disc One 198.', 'found Original Version note');
    }).run(function() {
        test.done();
    });
});
