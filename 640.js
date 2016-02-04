// m27_001 #640
//
casper.test.begin('m27_001 #640 hathi trust online', 2, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/7269114';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('HathiTrust' , 'found Hathi Trust holding from wrlc');
	test.assertTextExists('Treasure island' , 'matched title');
    }).run(function() {
        test.done();
    });
});
