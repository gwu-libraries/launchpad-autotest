// m14_003 #368 + #369 + #370 + #277 test server
//
casper.test.begin('m14_003 #368 + 369 + 370 + 277 pass on diacritics', 1, function suite(test) {
casper.echo("Test environment: "+SERVER);
var USECASE='/item/7765474';
var ENTITY=SERVER+USECASE;
casper.start(ENTITY, function() {
	test.assertTextExists('No items found', 'no items page returned');
    }).run(function() {
        test.done();
    });
});
