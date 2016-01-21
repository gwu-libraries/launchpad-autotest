// 35-001 #1063 handle long list of isbns
// item 4032705 is the worst case
//
casper.test.begin('m35_001 #1063 handle long list of isbns', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/4032705';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('documents of international and local control' , 'matched title');
	test.assertTextExists('9780379007077' , 'matched the sixth isbn');
	test.assertDoesntExist('9780379006933' , 'validated that one of the dozens of isbns is not retrieved');
    }).run(function() {
        test.done();
    });
});
