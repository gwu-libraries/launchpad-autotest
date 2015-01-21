// m26_001 #868 show number of hold requests
// 
casper.test.begin('m26_001 #868 show number of patron holds', 2, function suite(test) { 
casper.echo("Test environment: "+SERVER);
casper.echo("This test may fail if there are no holds on the test item");
casper.echo("Items on hold may be identified by a query for item_status='5' or item_status='6'");
var USECASE='/item/1016992';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Enamels of Limoges' , 'matched title');
	test.assertTextExists('Holds' , 'found string Holds');
    }).run(function() {
        test.done();
    });
});
