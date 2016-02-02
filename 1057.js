// m35-001 #1057 get added authors utf-8
// if it returns anything other than the error page, it works
// This script can't test for non-roman characters
casper.test.begin('m35-001 #1057 get added authors utf-8', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/4581555';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('mesto stranovede' , 'matched roman characters in title');
	test.assertTextExists('Georgetown' , 'matched location');
	test.assertTextExists('Nauchno-metodichesk', 'matched roman characters in added author');
    }).run(function() {
        test.done();
    });
});
