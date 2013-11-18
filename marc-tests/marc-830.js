// m15_001 marc-830
//
casper.test.begin('m15_001 marc-830 Series', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/62111';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Mudlumps at the mouth of South Pass', 'page title Mudlumps... found');
	test.assertTextExists('Series', 'Series TAG 830');
	test.assertTextExists('Louisiana State University studies', 'found LA State Univ. series');
    }).run(function() {
        test.done();
    });
});
