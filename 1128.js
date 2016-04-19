// m39_001 #1128 override due date 12-31-2382 with off-site
// 
// 
casper.test.begin('m39-001 #1128 override due 12-31-2382 WRLC off site', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/2265250';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Current biography yearbook' , 'verified title page');
	test.assertTextExists('Gelman Reference' , 'verified location');
	test.assertTextDoesntExist('12-31-2382' , 'does not say due 12-31-2382');
    }).run(function() {
        test.done();
    });
});
