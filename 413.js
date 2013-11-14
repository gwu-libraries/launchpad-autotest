// m15_001 #413
//
casper.test.begin('m15_001 #413 Availability and Details tab', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/119119';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Indian culture' , 'page title Indian culture... found');
	test.assertTextExists('Details' , 'page text contains Details');
	test.assertTextExists('Availability' , 'page text on Availability');
    }).run(function() {
        test.done();
    });
});
