// m29_001 #977 gm holding should not have full text online
// 
// 
casper.test.begin('m29_001 #977 gm holding should not have full text online', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/m516277';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('The hornbook of Virginia history' , 'matched title');
	test.assertTextExists('George Mason' , 'found GM holding line');
	test.assertTextDoesntExist('Full text online' , 'verified no full text online');
    }).run(function() {
        test.done();
    });
});
