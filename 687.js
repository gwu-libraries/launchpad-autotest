// m26_001 #687 renewal due date
// 
// SELECT BIB_ITEM.BIB_ID, ITEM_STATUS.ITEM_STATUS
// FROM (ITEM INNER JOIN BIB_ITEM ON ITEM.ITEM_ID = BIB_ITEM.ITEM_ID) 
// INNER JOIN ITEM_STATUS ON ITEM.ITEM_ID = ITEM_STATUS.ITEM_ID
// WHERE (((BIB_ITEM.BIB_ID)>"13000000") AND ((ITEM_STATUS.ITEM_STATUS)="3"));
//
casper.test.begin('m26_001 #687 renewal due date', 1, function suite(test) { 
casper.echo("Test environment: "+SERVER);
casper.echo("This test will likely fail; if the item is not renewed");
casper.echo("To find renewed items, query items with item_status='3'");
var USECASE='/item/13150536.json';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Renewed' , 'found renewal ');
    }).run(function() {
        test.done();
    });
});
