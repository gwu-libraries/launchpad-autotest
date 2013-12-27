// m15_003 #487, 489
// 
//
casper.test.begin('m15_003 #487, 489 verify Internet Archive link', 2, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/2253936';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Life on the Mississippi' , 'page title Mississippi... found');
	test.assertTextExists('Internet Archive' , 'Verified internet archive displayed');
    }).run(function() {
        test.done();
    });
});
