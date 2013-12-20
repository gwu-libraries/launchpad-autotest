// m15_002 #398 #442
//
casper.test.begin('m15_002 #398 #442 Use bound with label', 2, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/12714734';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('The New York teacher' , 'page title The New York teacher... found');
	test.assertTextExists('Bound with item' , 'page text contains the Bound with item label');
    }).run(function() {
        test.done();
    });
});
