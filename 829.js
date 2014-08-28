// m23_002 #829
//
casper.test.begin('m23_002 #829 Special Collections no ILL', 1, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/2489273';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextDoesntExist('Interlibrary' , 'page body does not contain "Interlibrary"');
    }).run(function() {
        test.done();
    });
});
