// m29_003 #999 at bindery ineligible for CLS
// 
// 
casper.test.begin('m29_003 #999 At Bindery ineligible for CLS', 2, function suite(test) { 
casper.echo("Test environment: "+SERVER);
// can not exactly match CUA holding to Missing status
// we switch the status to say Missing
var USECASE='/item/12932387';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Americanah' , 'matched title');
	test.assertTextExists('Missing' , 'matched status Missing');
    }).run(function() {
        test.done();
    });
});
