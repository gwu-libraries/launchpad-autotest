// m14_003 #350 + #367 + #385  
//
casper.test.begin('m4_003 #367 #385 #350 No CLS link for GT DUE item', 1, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/11734014';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextDoesntExist('CLSReqForm?srcid=voyager:WRLC&bibid=12467934' , 'page body does not contain "CLS Request for GT item"');
    }).run(function() {
        test.done();
    });
});
