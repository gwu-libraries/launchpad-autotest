// m15_001 marc-516
//
casper.test.begin('m15_001 marc-516 Description', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/403890';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('ThomasNet', 'page title ThomasNet... found');
	test.assertTextExists('Description', 'Description TAG 516');
	test.assertTextExists('Text (electronic database)', 'found description');
    }).run(function() {
        test.done();
    });
});
