// m15_002 #434 #459
// 
//
casper.test.begin('m15_002 #434 #459 GT Qatar stacks ineligible for CLS', 4, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/12881498'
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('The Interestings' , 'page title The Interestings... found');
	test.assertTextExists('Details' , 'Verified Details tab');
	test.assertTextExists('Qatar stacks' , 'Verified GT Qatar holding found');
	test.assertTextDoesntExist('inst=GT' , 'Verified no CLS for Qatar found');
    }).run(function() {
        test.done();
    });
});
