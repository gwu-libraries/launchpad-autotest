// m36-001 #1106 use MARC 541 to id GM's Gateway Library in the JC - 2 Hour TextSelect
casper.test.begin('m36-001 #1106 use MARC 541 to id location', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/14188985';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('International economics' , 'matched title');
	test.assertTextExists('George Mason' , 'matched library');
	test.assertTextExists('2 Hour TextSelect', 'matched 2 Hour TextSelect');
    }).run(function() {
        test.done();
    });
});
