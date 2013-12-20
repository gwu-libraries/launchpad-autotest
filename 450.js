// m15_002 #450 #453
// 
//
casper.test.begin('m15_002 #450 #453 omit MARC tag 049 Dewey from Details', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/12235289';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Google this' , 'page title Google this... found');
	test.assertTextExists('Details' , 'Verified Details tab');
	test.assertTextDoesntExist('Dewey' , 'Verified Dewey label removed');
    }).run(function() {
        test.done();
    });
});
