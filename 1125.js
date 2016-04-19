// m39_001 #1125 omit link if the author field on bib record does not have a link
// 
// 
casper.test.begin('m39-001 #1125 omit link if author is null', 2, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/15981027';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Latin American cinema' , 'verified title page');
	test.assertTextDoesntExist('WorldCat Identities' , 'verified no link was added');
    }).run(function() {
        test.done();
    });
});
