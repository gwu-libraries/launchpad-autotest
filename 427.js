// m15_002 #427 #455
// 
//
casper.test.begin('m15_002 #427 #455 add MARC tag 521 to Notes', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/12605379';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('The Cardinal' , 'page title The Cardinal... found');
	test.assertTextExists('Details' , 'Verified Details label');
	test.assertTextExists('MPAA rating: Not rated' , 'Verified content of MARC 521 displays in Notes');
    }).run(function() {
        test.done();
    });
});
