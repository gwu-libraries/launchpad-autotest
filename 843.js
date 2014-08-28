// m23_002 #843, 842
//
casper.test.begin('m23_002 #842, 843 not CLS request on Himmelfarb item', 1, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/8951019';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextDoesntExist('CLSReqForm?srcid=voyager:WRLC&bibid=' , 'page body does not contain "CLS Request"');
    }).run(function() {
        test.done();
    });
});
