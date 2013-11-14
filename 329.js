// m14_001 #329 
//
casper.test.begin('m14_001 #329 no GT holding for HU id', 1, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/10252886';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextDoesntExist('Georgetown' , 'page body does not contain "GT item"');
    }).run(function() {
        test.done();
    });
});
