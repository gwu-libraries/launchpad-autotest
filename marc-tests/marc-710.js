// m15_001 marc-710
//
casper.test.begin('m15_001 marc-710 Other Authors', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/62114';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Invention and the patent system' , 'page title Invention and the patent system Pass found');
	test.assertTextExists('Other Authors' , 'Other Authors TAG 710');
	test.assertTextExists('United States. Congress. Joint Economic Committee.', 'United States. Congress. Joint Economic Committee.');
    }).run(function() {
        test.done();
    });
});
