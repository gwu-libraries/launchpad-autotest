// m27_001 #924
//
casper.test.begin('m27_001 #924 no ILL request', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/11224650';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Electronic Book' , 'found electronic holding');
	test.assertTextExists('Additional fish' , 'match title');
	test.assertTextDoesntExist('Interlibrary' , 'verified no ILL Request');
    }).run(function() {
        test.done();
    });
});
