// 35-001 #1085 add link to search worldcat, and to view oclc identities
// 
// only GW bibs have URIs on MARC tags and would have Identities link. any bib with 
// an OCLC number should have a link to search worldcat
//
casper.test.begin('m35_001 #1085 add link to search worldcat and to view olc identities', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/3917413#Details';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('The client' , 'matched title');
	test.assertTextExists('Search OCLC WorldCat' , 'found Search OCLC WorldCat link');
	test.assertTextExists('WorldCat Identities' , 'found OCLC WorldCat Identities link');
    }).run(function() {
        test.done();
    });
});
