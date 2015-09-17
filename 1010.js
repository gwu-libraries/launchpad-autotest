// m31_001 redirect url with no item number to the catalog page
// 
// 
casper.test.begin('m31_001 #1010 redirect no item number in url to catalog page', 1, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextDoesntExist('No items found' , 'verified the No items found page did not display');
    }).run(function() {
        test.done();
    });
});
