// m15_002 #421 #466
// 
//
casper.test.begin('m15_002 #421 #466 do not display $6 subfields of 8xx fields', 4, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/3939828';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Kizzu sabaibaru' , 'page title Kizzu sabaibaru... found');
	test.assertTextDoesntExist('880-04' , 'Verified no 880-04 displayed');
	test.assertTextDoesntExist('880-03' , 'Verified no 880-03 displayed');
	test.assertTextDoesntExist('880-05' , 'Verified no 880-05 displayed');
    }).run(function() {
        test.done();
    });
});
