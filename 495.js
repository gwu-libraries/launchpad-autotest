// m16_001 #495 and 521
//
casper.test.begin('m16_001 #495 and 521 TAG 990 added to contents', 5, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/7977834';
var ENTITY=SERVER+USECASE;
casper.echo(ENTITY);
	casper.start(ENTITY, function() {
    test.assertTextExists('Philosophy','title matched');
    test.assertTextExists('Philosophy of religion and the question of God','990 tag string matched');
    }).run(function() {
        test.done();
    });
});
