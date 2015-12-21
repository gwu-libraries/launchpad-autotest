// m27_001 #936 
//
casper.test.begin('m27_001 #936 some non-GW available', 2, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/12643113';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Georgetown' , 'found Georgetown holding');
	test.assertTextExists('Online' , 'found Online holding');
    }).run(function() {
        test.done();
    });
});
