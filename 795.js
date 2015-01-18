// m27_001 #795
//
casper.test.begin('m27_001 #795 status=missing', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/11494185';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Heidegger' , 'matched title');
	test.assertTextExists('Gelman stacks' , 'matched location');
	test.assertTextExists('Missing' , 'found status Missing');
    }).run(function() {
        test.done();
    });
});
