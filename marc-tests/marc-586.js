// m15_001 marc-586
//
casper.test.begin('m15_001 marc-586 Notes (general)', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/12485491';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Now, voyager' , 'page title Now, voyager ... found');
	test.assertTextExists('Notes' , 'Notes (general )TAG 586');
	test.assertTextExists('Academy Award, 1942: Best score.', 'found tag 586 note');
    }).run(function() {
        test.done();
    });
});
