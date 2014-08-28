// m23_002 #810
//
casper.test.begin('m23_002 #810 footer links, and header links', 11, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/advanced/';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('ArticlesPlus' , 'Verified ArticlePlus');
	test.assertTextExists('Course Reserves', 'Verified Course Reserves');
	test.assertTextExists('API' , 'Verified API');
	test.assertTextExists('Classic Catalog' , 'Classic Catalog');
    //
    // Header Links
	test.assertTextExists('About' , 'About');
	test.assertTextExists('MyAccount' , 'MyAccount');
	test.assertTextExists('Ask a Librarian' , 'Ask a Librarian');
	test.assertTextExists('Found a Problem?' , 'Found a Problem?');
    //
    // Links
	test.assertTextExists('Search Tips' , 'Search Tips');
	test.assertTextExists('Standard Search' , 'Standard Search');
    //
    // Fields
	test.assertTextExists('Any Field' , 'Any Field');

    }).run(function() {
        test.done();
    });
});
