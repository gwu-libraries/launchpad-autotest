// m16_001 #435
// previous test for issn value was invalid. 
//
casper.test.begin('m16_001 #435 WRLC shared ebook', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/isbn/9781452220987';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Home visiting' , 'page Home visiting... found by ISBN query');
	test.assertTextExists('Details' , 'Verified Details label');
	test.assertTextExists('Electronic books' , 'Verified content of Genre');
    }).run(function() {
        test.done();
    });
});
