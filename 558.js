// m16_003 #558, 568
// 
// the fact that a page is returned is sufficient to validate this test
casper.test.begin('m16_003 #558, 568 diacritics in other author ', 1, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/13319347';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Cademos do Programa' , 'page title Cademo do Programa... found');
    }).run(function() {
        test.done();
    });
});
