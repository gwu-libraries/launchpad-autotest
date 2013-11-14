// m15_001 #403 and #415
//
casper.test.begin('m15_001 #403 #415 Arabic title loads without error', 1, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/12627688';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Awlamah wa-atharuh' , 'a page loads, not the error page');
    }).run(function() {
        test.done();
    });
});
