// m15_001 #400b 
//
casper.test.begin('m15_001 #400b Page other author and series title links', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/9292523';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Model and data engineering' , 'page title Model and data... found');
	test.assertSelectorHasText('a', 'Bellatreche, Ladjel, 1968-');
	test.assertSelectorHasText('a', 'Lecture notes in computer science');
    }).run(function() {
        test.done();
    });
});
