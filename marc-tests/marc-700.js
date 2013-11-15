// m15_001 marc-700
//
casper.test.begin('m15_001 marc-700 Other Authors', 4, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/62111';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Mudlumps at the mouth of South Pass' , 'page title Mudlumps at the mouth of South Pass found');
	test.assertTextExists('Other Authors' , 'Other Authors TAG 700');
	test.assertTextExists('Coleman, James M.', 'Coleman, James M.');
	test.assertTextExists('Gagliano, Sherwood M.', 'Gagliano, Sherwood M.');
    }).run(function() {
        test.done();
    });
});
