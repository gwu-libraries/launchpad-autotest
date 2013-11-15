// m15_001 marc-740
//
casper.test.begin('m15_001 marc-740 Other title', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/62112';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Society without the father' , 'page title Society without the father found');
	test.assertTextExists('Other Title' , 'Other Title TAG 740');
	test.assertTextExists('Auf dem Weg vaterlosen Gesellschaft', 'Auf dem Weg vaterlosen Gesellschaft');
    }).run(function() {
        test.done();
    });
});
