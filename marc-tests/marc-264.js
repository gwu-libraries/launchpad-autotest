// m15_001 marc-264
//
casper.test.begin('m15_001 marc-264 Copyright', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/12976984';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Diversity-oriented synthesis', 'page title Diversity-oriented synthesis... found');
	test.assertTextExists('Copyright Date', 'Copyright TAG 264');
	test.assertTextExists('[2013]', 'found [2013]');
    }).run(function() {
        test.done();
    });
});
