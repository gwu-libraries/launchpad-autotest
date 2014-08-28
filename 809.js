// m23_002 #809
//
casper.test.begin('m23_002 #809 audio video labels', 4, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/search?q=2001';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextDoesntExist('Audio Recording' , '');
	test.assertTextDoesntExist('Video Recording' , '');
	test.assertTextExists('Video' , '');
	test.assertTextExists('Audio' , '');
    }).run(function() {
        test.done();
    });
});
