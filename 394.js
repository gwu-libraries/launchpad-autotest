// m14_004 394 + 248
//
casper.test.begin('m14_004 #248 + 394 Match on LCCN', 4, function suite(test) {
casper.echo("Test environment: "+SERVER);
var USECASE='/item/823422';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
        test.assertTitle('Love of the Sacred Heart. - GW Libraries','Title 823422 verified.');
	test.assertTextExists('Catholic', 'page body contains "Catholic"');
	test.assertTextExists('BT 2591 .D69', 'page body contains "BT 2591 .D69"');
	test.assertTextExists('Georgetown', 'page body contains "Georgetown"');
    }).run(function() {
        test.done();
    });
});
