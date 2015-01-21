// m25_002 #777s Score
// 777 is a multipart test
casper.test.begin('m25_002 #777s', 2, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/search?q=bach&facet=ContentType%3AMusic+Score&page=1';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Bach' , 'matched title string');
	test.assertTextExists('Music Score' , 'matched string Music Score');
    }).run(function() {
        test.done();
    });
});
