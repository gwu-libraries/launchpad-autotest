// m16_003 #488, 577
// 
//
casper.test.begin('m16_003 #488, 577 verify Internet Archive link', 2, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/4403350';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('The golden bough' , 'page title golden bough... found');
	test.assertTextExists('Internet Archive' , 'Verified internet archive displayed');
    }).run(function() {
        test.done();
    });
});
