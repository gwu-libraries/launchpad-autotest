// m14_001 344 
// m15 supercedes this issue, removing all tests except title
casper.test.begin('m14_001 344 WRLC Catalog link', 1, function suite(test) {
casper.echo("Test environment: "+SERVER);
var USECASE='/item/11880965';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
        test.assertTextExists("Brigham Young", "page with title Brigham Young... found");
        //test.assertTextExists("WRLC Catalog","WRLC catalog link found");
	//test.assertExists('span.catlink','found span catlink');
	//test.assertSelectorHasText('span.catlink', 'View detailed description');
        //test.assertTextExists("WRLC Catalog","WRLC catalog link found");
    });

    casper.run(function() {
        test.done();
    });
});
