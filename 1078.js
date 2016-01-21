// 35-001 #1078 GM links with prefix mutex are not available to all
// Previously the page displayed an online button
//
casper.test.begin('m35_001 #107 GM links with prefix mutex not available to all', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/7765485';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Autonomic networking' , 'matched title');
	test.assertTextExists('George Mason' , 'found George Mason holding');
	test.assertTextExists('GM only' , 'found note: GM only');
    }).run(function() {
        test.done();
    });
});
