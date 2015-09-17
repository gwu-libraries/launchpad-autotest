// m31_001 do not display 880-03 in title summary
// 
// 
casper.test.begin('m31_001 #1008 do not display 880-03 in title summary', 2, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/5252442';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Abd al-' , 'item page');
	test.assertTextDoesntExist('880-03' , 'verified 880-03 did not display');
    }).run(function() {
        test.done();
    });
});
