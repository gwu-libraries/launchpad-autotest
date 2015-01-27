// m27_001 #936 
//
casper.test.begin('m27_001 #936 some non-GW available', 4, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/12643113';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Georgetown' , 'found Georgetown holding');
	test.assertTextExists('Online' , 'found Online holding');
	test.assertTextExists('Available to all' , 'found Available to all message'); test.assertTextExists('Art of the Islamic world' , 'matched title');
    }).run(function() {
        test.done();
    });
});
