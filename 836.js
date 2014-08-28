// m23_002 #836
//
casper.test.begin('m23_002 #836 title match does not eliminate match', 5, function suite(test) { 
// voyager.py tests first 8 characters. So this title and the bib with the title
// Miracles : [electronic resource] ... are still matched
casper.echo("Test environment: "+SERVER);
var USECASE='/item/8479178';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Miracles : wonder and meaning' , 'Verified title');
	test.assertTextExists('Shared E-Resources' , 'Verified WRLC E-Resource holding present');
	test.assertTextExists('George Mason' , 'Verified GMU holding present');
	test.assertTextExists('Georgetown' , 'Verified GT holding present');
	test.assertTextExists('Marymount' , 'Verified Marymount holding present');
    }).run(function() {
        test.done();
    });
});
