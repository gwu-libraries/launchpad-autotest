// m35-001 #1024 get added authors on Russian language
// if it returns anything other than the error page, it works
// This script can't test for non-roman characters
casper.test.begin('m35-001 #1024 get added authors on Russian', 4, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/2530157';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('govorakh' , 'matched roman characters in title');
	test.assertTextExists('WRLC Shared' , 'matched location');
	test.assertTextExists('Paufoshima', 'matched roman characters in author');
	test.assertTextExists('Off-site' , 'matched Off-site');
    }).run(function() {
        test.done();
    });
});
