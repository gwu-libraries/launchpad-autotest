// m15_001 #400a 
//
casper.test.begin('m15_001 #400a Page author and subject links', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/119119';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Indian culture' , 'page title Indian culture... found');
	test.assertSelectorHasText('a', 'Quimby, George Irving, 1913-');
	test.assertSelectorHasText('a', 'Indians of North America');
    }).run(function() {
        test.done();
    });
});
