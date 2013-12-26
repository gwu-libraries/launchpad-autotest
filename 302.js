// m13_001 #302
// netdna.bootstrapcdn.com/twitter-bootstrap should include a row-fluid class
casper.test.begin('m13_001 #302 CDN bootstrap', 1, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/10000000';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertExists('.row-fluid');
    }).run(function() {
        test.done();
    });
});
