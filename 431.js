// m15_002 #431 #465
// 
//
casper.test.begin('m15_002 #431 #465 add OCLC number to Details tab', 4, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/2256589';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Sociology and architectural design' , 'page title Sociology... found');
	test.assertTextExists('Details' , 'Verified Details tab');
	test.assertTextExists('OCLC Number' , 'Verified OCLC Number label');
	test.assertTextExists('01401830' , 'Verified OCLC Number 01401830');
    }).run(function() {
        test.done();
    });
});
