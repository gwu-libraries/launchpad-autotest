// m14_003 374 + 358 + 390 
//
casper.test.begin('m14_003 #374+358+390 ignore invalid match on OCLC', 1, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/7239079';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextDoesntExist('AC4', 'page body does not contain "Call no. starting AC4"');
    }).run(function() {
        test.done();
    });
});
