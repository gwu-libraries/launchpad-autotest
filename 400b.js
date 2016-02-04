// m15_001 #400b 
//
casper.test.begin('m15_001 #400b Page other author and series title links', 1, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/9292523';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('No items found' , 'page no items found');
    }).run(function() {
        test.done();
    });
});
