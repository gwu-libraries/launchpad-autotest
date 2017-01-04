// m41_001 placeholder text on advanced search keyword field
// 
// 
casper.test.begin('m41_001 #1177 find search in any language placeholder', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/advanced/';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Advanced Search' , 'verified title page');
	test.assertExists('.input-xxlarge' , 'verified class exists');
	test.assertSelectorHasText('.input-xxlarge' , 'Search in any language');
    }).run(function() {
        test.done();
    });
});
