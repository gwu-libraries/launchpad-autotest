// m31_001 #1021 JSTOR DDA not eligible for CLS
// 
// 
casper.test.begin('m31_001 #1021 JSTOR DDA not eligible for CLS request', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/15090040';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('0691115311' , 'verified page');
	test.assertTextExists('JSTOR DDA' , 'verified DDA holding');
	test.assertTextDoesntExist('Request' , 'verified no request link on page');
    }).run(function() {
        test.done();
    });
});
