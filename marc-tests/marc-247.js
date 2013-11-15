// m15_001 marc-247
//
casper.test.begin('m15_001 marc-247 Other title', 4, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/211111';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Oxford economic atlas of the world' , 'page title Oxford economic atlas of the world found');
	test.assertTextExists('Other Title' , 'Other Title TAG 247');
	test.assertTextExists('[Oxford] regional economic atlases. 1954', '[Oxford] regional economic atlases. 1954 ');
	test.assertTextExists('Oxford regional atlases. 1959-', 'Oxford regional atlases. 1959-');
    }).run(function() {
        test.done();
    });
});
