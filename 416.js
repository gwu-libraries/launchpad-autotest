// m15_001 #180 #409 #416
//
casper.test.begin('m15_001 #180 #409 #416 Basic test for Details tab', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/119119';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Indian culture' , 'page title Indian culture... found');
	test.assertTextExists('Details' , 'page text contains Details');
	test.assertTextExists('Great Lakes Region' , 'text on Details tab found');
    }).run(function() {
        test.done();
    });
});
