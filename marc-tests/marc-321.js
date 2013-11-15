// m15_001 marc-321
//
casper.test.begin('m15_001 marc-321 Current Frequency', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/65535';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Methods in microbiology', 'page title Methods in microbiology. found');
	test.assertTextExists('Current Frequency', 'Current Frequency TAG 321');
	test.assertTextExists('Irregular', 'found Irregular');
    }).run(function() {
        test.done();
    });
});
