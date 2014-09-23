// m16_001 #402 and 496
// 
//
casper.test.begin('m16_001 #402 and 496 omit ILL for electronic only', 4, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/11509414';
var ENTITY=SERVER+USECASE;
casper.echo(ENTITY);
	casper.start(ENTITY, function() {
    test.assertTextExists('Pyomo','title matched');
    test.assertTextExists('George Washington','institution matched');
    test.assertTextExists('Online','location matched');
    test.assertTextDoesntExist('Interlibrary Loan','verified ILL is omitted');
    }).run(function() {
        test.done();
    });
});
