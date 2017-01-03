// m36-001 #1108 user more Worldcat description
casper.test.begin('m36-001 #1108 use more Google Books description', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/oclc/34473395';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Brain' , 'matched title');
	test.assertTextExists('from Google Books', 'matched string Google Books');
	test.assertTextExists('Sandeman', 'matched name');
    }).run(function() {
        test.done();
    });
});
