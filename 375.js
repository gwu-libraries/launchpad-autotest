// m16_001 #375
// 
casper.test.begin('m16_001 #375 all full text links for this bib work', 6, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/9243519';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('National Poultry Improvement Plan','verified title'); 
	test.assertTextExists('US GovPubs Online' , 'verified WRLC holdings'); 
	test.assertTextExists('Available Online through Mason' , 'verified GM holdings'); 
	test.assertTextExists('INTERNET' , 'verified GT holdings'); 
	test.assertSelectorHasText('button' , 'Full text online'); 
    test.assertElementCount('button',3,'three buttons found');
    }).run(function() {
        test.done();
    });
});
