// m15_002 #355 #445
//
casper.test.begin('m15_002 #355 #445 LOC TOC links ignored', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/5720976';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('The law as it could be' , 'page title The law... found');
	test.assertTextExists('Gelman stacks' , 'page text contains Gelman stacks');
	test.assertTextDoesntExist('Full text online' , 'Full text online doesnt exist');
    }).run(function() {
        test.done();
    });
});
