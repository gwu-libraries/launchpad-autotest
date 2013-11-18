// m15_001 marc-400
//
casper.test.begin('m15_001 marc-400 Series', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/62463';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Thirteen Americans', 'page title Thirteen Americans found');
	test.assertTextExists('Series', 'Series TAG 400');
	test.assertTextExists('Religion and civilization series', 'found Religion and civilization series');
    }).run(function() {
        test.done();
    });
});
