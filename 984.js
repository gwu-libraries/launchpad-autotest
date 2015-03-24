// m29_002 #984 standard number fields on advanced search form
// 
// 
casper.test.begin('m29_002 #984 standard number fields are on advanced search form', 5, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/advanced/';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('ISBN' , 'matched Books / ISBN');
	test.assertTextExists('ISSN' , 'matched Journals / ISSN');
	test.assertTextExists('Call' , 'matched Call Number');
	test.assertTextExists('Network' , 'matched Network / OCLC');
	test.assertTextExists('LCCN' , 'matched LCCN');
    }).run(function() {
        test.done();
    });
});
