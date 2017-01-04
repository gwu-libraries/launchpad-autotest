// m41_001 include hathitrust eresource when online is checked
// 
// 
casper.test.begin('m41_001 #1150 include hathitrust in online filter', 2, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/search?q=Studies+in+frankness+whibley+heinemann+1898+hathitrust&online=on';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Studies in frankness' , 'verified title is in results');
	test.assertTextExists('HathiTrust' , 'verified HathiTrust is in results');
    }).run(function() {
        test.done();
    });
});
