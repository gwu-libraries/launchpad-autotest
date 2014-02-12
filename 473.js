//
// m16_001 #473
// this test employs xPath to locate an id
casper.test.begin('m16_001 #473 add google analytics to track tab click', 5, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/2256589';
var ENTITY=SERVER+USECASE;
var x = require('casper').selectXPath;
	casper.start(ENTITY, function() {
	test.assertTextExists('Sociology and architectural design' , 'page title verified');
    test.assertSelectorHasText('li', 'Availability');
	test.assertExists('.nav', 'found a class named "nav"');
	test.assertExists('.active', 'found a class named "active"');
    test.assertExists(x('//*[@id="holdings"]'), 'xPath found the holdings div');
    }).run(function() {
        test.done();
    });
});
