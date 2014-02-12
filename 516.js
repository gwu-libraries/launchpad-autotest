// m16_001 #516 handle bibs with null title
//
casper.test.begin('m16_001 #516', 1, function suite(test) {  
casper.echo("Test environment: "+SERVER);
var USECASE='/item/1543598';
var ENTITY=SERVER+USECASE;
casper.echo(ENTITY);
	casper.start(ENTITY, function() {
	test.assertTextExists('Area studies and the library', 'bib retrieved. MATCH worked');
    }).run(function() {
        test.done();
    });
});
