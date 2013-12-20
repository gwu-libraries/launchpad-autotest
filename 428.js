// m15_002 #428 #452
// 
//
casper.test.begin('m15_002 #428 #452 omit MARC tag 049 OCLC CODE', 4, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/836250';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Sermons delivered during the Second' , 'page title Sermons... found');
	test.assertTextExists('Details' , 'Verified Details label');
	test.assertTextDoesntExist('OCLC Code' , 'Verified label removed');
	test.assertTextDoesntExist('DCUU DCUU DCUQ DCUQ' , 'Verified contents of 049 removed');
    }).run(function() {
        test.done();
    });
});
