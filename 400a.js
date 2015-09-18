// m15_001 #400a 
//
// subject links temporarily disabled Sept 2014
//
// test.assertSelectorHasText('a', 'Indians of North America');
casper.test.begin('m15_001 #400a Page author and subject links', 2, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/119119';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Indian culture' , 'page title Indian culture... found');
	test.assertSelectorHasText('a', 'Quimby, George I. (George Irving), 1913-2003');
    }).run(function() {
        test.done();
    });
});
