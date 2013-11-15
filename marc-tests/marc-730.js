// m15_001 marc-730
//
casper.test.begin('m15_001 marc-730 Other title', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/62154';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Africa and law' , 'page title Africa and law... staff of the Wisconsin law review found');
	test.assertTextExists('Other Title' , 'Other Title TAG 730');
	test.assertTextExists('Wisconsin law review', 'Wisconsin law review');
    }).run(function() {
        test.done();
    });
});
