// m15_002 #464 #469
// 
//
casper.test.begin('m15_002 #464 #469 exclude ISBN values with SET, SERIES', 5, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/5608770'
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Shakespearean and other' , 'page title Shakespearean and... found');
	test.assertTextExists('George Washington' , 'Verified GW holding');
	test.assertTextExists('PR4624' , 'Verified desired Call Number displayed');
	test.assertTextDoesntExist('PR858' , 'Verified unwanted call number omitted');
	test.assertTextDoesntExist('Catholic' , 'Verified unwanted Library omitted');
    }).run(function() {
        test.done();
    });
});
