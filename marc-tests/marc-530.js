// m15_001 marc-530
//
casper.test.begin('m15_001 marc-530 Notes', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/12445029';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Strife and progress' , 'page title Strife and progress... found');
	test.assertTextExists('Notes' , 'Notes (general) TAG 530');
	test.assertTextExists('Also available online' , 'found 530 note');
    }).run(function() {
        test.done();
    });
});
