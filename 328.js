// m14_001 #328  
//
casper.test.begin('m14_001 #328 No CLS link for GM law item', 1, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/7520976';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextDoesntExist('CLSReqForm?srcid=voyager:WRLC&bibid=7520976' , 'page body does not contain "CLS Request for GM item"');
    }).run(function() {
        test.done();
    });
});
