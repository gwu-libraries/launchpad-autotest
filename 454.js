// m15_002 #454 #471
// 
//
casper.test.begin('m15_002 #454 #471 handle invalid LCCN value', 1, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/4044046';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Just and unjust wars' , 'page title Just and unjust wars... found');
    }).run(function() {
        test.done();
    });
});
