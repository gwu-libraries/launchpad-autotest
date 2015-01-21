// m25_002 #777v Video
// 777 is a multipart test
casper.test.begin('m25_002 #777v', 2, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/search?q=2781751';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Munich' , 'matched title string');
	test.assertTextExists('Video' , 'matched string Video');
    }).run(function() {
        test.done();
    });
});
