// m27_001 #923 and m27_002 #944
// No need to include in m27_001
casper.test.begin('m27_002 #944 DDA link', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
casper.echo("This test may fail if the item is no longer DDA eligible");
var USECASE='/item/14019532';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('ABC ' , 'matched title');
	test.assertTextExists('Request print edition' , 'found request print edition');
	test.assertTextExists('Full text online' , 'found Full text online button');
    }).run(function() {
        test.done();
    });
});
