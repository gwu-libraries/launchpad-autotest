// m29_001 #798 related record lookup
// 
// 
casper.test.begin('m29_001 #798 related record lookup', 4, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/12282751';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Intelligence analysis' , 'matched title');
	test.assertTextExists('George Mason' , 'found GM holding');
	test.assertTextExists('Georgetown' , 'found GT holding');
	test.assertTextExists('Catholic' , 'found CU holding');
    }).run(function() {
        test.done();
    });
});
