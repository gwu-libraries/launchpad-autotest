// m15_001 marc-130
//
casper.test.begin('m15_001 marc-130 other title', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/62520';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Pesikta rabbati; discourses for feasts, fasts,' , 'page title Pesikta...Sabbaths found');
	test.assertTextExists('Other Title' , 'Other Title TAG 130');
	test.assertTextExists('Pesikta rabbati.' , 'Pesikta rabbati');
    }).run(function() {
        test.done();
    });
});
