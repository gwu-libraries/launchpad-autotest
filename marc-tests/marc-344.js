// m15_001 marc-344
//
casper.test.begin('m15_001 marc-344 Description', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/13307050';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Global supply chain management', 'page title Global supply chain... found');
	test.assertTextExists('Description', 'Description TAG 344');
	test.assertTextExists('analog magnetic', 'found description analog magnetic');
    }).run(function() {
        test.done();
    });
});
