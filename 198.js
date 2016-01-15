// m16_001 198 
//
casper.test.begin('m16_001 #198 display related isbn', 2, function suite(test) {
casper.echo("Test environment: "+SERVER);
var USECASE='/item/6238998';
var ENTITY=SERVER+USECASE;
    casper.start(ENTITY, function() {
	test.assertTextExists('Harry Potter and the Half-Blood Prince', 'book title verified');
	test.assertTextExists('0439784549', 'ISBN ending 549 found.');
	//test.assertTextExists('5960', 'related ISBN found');
	//test.assertTextExists('6770', 'related ISBN found');
	//test.assertTextExists('1324', 'related ISBN found');
	//test.assertTextExists('5969', 'related ISBN found');
    }).run(function() {
        test.done();
    });
});
