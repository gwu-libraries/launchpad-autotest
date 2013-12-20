// m15_002 #426 #467
// 
//
casper.test.begin('m15_002 #426 #467 do not include $7 subfield in details / tag 773', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/206538';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('The proposed amendments' , 'page title The proposed amendments... found');
	test.assertTextExists('Details' , 'Verified Details label');
	test.assertTextDoesntExist('c2as' , 'Verified content of $7 is not displayed');
    }).run(function() {
        test.done();
    });
});
