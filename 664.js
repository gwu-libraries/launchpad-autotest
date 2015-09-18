// m29_001 #664 show GM reserves (temporary holding location)
// Note this test will fail if/when the item is taken off reserver at GM
//
// 
casper.test.begin('m29_001 #664 show GM reserves (temporary holding location)', 2, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/13375900';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('The killing fields' , 'matched title');
	test.assertTextExists('Reserves', 'matched Reserve holding');
    }).run(function() {
        test.done();
    });
});
