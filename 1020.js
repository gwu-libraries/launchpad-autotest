// m31_001 #1020 do not include 710$0 URI on details tab
// 
// 
casper.test.begin('m31_001 #1020 do not include 710$0 URI on details tab', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/13930810';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Japanese master of the modern print' , 'verified title page');
	test.assertTextExists('Prints, Japanese' , 'verified text on details tab');
	test.assertTextDoesntExist('id.loc.gov' , 'verified URI is not displayed');
    }).run(function() {
        test.done();
    });
});
