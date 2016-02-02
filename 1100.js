// m35-001 #1100 replace due date 02-20-2020 for CUA microforms at WRLC
// this tests the item page. the search page also was revised. It says Off-site for the status
// actually, just replaces where that is the due date. 
// 
casper.test.begin('m35-001 #1100 replace due date 02-20-2020', 4, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/953992';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('ERIC RIE' , 'matched title');
	test.assertTextExists('WRLC Shared' , 'matched location');
	test.assertTextExists('Off-site' , 'matched Off-site');
	test.assertTextDoesntExist('02-20-2020' , 'verified 02-20-2020 does not display');
    }).run(function() {
        test.done();
    });
});
