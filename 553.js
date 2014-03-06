// m16_003 #553, 574, 578
// 
//
casper.test.begin('m16_003 #553 omit $ subfields from subject', 2, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/13460814';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Create your future' , 'page title Create your future... found');
	test.assertTextDoesntExist('gnd' , 'Verified subfield $2 omitted');
    }).run(function() {
        test.done();
    });
});
