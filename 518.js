// m16_001 #518 and 519
//
casper.test.begin('m16_001 #518 and 519 handle empty string', 1, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/6649762';
var ENTITY=SERVER+USECASE;
casper.echo(ENTITY);
	casper.start(ENTITY, function() {
    test.assertTextExists('Roper Center iPOLL','retrieved Roper Center iPOLL, it matched');
    }).run(function() {
        test.done();
    });
});
