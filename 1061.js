// 35-001 #1061 show temp loc in process for spec
// 
// This test may fail if the use case is no longer IN PROCESS
//
casper.test.begin('m35_001 #1061 show temp loc in process for spec', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/14133247';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Patronal politics' , 'matched title');
	test.assertTextExists('Special Collections' , 'matched holding spec');
	test.assertTextExists('IN PROCESS' , 'matched IN PROCESS note');
    }).run(function() {
        test.done();
    });
});
