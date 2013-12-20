// marc-351.js
// m15_002 #418 #456
// 
//
casper.test.begin('m15_002 #418 #456 Contents of MARC 351 display in description', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/3053346';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Mitch Snyder papers' , 'page title Mitch Snyder papers... found');
	test.assertTextExists('Description' , 'Verified Description label');
	test.assertTextExists('Organized into 3 series' , 'Verified MARC 351 content is displayed');
    }).run(function() {
        test.done();
    });
});
