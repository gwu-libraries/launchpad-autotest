// m15_001 marc-773
//
casper.test.begin('m15_001 marc-773 In Collection', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/206538';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('The proposed amendments', 'page title The proposed amendments... found');
	test.assertTextExists('In Collection', 'In Collection TAG 773');
	test.assertTextExists('American Historical Association', 'found In Collection American Historical...');
    }).run(function() {
        test.done();
    });
});
