// m15_001 marc-246
//
casper.test.begin('m15_001 marc-246 Other title', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/12422001';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Nyquist AD converters' , 'page title Nyquist AD converters, sensor interfaces, and robustness.. found');
	test.assertTextExists('Other Title' , 'Other Title TAG 246');
	test.assertTextExists('AACD 2012', 'AACD 2012');
    }).run(function() {
        test.done();
    });
});
