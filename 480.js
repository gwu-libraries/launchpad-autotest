// m15_003 #480, 492
// 
//
casper.test.begin('m15_003 #480, 492 do not show lock on purl.access.gpo.gov', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/9239000'
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Defense management' , 'page title Defense management... found');
	test.assertTextDoesntExist('GT only' , 'Verified label GT only omitted');
	test.assertTextDoesntExist('GM only' , 'Verified label GM only omitted');
    }).run(function() {
        test.done();
    });
});
