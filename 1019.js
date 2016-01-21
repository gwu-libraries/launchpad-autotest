// 35-001 #1019 display WRLC Digital Object on bib even if flagged as Finding Aid
// 
// 
casper.test.begin('m35_001 #1019 WRLC Digital Object along with Finding Aid', 5, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/2495607';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Timothy Vedder' , 'matched title');
	test.assertTextExists('Special Collections Vault' , 'matched holding spec vault');
	test.assertTextExists('WRLC Libraries Digital' , 'matched holding WRLC digital collection');
	test.assertTextExists('Finding Aid' , 'matched  finding aid link');
	test.assertTextExists('Online' , 'found online link');
    }).run(function() {
        test.done();
    });
});
