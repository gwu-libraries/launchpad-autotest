// m15_001 marc-711
//
casper.test.begin('m15_001 marc-711 Other Authors', 4, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/62790';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('The 1954 Geneva Conference' , 'page title The 1954 Geneva Conference found');
	test.assertTextExists('Other Authors' , 'Other Authors TAG 711');
	test.assertTextExists('Geneva Conference (1954). Documents relating to the discussion of Korea and Indo-China at the Geneva Conference.','Geneva Conference (1954). Documents relating to the discussion of Korea and Indo-China at the Geneva Conference.'); 
	test.assertTextExists('Geneva Conference (1954). Further documents relating to the discussion of Indo-China at the Geneva Conference.','Geneva Conference (1954). Further documents relating to the discussion of Indo-China at the Geneva Conference.'); 
    }).run(function() {
        test.done();
    });
});
