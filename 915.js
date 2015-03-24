// m29_003 #915 AU movie review link
// 
// 
casper.test.begin('m29_003 #915 AU movie review link', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/7830777';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Days of glory' , 'matched title');
	test.assertTextExists('Movie Review' , 'matched Movie Review link');
	test.assertTextExists('Available to all' , 'matched available link');
    }).run(function() {
        test.done();
    });
});
