// m16_001 #356
// There will be total of 11 items when this is working properly
// 
casper.test.begin('m16_001 #356 list UDC items for specific holding', 2, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/1351475';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Mencken / by Philip Wagner','verified title'); 
	test.assertTextExists('Van Ness stacks' , 'page includes Van Ness holdings'); 
	//test.assertElementCount('div.itemrow', 11, 'found total of 11 items'); 
    }).run(function() {
        test.done();
    });
});
