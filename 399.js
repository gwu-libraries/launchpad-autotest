// m16_001 #399 and 497  
//
casper.test.begin('m16_001 #399 and 497 omit ILL for GW Media Lab', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/13237084';
var ENTITY=SERVER+USECASE;
casper.echo(ENTITY);
	casper.start(ENTITY, function() {
    test.assertTextExists('Tripod','title matched');
    test.assertTextExists('Gelman Media Lab','location matched');
    test.assertTextDoesntExist('Interlibrary Loan','verified ILL is omitted');
    }).run(function() {
        test.done();
    });
});
