// m39_001 #1105 identify home location of an item is Special Collections when the item is Off-site
// 
// 
casper.test.begin('m39-001 #1105 show Spec even if item is at WRLC off site', 2, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/3733680';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Phylogenetic and molecular analysis' , 'verified title page');
	test.assertTextExists('Gelman Special Collections' , 'verified location');
    }).run(function() {
        test.done();
    });
});
