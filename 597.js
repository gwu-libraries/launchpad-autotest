// m27_001 #597
//
casper.test.begin('m27_001 #597 handle tray due date 12-31-2382', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/3465491';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Restricted Use' , 'found AU WRLC Restricted Use holding');
	test.assertTextExists('Off-site' , 'match status Off-site');
	test.assertTextExists('On the waterfront' , 'matched title');
    }).run(function() {
        test.done();
    });
});
