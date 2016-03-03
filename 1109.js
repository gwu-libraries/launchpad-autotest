// m36-001 #1109 user more GoogleBooks description
casper.test.begin('m36-001 #1109 user more google books description', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/oclc/890983565';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('eterinary Clinics of North America' , 'matched title');
	test.assertTextExists('Google Books' , 'matched string Google Books');
	test.assertTextExists('an expert panel of authors', 'matched review text');
    }).run(function() {
        test.done();
    });
});
