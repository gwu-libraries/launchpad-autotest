// m29_001 #952 added geographic, time period in addition to subjects and genre
//
//
casper.test.begin('m29_001 #952 subject related facets ', 10, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/search?q=isbn:0807128465';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Doctor Quintard' , 'matched title');
	test.assertTextExists('Subjects' , 'found Subjects facet');
	test.assertTextExists('Chaplains', 'found Subject Chaplains');
	test.assertTextExists('Time Period' , 'found Time Period facet');
	test.assertTextExists('1824-1898' , 'found Time Period 1824-1898');
	test.assertTextExists('Region' , 'found Region facet');
	test.assertTextExists('Tennessee' , 'found Region Tennessee');
	test.assertTextExists('Genre' , 'found Genre facet');
	test.assertTextExists('Biography' , 'found Genre Biography');
	test.assertTextExists('(1)' , 'found (1)');
    }).run(function() {
        test.done();
    });
});
