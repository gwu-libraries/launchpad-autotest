// m14_003 371 + 372 
// record has been deleted.
casper.test.begin('m14_003 #371+372 ISBN diacritic does not trigger error', 1, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/12280154';
var ENTITY=SERVER+USECASE;
casper.start(ENTITY, function() {
	test.assertTextDoesntExist('qui comptent', 'page not found');
    }).run(function() {
        test.done();
    });
});
