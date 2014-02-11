// m13_001 #273
//
casper.test.begin('m13_001 #273 find GM title with no WRLC match', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/m2001110';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Public policy in Asia' , 'page displayed for GM title that has no WRLC match'); 
	test.assertTextExists('George Mason' , 'page displayed has GM holding'); 
	test.assertTextDoesntExist('Interlibrary Loan' , 'page displayed has Interlibrary loan link'); 
    }).run(function() {
        test.done();
    });
});
