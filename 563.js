// m16_003 #563
// 
//
casper.test.begin('m16_003 #563 worldcat oclc api', 2, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/oclc/37478754';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Things they carried' , 'page title Things they carried... found');
	test.assertTextExists('Interlibrary Loan' , 'Verified Interlibrary link displayed');
    }).run(function() {
        test.done();
    });
});
