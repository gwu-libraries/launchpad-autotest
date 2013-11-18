// m15_001 marc-520
//
casper.test.begin('m15_001 marc-520 Summary note', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/62214';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Untouchable' , 'page title Untouchable... found');
	test.assertTextExists('Summary' , 'Summary note TAG 520');
	test.assertTextExists('A young Indian recounts his struggle', 'found Summary note');
    }).run(function() {
        test.done();
    });
});
