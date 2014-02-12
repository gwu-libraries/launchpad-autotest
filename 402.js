// m16_001 #402 and 496
//
casper.test.begin('m16_001 #402 and 496 omit ILL for electronic only', 4, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/12600000';
var ENTITY=SERVER+USECASE;
casper.echo(ENTITY);
	casper.start(ENTITY, function() {
    test.assertTextExists('Interview with Robinson','title matched');
    test.assertTextExists('American','institution matched');
    test.assertTextExists('Internet Resources','location matched');
    test.assertTextDoesntExist('Interlibrary Loan','verified ILL is omitted');
    }).run(function() {
        test.done();
    });
});
