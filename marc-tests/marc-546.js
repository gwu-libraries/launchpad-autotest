// m15_001 marc-546
//
casper.test.begin('m15_001 marc-546 Notes', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/67469';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('A historical Russian reader' , 'page title A historical Russian reader... found');
	test.assertTextExists('Notes' , 'Notes (general) TAG 546');
	test.assertTextExists('Text in Old Russian, foreword and notes in English' , 'found 546 note');
    }).run(function() {
        test.done();
    });
});
