// m15_001 marc-650
//
casper.test.begin('m15_001 marc-650 Subjects', 4, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/62111';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Mudlumps at the mouth of South Pass', 'page title Mudlumps... found');
	test.assertTextExists('Subjects', 'Subjects TAG 650');
	test.assertTextExists('Mud lumps.', 'found Subject Mud lumps');
	test.assertTextExists('Sediments (Geology)', 'found Subject Sediments');
    }).run(function() {
        test.done();
    });
});
