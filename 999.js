// m29_003 #999 at bindery ineligible for CLS
// 
// query
// SELECT ITEM_STATUS.ITEM_STATUS, BIB_ITEM.BIB_ID
// FROM ITEM_STATUS INNER JOIN BIB_ITEM ON 
// ITEM_STATUS.ITEM_ID = BIB_ITEM.ITEM_ID
// WHERE (((ITEM_STATUS.ITEM_STATUS)="18"));
//
// 
casper.test.begin('m29_003 #999 At Bindery ineligible for CLS', 1, function suite(test) { 
casper.echo("Test environment: "+SERVER);
// can not exactly match CUA holding to Missing status
// we switch the status to say Missing
var USECASE='/item/2923181';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Missing' , 'matched status Missing');
    }).run(function() {
        test.done();
    });
});
