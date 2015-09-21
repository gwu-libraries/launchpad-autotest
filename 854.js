// m29_001 #854 GM checked out items appear in holding on item page
// test should fail if item is no longer checked out
// 
// GM items are not in Voyager. You have to search in GM's catalog. 
// magik.gmu.edu/cgi-bin/Pwebrecon.cgi?DB=local&PAGE=First 
// Suggested search: virginia history, keyword, quick limit=After 2000, 50 records per page.
// Page through results to find a book that is "Charged" or "Renewed" 
// Then view details for that title. If it has an ISBN, use that to search Findit.
casper.test.begin('m29_001 #854  GM checked out items appear in holding on item page', 2, function suite(test) { 
casper.echo("Test environment: "+SERVER);
casper.echo("test should fail if item is not checked out");
var USECASE='/item/12531102';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Mason' , 'found Mason');
	test.assertTextExists('DUE' , 'due date');
    }).run(function() {
        test.done();
    });
});
