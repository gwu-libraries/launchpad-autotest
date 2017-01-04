// m41_001 do not display URI from MARC 711 tag
// 
// 
casper.test.begin('m41_001 #1148 do not display URI from MARC 711 tag', 2, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/6857485';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('sequential analysis and related topics' , 'verified title page');
	test.assertTextDoesntExist('no2007033738' , 'verified id no2007033738 did not display');
    }).run(function() {
        test.done();
    });
});
