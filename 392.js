// m16_001 #392 and 406  
//
casper.test.begin('m16_001 #392 and 406 show GT status Available same style as GW', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/4012098';
var ENTITY=SERVER+USECASE;
casper.echo(ENTITY);
	casper.start(ENTITY, function() {
    test.assertTextExists('Bioethics','title matched');
    test.assertTextExists('Georgetown','institution matched');
    test.assertTextDoesntExist('AVAILABLE','verified status not AVAILABLE');
    }).run(function() {
        test.done();
    });
});
