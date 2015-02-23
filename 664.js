// m29_001 #664 show GM reserves (temporary holding location)
//
// 
casper.test.begin('m29_001 #664 show GM reserves (temporary holding location)', 2, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/14214024';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('All she was worth' , 'matched title');
	test.assertTextExists('2 Hour Reserve' , 'found Reserve holding');
    }).run(function() {
        test.done();
    });
});
