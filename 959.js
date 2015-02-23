// m29_001 #959 and #964 add delimited subjects after titles in search results
//
casper.test.begin('m29_001 #959 and 964 add delimited subjects after titles in search result ', 2, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/search?q=isbn:9780737743852';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Nanotechnology' , 'matched title');
	test.assertTextExists('Nanotechnology -- Moral and ethical aspects' , 'found delimited LCSH');
    }).run(function() {
        test.done();
    });
});
