// m16_001 #227
//
casper.test.begin('m16_001 #227 display 856z subfields', 5, function suite(test) {
casper.echo("Test environment: "+SERVER);
var USECASE='/item/2341877';
var ENTITY=SERVER+USECASE;
    casper.start(ENTITY, function() {
	test.assertTextExists('CPCU journal', 'book title verified');
	test.assertTextExists('Gelman Periodicals', 'Gelman Periodicals found.');
	test.assertTextExists('Subscription cancelled', '856z note found');
	test.assertTextExists('Bound volumes are Library Use Only', 'another 856z note found');
	test.assertTextExists('0162-2706', '0162-2706 ISSN found');
    }).run(function() {
        test.done();
    });
});
