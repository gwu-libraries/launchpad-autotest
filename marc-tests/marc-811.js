// m15_001 marc-811
//
casper.test.begin('m15_001 marc-811 Series', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/62774';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('The church and the new world', 'page title The church... found');
	test.assertTextExists('Series', 'Series TAG 811');
	test.assertTextExists('Drake Conference', 'found Drake Conference series');
    }).run(function() {
        test.done();
    });
});
