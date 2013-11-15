// m15_001 marc-240
//
casper.test.begin('m15_001 marc-240 Standard title', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/62112';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Society without the father' , 'page title Society... found');
	test.assertTextExists('Standard Title' , 'Standard Title TAG 240');
	test.assertTextExists('Auf dem Weg zur vaterlosen' , 'Auf dem Weg zur vaterlosen');
    }).run(function() {
        test.done();
    });
});
