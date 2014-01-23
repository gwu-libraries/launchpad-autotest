// m16_001 #386 and 498 use Missing, other status always over other status
//
casper.test.begin('m16_001 #386 and 498 verify missing status is used', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/681520';
var ENTITY=SERVER+USECASE;
casper.echo(ENTITY);
	casper.start(ENTITY, function() {
    test.assertTextExists('Sexuality, the Bible','title matched');
    test.assertTextExists('Catholic','institution matched');
    test.assertTextExists('Missing','Missing status matched');
    }).run(function() {
        test.done();
    });
});
