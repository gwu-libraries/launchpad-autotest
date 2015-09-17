// m31_001 #1027 MICROforms eligible for CLS Request
// 
// 
casper.test.begin('m31_001 #1027 microforms are eligible for CLS request', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/2353278';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('The Evening post.' , 'verified title page');
	test.assertTextExists('Microfilm' , 'verified micro form');
	test.assertTextExists('Request' , 'verified request link');
    }).run(function() {
        test.done();
    });
});
