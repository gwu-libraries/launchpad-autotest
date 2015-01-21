// m25_002 #777m Micorform
// 777 is a multipart test
casper.test.begin('m25_002 #777m', 2, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/search?q=2531631';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('education' , 'matched title string');
	test.assertTextExists('Microform' , 'matched string Microform');
    }).run(function() {
        test.done();
    });
});
