// m35-001 #1015b check for Hathi returned from API instead of WRLCs hathi trust
// 
// superced by later issues
casper.test.begin('m35-001 #1015(b) check API returned from hathi trust ', 1, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/2211384';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('innocents abroad' , 'verified title');
	//test.assertTextDoesntExist('Shared E-Resource Collection' , 'verified not WRLC location');
	//test.assertTextExists('Hathi Trust Digital Library' , 'verified Hathi location');
	//test.assertTextExists('100640410' , 'verified Hathi identifier');
    }).run(function() {
        test.done();
    });
});
