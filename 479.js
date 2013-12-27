// m15_003 #479, 482, 491
// 
//
casper.test.begin('m15_003 #479, 482, 491', 4, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/7869426'
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('American Journal of Food' , 'page title American Journal... found');
	test.assertTextExists('George Washington' , 'Verified GW holding');
	test.assertTextExists('Georgetown' , 'Verified GT holding');
	test.assertTextDoesntExist('Full ' , 'Verified Full text online ');
    }).run(function() {
        test.done();
    });
});
