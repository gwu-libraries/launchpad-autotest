// m23_004 #803
//
casper.test.begin('m23_004 #803 RefWorks link', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/8479178';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Miracles : wonder and meaning' , 'Verified title');
	test.assertTextExists('RefWorks', 'Verfied link for RefWorks');
	test.assertTextExists('Services', 'Verfied label for Services');
    }).run(function() {
        test.done();
    });
});
