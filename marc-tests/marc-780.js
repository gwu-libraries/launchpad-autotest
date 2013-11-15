// m15_001 marc-780
//
casper.test.begin('m15_001 marc-780 Earlier Title', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/12577235';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Tongbuga', 'page title Tongbuga yoksa... found');
	test.assertTextExists('Earlier Title', 'Earlier title TAG 780');
	test.assertTextExists('Pukpangsa nonch\'ong (OCoLC)70969064', 'found Pukpangsa nonch\'ong (OCoLC)70969064');
    }).run(function() {
        test.done();
    });
});
