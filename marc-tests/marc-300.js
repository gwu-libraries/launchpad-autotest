// m15_001 marc-300
//
casper.test.begin('m15_001 marc-300 Description', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/62111';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Mudlumps at the mouth', 'page title Mudlumps... found');
	test.assertTextExists('Description', 'Description TAG 300');
	test.assertTextExists('xvi, 190 p. illus. 28 cm.', 'found description xvi, 190 p. ...');
    }).run(function() {
        test.done();
    });
});
