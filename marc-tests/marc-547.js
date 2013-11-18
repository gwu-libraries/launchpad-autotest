// m15_001 marc-547
//
casper.test.begin('m15_001 marc-547 Notes', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/437869';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Report of the Council of the Royal Institute', 'Report of the... found');
	test.assertTextExists('Notes' , 'Notes (general) TAG 547');
	test.assertTextExists('Title varies: -1924/25, Report of the Executive Committee' , 'found 547 note');
    }).run(function() {
        test.done();
    });
});
