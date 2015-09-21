// m26_001 #868 show number of hold requests
// use this query to identify items with holds
//
// SELECT BIB_ITEM.BIB_ID, ITEM_STATUS.ITEM_STATUS
// FROM (ITEM INNER JOIN ITEM_STATUS ON ITEM.ITEM_ID = ITEM_STATUS.ITEM_ID) INNER JOIN BIB_ITEM ON ITEM.ITEM_ID = BIB_ITEM.ITEM_ID
// WHERE (((BIB_ITEM.BIB_ID)>"13000000") AND ((ITEM_STATUS.ITEM_STATUS)="5" Or (ITEM_STATUS.ITEM_STATUS)="6"));
//
casper.test.begin('m26_001 #868 show number of patron holds', 1, function suite(test) { 
casper.echo("Test environment: "+SERVER);
casper.echo("This test may fail if there are no holds on the test item");
casper.echo("Items on hold may be identified by a query for item_status='5' or item_status='6'");
var USECASE='/item/14867640';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Holds' , 'found string Holds');
    }).run(function() {
        test.done();
    });
});
