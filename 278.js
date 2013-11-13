// m14_004 278 
//
casper.test.begin('m4_004 #278 page loads with diacritics', 3, function suite(test) {
casper.echo("Test environment: "+SERVER);
var USECASE='/item/7765894';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.info("If this works, the JSON output should be alright");
 	test.assertTextExists('Arithmetic', 'page body contains "Arithmetic"');
	test.assertTextExists('José', 'page body contains "José"');
	test.assertTextExists('Çetin', 'page body contains "Çetin"');
    }).run(function() {
        test.done();
    });
});
