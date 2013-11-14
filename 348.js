// m14_001 #348 
//
casper.test.begin('m14_001 #348 not CLS request on Media item', 1, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/13237084';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextDoesntExist('CLSReqForm?srcid=voyager:WRLC&bibid=' , 'page body does not contain "CLS Request"');
    }).run(function() {
        test.done();
    });
});
