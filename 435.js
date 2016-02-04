// m16_001 #435
// previous test for issn value was invalid. 
// finds record not in voyager
//
casper.test.begin('m16_001 #435 ', 1, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/isbn/9781452220987';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Home Visiting' , 'page Home Visiting... found by ISBN query');
    }).run(function() {
        test.done();
    });
});
