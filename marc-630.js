// m15_001 marc-630
//
casper.test.begin('m15_001 marc-630 Subjects', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/62247';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('The Franco-Russian Alliance', 'page title Franco-Russian... found');
	test.assertTextExists('Subjects', 'Subjects TAG 630');
	test.assertTextExists('Franco-Russian Alliance.', 'found Subject Franco-Russian Alliance');
    }).run(function() {
        test.done();
    });
});
