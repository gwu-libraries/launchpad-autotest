// m35-001 #1015b check for Hathi returned from API instead of WRLCs hathi trust
// 
// 
casper.test.begin('m35-001 #1015(b) check API returned from hathi trust ', 4, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/14732552';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Innocents abroad' , 'verified title');
	test.assertTextDoesntExist('Shared E-Resource Collection' , 'verified not WRLC location');
	test.assertTextExists('Hathi Trust Digital Library' , 'verified Hathi location');
	test.assertTextDoesntExist('100640410' , 'verified Hathi identifier');
    }).run(function() {
        test.done();
    });
});
