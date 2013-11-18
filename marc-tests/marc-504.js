// m15_001 marc-500
//
casper.test.begin('m15_001 marc-504 Notes', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/62112';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Society without the father' , 'page title Society without the father... found');
	test.assertTextExists('Notes' , 'Notes (general) TAG 504');
	test.assertTextExists('Bibliographical references included in' , 'found the 504 note');
    }).run(function() {
        test.done();
    });
});
