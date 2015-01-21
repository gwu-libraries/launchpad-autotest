// m25_002 #777a Audio 
// 777 is a multipart test
casper.test.begin('m25_002 #777a', 2, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/search?q=5851729';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Township' , 'matched string Township');
	test.assertTextExists('Audio' , 'matched string Audio');
    }).run(function() {
        test.done();
    });
});
