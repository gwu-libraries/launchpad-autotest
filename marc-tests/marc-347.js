// m15_001 marc-347
//
casper.test.begin('m15_001 marc-347 Description', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/13307896';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Trading up to save the Chesapeake Bay', 'page title Trading up to save... found');
	test.assertTextExists('Description', 'Description TAG 347');
	test.assertTextExists('text file PDF', 'found description text file PDF');
    }).run(function() {
        test.done();
    });
});
