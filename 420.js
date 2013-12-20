// m15_002 #420 #470
// match now on LCCN and beginning of the title
//
casper.test.begin('m15_002 #420 #470 avoid error match on LCCN with Internet Archive', 2, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/2355382';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Frank Lloyd Wright' , 'page title Frank Lloyd Wright... found');
	test.assertTextDoesntExist('Internet Archive' , 'Verified no internet archive item displayed');
    }).run(function() {
        test.done();
    });
});
