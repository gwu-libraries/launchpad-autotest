// m13_001 #279
//
casper.test.begin('m13_001 #279 find GT title with no WRLC match', 2, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/b12450509';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Memorial addresses on the life' , 'page displayed for GT title that has no WRLC match'); 
	test.assertTextExists('Georgetown' , 'page displayed has GT holding'); 
	//test.assertTextExists('Interlibrary Loan' , 'page displayed has Interlibrary loan link'); 
    }).run(function() {
        test.done();
    });
});
