// m13_001 #322
//
casper.test.begin('m13_001 #322 handle bad OCLC', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/oclc/(OCoLC)751341';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Is Shakespeare dead' , 'page displayed for title based on OCLC search'); 
	test.assertTextExists('Twain, Mark, 1835-1910' , 'author Twain found'); 
	test.assertTextExists('2944 .C6' , 'Call number PR 2944 .C6 found'); 
    }).run(function() {
        test.done();
    });
});
