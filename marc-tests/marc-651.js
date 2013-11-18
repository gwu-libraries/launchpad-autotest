// m15_001 marc-651
//
casper.test.begin('m15_001 marc-651 Subjects', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/62111';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Mudlumps at the mouth of South Pass', 'page title Mudlumps... found');
	test.assertTextExists('Subjects', 'Subjects TAG 651');
	test.assertTextExists('Mississippi River -- Delta.', 'found Subject Mississippi River');
    }).run(function() {
        test.done();
    });
});
