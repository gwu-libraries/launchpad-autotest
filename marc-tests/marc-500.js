// m15_001 marc-500
//
casper.test.begin('m15_001 marc-500 Notes', 4, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/62112';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Society without the fathe' , 'page title Society without the father... found');
	test.assertTextExists('Notes' , 'Notes (general) TAG 500');
	test.assertTextExists('A Helen and Kurt Wolff book' , 'found first 500 note');
	test.assertTextExists('Translation of Auf dem Weg zur vaterlosen Gesellschaft' , 'found second 500 note');
    }).run(function() {
        test.done();
    });
});
