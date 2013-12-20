// m15_002 #434 #459
// 
//
casper.test.begin('m15_002 #434 #459 include MARC 022subfield L in issn lookup', 4, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/issn/0373-6237';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Biblioth' , 'page title Biblioth... found');
	test.assertTextExists('Details' , 'Verified Details tab');
	test.assertTextExists('Van Ness Electronic Journals' , 'Verified UDC holding found');
	test.assertTextExists('1953-8138' , 'Verified related ISSN 1953-8138 found');
    }).run(function() {
        test.done();
    });
});
