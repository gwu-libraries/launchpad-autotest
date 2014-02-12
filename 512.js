// m16_001 #512 set BIB_ID to original GT value
//
casper.test.begin('m16_001 #512', 1, function suite(test) {  
casper.echo("Test environment: "+SERVER);
var USECASE='/item/b35064353.json';
var ENTITY=SERVER+USECASE;
casper.echo(ENTITY);
	casper.start(ENTITY, function() {
	test.assertTextExists('b35064353', 'MATCH worked');
    }).run(function() {
        test.done();
    });
});
