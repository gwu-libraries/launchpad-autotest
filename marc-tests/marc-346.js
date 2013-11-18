// m15_001 marc-346
//
casper.test.begin('m15_001 marc-346 Description', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/13307050';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Global supply chain management', 'page title Global supply chain... found');
	test.assertTextExists('Description', 'Description TAG 346');
	test.assertTextExists('VHS', 'found description VHS');
    }).run(function() {
        test.done();
    });
});
