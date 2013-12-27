// m15_003 #493, 494
// 
//
casper.test.begin('m15_003 #493, 494 ', 1, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/7765645';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Embedded computer systems' , 'page title Embedded... found');
    }).run(function() {
        test.done();
    });
});
