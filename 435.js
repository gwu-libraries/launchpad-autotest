// m16_001 #435 #532
// 
//
casper.test.begin('m16_001 #435 #532 Dont show tabs for non wrlc result', 4, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/issn/0001-0329';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('procedures for helping' , 'page title Home visiting... found');
	test.assertTextDoesntExist('Details' , 'Verified Details tab removed');
	test.assertTextDoesntExist('Availability' , 'Verified Availability tab removed');
	test.assertTextExists('Interlibrary Loan', 'Verified ILL link provided');
    }).run(function() {
        test.done();
    });
});
