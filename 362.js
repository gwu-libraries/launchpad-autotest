// m14_00  327 + 362 
//
casper.test.begin('m14_001 #327 + 362 match on 020z', 2, function suite(test) {
casper.echo("Test environment: "+SERVER);
var USECASE='/item/5906202';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Mexico City reader', 'page body contains "Mexico City reader"');
	test.assertTextExists('Shared E-Resources', 'page body contains "Shared E-Resources"');
    }).run(function() {
        test.done();
    });
});
