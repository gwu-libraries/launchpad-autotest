// 35-001 #1066 remove uri from other title
// 
//
casper.test.begin('m35_001 #1066 remove uri from other title', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/8188218#Details';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('2001 : a space odyssey' , 'matched title');
	test.assertTextExists('Other Title' , 'found Other Title section');
	test.assertDoesntExist('http://id.loc.gov/authorities/names/n92048865' , 'validated uri is not displayed');
    }).run(function() {
        test.done();
    });
});
