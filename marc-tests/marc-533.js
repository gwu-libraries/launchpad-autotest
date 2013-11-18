// m15_001 marc-533
//
casper.test.begin('m15_001 marc-533 Reproduction note', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/71177';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('The Society of the Muslim Brothers' , 'page title The Society of the... found');
	test.assertTextExists('Reproduction' , 'Reproduction note TAG 533');
	test.assertTextExists('Photocopy.', 'found Reproduction note');
    }).run(function() {
        test.done();
    });
});
