// m16_003 #555, 569
// 
//
casper.test.begin('m16_003 #555, 569 GT location SCS not eligible for CLS', 2, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/isbn/9781454816454';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Basic contract law' , 'page title Basic contract law... found');
	test.assertTextDoesntExist('Request' , 'Verified there is no Request link.');
    }).run(function() {
        test.done();
    });
});
