// m14_004 396 + 372 
//
casper.test.begin('m14_004 #372+396 ISBN diacritic does not trigger error', 1, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/12280154';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('qui comptent', 'page loaded without throwing error');
    }).run(function() {
        test.done();
    });
});
