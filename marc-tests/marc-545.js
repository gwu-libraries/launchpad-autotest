// marc-545.js
// m15_002 #419 #456
// 
//
casper.test.begin('m15_002 #419 #456 contents of MARC 545 display in biographical notes', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/2377560';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Chauncey M. Depew papers' , 'page title Depew papers... found');
	test.assertTextExists('Biographical Notes' , 'Verified Biographical Notes label');
	test.assertTextExists('Executive of New York Central Railroad' , 'Verified MARC 545 content is displayed');
    }).run(function() {
        test.done();
    });
});
