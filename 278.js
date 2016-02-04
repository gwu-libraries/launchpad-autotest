// m14_004 278 
//
casper.test.begin('m14_004 #278 page loads with diacritics', 1, function suite(test) {
casper.echo("Test environment: "+SERVER);
var USECASE='/item/7765894';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
 	test.assertTextExists('No items found', 'page no items found');
    }).run(function() {
        test.done();
    });
});
