// m14_001 337 
//
casper.test.begin('m14_001 #337 off site', 1, function suite(test) {
casper.echo("Test environment: "+SERVER);
var USECASE='/item/2344942';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('off site', 'page body contains "off site"');
    }).run(function() {
        test.done();
    });
});
