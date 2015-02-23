// m29_001 #854 GM checked out items appear in holding on item page
// test should fail if item is no longer checked out
// 
casper.test.begin('m29_001 #854  GM checked out items appear in holding on item page', 2, function suite(test) { 
casper.echo("Test environment: "+SERVER);
casper.echo("test should fail if item is not checked out");
var USECASE='/item/5856359';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('investigations' , 'matched title');
	test.assertTextExists('George Mason' , 'found GM holding');
	test.assertTextExists('DUE 05-31-2015' , 'found GM due date');
    }).run(function() {
        test.done();
    });
});
