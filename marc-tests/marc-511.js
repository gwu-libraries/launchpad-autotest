// m15_001 marc-511
//
casper.test.begin('m15_001 marc-511 Performers note', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/12444768';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Waban-Aki' , 'page title Waban-Aki... found');
	test.assertTextExists('Performers' , 'Performers  note TAG 511');
	test.assertTextExists('Written, directed and produced by Alanis Obomsawin.', 'found Performers note');
    }).run(function() {
        test.done();
    });
});
