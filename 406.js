// m16_001 #406 and 501/502
//
casper.test.begin('m16_001 #406 and 501/502 retrieve multiple GT holdings', 4, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/5059977';
var ENTITY=SERVER+USECASE;
casper.echo(ENTITY);
	casper.start(ENTITY, function() {
    test.assertTextExists('Losing Mogadishu','title matched');
    test.assertTextExists('Georgetown','institution matched');
    test.assertTextExists('Lauinger stacks','location #1 matched');
    test.assertTextExists('Special Collections','location #2 matched');
    }).run(function() {
        test.done();
    });
});
