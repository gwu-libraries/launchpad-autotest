// m15_001 marc-588
//
casper.test.begin('m15_001 marc-588 Source Description note', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/124229';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('The organ yearbook' , 'page title The organ yearbook found');
	test.assertTextExists('Source Description' , 'Source Description note TAG 555');
	test.assertTextExists('Latest issue consulted: Vol. 39 (2010)', 'found a Source Description note');
    }).run(function() {
        test.done();
    });
});
