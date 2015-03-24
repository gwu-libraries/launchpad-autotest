// m29_002 #946 Update blue button styling
// 
// 
casper.test.begin('m29_002 #946 update blue button styling', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/8902942';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Decolonizing Literacy' , 'matched title');
	test.assertTextExists('Electronic Book' , 'matched holding');
	test.assertTextDoesntExist('Full text online' , 'verified link does not say full text online');
    }).run(function() {
        test.done();
    });
});
