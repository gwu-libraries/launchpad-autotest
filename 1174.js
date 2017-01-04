// m41_001 do not display URI from MARC 830 tag
// 
// 
casper.test.begin('m41_001 #1174 do not display URI from MARC 830 tag', 2, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/15976793';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('theory of mind' , 'verified title page');
	test.assertTextDoesntExist('n84729322' , 'verified id n84729322 did not display');
    }).run(function() {
        test.done();
    });
});
