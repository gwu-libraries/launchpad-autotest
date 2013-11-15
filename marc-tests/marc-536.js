// m15_001 marc-536
//
casper.test.begin('m15_001 marc-536 Funding / Sponsors', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/277499';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Archaeological' , 'page title Archaeological... found');
	test.assertTextExists('Funding Sponsors' , 'Funding Sponsors TAG 536');
	test.assertTextExists('Funding Sponsors' , '82-1289');
    }).run(function() {
        test.done();
    });
});
