// m15_001 marc-507
//
casper.test.begin('m15_001 marc-507 Notes', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/211752';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Map of ancient Britain' , 'page title Map of ancient Britain... found');
	test.assertTextExists('Notes' , 'Notes (general) TAG 507');
	test.assertTextExists('Scale 1:625,000' , 'found 507 note');
    }).run(function() {
        test.done();
    });
});
