// m31_001 do not display full text for georgetown endowment fund link
// 
// 
casper.test.begin('m31_001 #1007 do not display full text for gt endowment link', 2, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/14617838';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Female sexual offenders' , 'verified title page');
	test.assertTextDoesntExist('Full Text Online' , 'verified Full Text Online link did not display');
    }).run(function() {
        test.done();
    });
});
