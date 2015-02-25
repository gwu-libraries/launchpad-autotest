// m29_001 #979 changed label to say Export citation to:
// 
// 
casper.test.begin('m29_001 #979 Export citation to', 2, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/1234567';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('The history of broadcasting' , 'matched title');
	test.assertTextExists('Export citation' , 'verified Export citation label');
    }).run(function() {
        test.done();
    });
});
