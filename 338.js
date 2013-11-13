// m14_001 338 
//
casper.test.begin('m14_001 #338 jExpand.js', 1, function suite(test) {
casper.echo("Test environment: "+SERVER);
var USECASE='/static/js/jExpand.js';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('fn.jExpand', 'page body contains "fn.jExpand"');
    }).run(function() {
        test.done();
    });
});
