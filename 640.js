// m27_001 #640
//
casper.test.begin('m27_001 #640 hathi trust online', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/7269114';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Hathi Trust' , '');
	test.assertTextExists('Record 000124204' , '');
	test.assertTextExists('Treasure island' , '');
    }).run(function() {
        test.done();
    });
});
