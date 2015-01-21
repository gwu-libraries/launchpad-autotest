// m25_002 #777d dissertation
// 777 is a multipart test
casper.test.begin('m25_002 #777d', 2, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/search?q=850329&facet=ContentType%3ADissertation';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Tourneur' , 'matched title string');
	test.assertTextExists('Dissertation' , 'matched string Dissertation');
    }).run(function() {
        test.done();
    });
});
