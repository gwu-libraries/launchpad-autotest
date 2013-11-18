// m15_001 marc-540
//
casper.test.begin('m15_001 marc-540 Terms of Usage note', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/12605379';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('The Cardinal' , 'page title The Cardinal... found');
	test.assertTextExists('Terms of Usage' , 'Terms of Usage note TAG 540');
	test.assertTextExists('For private home use only.', 'found Terms of Usage note');
    }).run(function() {
        test.done();
    });
});
