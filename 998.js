// m29_003 #998 Georgetown Law (985 did not get applied to m29_002)
// 
// 
casper.test.begin('m29_003 #998 Georgetown Law', 2, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/6308419';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Akhil Reed Amar' , 'matched author');
	test.assertTextExists('Georgetown Law' , 'matched Georgetown Law');
    }).run(function() {
        test.done();
    });
});
