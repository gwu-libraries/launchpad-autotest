// m29_002 #988 ignore Georgetown's links on cover images
// 
// 
casper.test.begin('m29_002 #988 ignore Georgetown links on cover images ', 2, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/9272927';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Understanding language through humor' , 'matched title');
	test.assertTextDoesntExist('Full text online' , 'verified no online link');
    }).run(function() {
        test.done();
    });
});
