// m14_001 #329 
//
casper.test.begin('m14_001 #329 no GT holding online', 1, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/10252886';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextDoesntExist('Online' , 'page body does not contain "Online"');
    }).run(function() {
        test.done();
    });
});
