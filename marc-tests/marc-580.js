// m15_001 marc-580
//
casper.test.begin('m15_001 marc-580 Title History note', 4, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/12646846';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('members of the National Education Association' , 'page title ...members of the National Education Association found');
	test.assertTextExists('Title History' , 'Title History  note TAG 580');
	test.assertTextExists('Prior to 1903 the membership', 'found first Title History note');
	test.assertTextExists('Issues for 1915-1918 ', 'found second Title History note');
    }).run(function() {
        test.done();
    });
});
