// m15_001 marc-510
//
casper.test.begin('m15_001 marc-510 Citation note', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/70596';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Travels with my aunt' , 'page title Travels with my aunt... found');
	test.assertTextExists('Citation' , 'Citation citation TAG 510');
	test.assertTextExists('Graham Greene', 'found Citation note');
    }).run(function() {
        test.done();
    });
});
