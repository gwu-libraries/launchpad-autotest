// m26_001 #687 renewal due date
// 
casper.test.begin('m26_001 #687 renewal due date', 2, function suite(test) { 
casper.echo("Test environment: "+SERVER);
casper.echo("This test will likely fail; if the item is not renewed");
casper.echo("To find renewed items, query items with item_status='3'");
var USECASE='/item/3846257';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Assimilating' , 'matched title');
	test.assertTextExists('01-31-2015' , 'found renewal due date');
    }).run(function() {
        test.done();
    });
});
