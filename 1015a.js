// m35-001 #1015a check for WRLCs hathi trust
// 
// 
casper.test.begin('m35-001 #1015(a) check WRLCs hathi trust ', 4, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/14732552';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('History of the invasion' , 'verified title');
	test.assertTextExists('Shared E-Resource Collection' , 'verified WRLC location');
	test.assertTextDoesntExist('Hathi Trust Digital Library' , 'verified not Hathi location');
	test.assertTextDoesntExist('Internet Archive' , 'verified not Internet Archive location');
    }).run(function() {
        test.done();
    });
});
