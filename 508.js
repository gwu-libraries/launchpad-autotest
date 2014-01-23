// m16_001 #508 % 510
//
casper.test.begin('m16_001 #508 and 510 handle missing key bib_format', 1, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/787084';
var ENTITY=SERVER+USECASE;
casper.echo(ENTITY);
	casper.start(ENTITY, function() {
    test.assertTextExists('Adante pastoral','retrieved a title, it matched');
    }).run(function() {
        test.done();
    });
});
