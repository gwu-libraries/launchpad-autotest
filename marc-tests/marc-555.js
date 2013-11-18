// m15_001 marc-555
//
casper.test.begin('m15_001 marc-555 Finding Aid note', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/124229';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('The organ yearbook' , 'page title The organ yearbook found');
	test.assertTextExists('Finding Aids' , 'Finding Aids note TAG 555');
	test.assertTextExists('Vols. 1 (1970)-20 (1989)', 'found a Finding Aids note');
    }).run(function() {
        test.done();
    });
});
