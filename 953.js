// m29_001 #953 added fields to advanced search
// 
// 
casper.test.begin('m29_001 #953 added fields to advanced search', 4, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/advanced/';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Subject Heading Group' , 'matched subject heading group');
	test.assertTextExists('Region' , 'found region');
	test.assertTextExists('Time Period' , 'found time period');
	test.assertTextExists('Genre' , 'found genre');
    }).run(function() {
        test.done();
    });
});
