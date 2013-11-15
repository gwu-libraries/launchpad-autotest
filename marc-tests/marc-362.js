// m15_001 marc-362
//
casper.test.begin('m15_001 marc-362 Current Frequency', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/2269338';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Methods in microbiology', 'page title Methods in microbiology. found');
	test.assertTextExists('Current Frequency', 'Current Frequency TAG 362');
	test.assertTextExists('Vol. 1-', 'found Vol. 1-');
    }).run(function() {
        test.done();
    });
});
