// m15_001 marc-538
//
casper.test.begin('m15_001 marc-538 System Requirements note', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/114438';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Statistical quality control' , 'page title Statistical quality control... found');
	test.assertTextExists('System Requirements' , 'System Requirements note TAG 511');
	test.assertTextExists('System requirements for accompanying computer disc: IBM or compatible PC.', 'found System Requirements note');
    }).run(function() {
        test.done();
    });
});
