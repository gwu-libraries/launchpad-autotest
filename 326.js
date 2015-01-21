// m26_001 #326 always indicate special collections
// 
casper.test.begin('m26_001 #326 Indicate special collections', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/3053346';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Mitch Snyder papers' , 'matched title');
	test.assertTextExists('Gelman Special Collections' , 'found Special Collections');
	test.assertTextExists('Off-site' , 'found status Off-site');
    }).run(function() {
        test.done();
    });
});
