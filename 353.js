// m14_001 344 + 353 
casper.test.begin('m14_001 344 + 353 WRLC Catalog link', 5, function suite(test) {
casper.echo("Test environment: "+SERVER);
var USECASE='/item/11880965';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
        test.assertTextExists("Brigham Young", "page with title Brigham Young... found");
        test.assertTextExists("WRLC Catalog","WRLC catalog link found");
	test.assertExists('span.catlink','found span catlink');
	test.assertSelectorHasText('span.catlink', 'View detailed description');
        test.assertTextExists("WRLC Catalog","WRLC catalog link found");
    });

    casper.run(function() {
        test.done();
    });
});
