// m15_001 marc-505
//
casper.test.begin('m15_001 marc-505 Contents note', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/2091961';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Tapestries of Europe' , 'page title Tapestries of Europe ... found');
	test.assertTextExists('Contents' , 'Contents note TAG 505');
	test.assertTextExists('v. 1. Text.--v. 2. Plates.' , 'found Contents note');
    }).run(function() {
        test.done();
    });
});
