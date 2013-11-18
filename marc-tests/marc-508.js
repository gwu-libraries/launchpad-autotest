// m15_001 marc-508
//
casper.test.begin('m15_001 marc-508 Production Credits', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/12444768';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Waban-Aki' , 'page title Waban-Aki... found');
	test.assertTextExists('Production Credits' , 'Production Credits TAG 508');
	test.assertTextExists('Editor, Alison Burns ; photography, Philippe AMiguet ; music, Francis Grandmont.' , 'found Production credits note');
    }).run(function() {
        test.done();
    });
});
