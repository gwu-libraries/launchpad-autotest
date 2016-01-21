// 35-001 #1084 ignore GT link to loc snippet
// 
//
casper.test.begin('m35_001 #1084 ignore GT link to loc snippet', 2, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/13318936';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Poeta en Nueva York' , 'matched title');
	test.assertTextDoesntExist('Online' , 'verified the Online button is not shown');
    }).run(function() {
        test.done();
    });
});
