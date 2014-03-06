// m16_003 #574, 578, 553
// 
//
casper.test.begin('m16_003 #574 verify subject separator (after 553)', 2, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/329034';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('The West Indies; a history' , 'page title West Indies... found');
	test.assertTextExists('West Indies -- Description' , 'Verified subject separator -- found');
    }).run(function() {
        test.done();
    });
});
