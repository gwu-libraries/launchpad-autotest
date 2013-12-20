// m15_002 #458 #460
// 
//
casper.test.begin('m15_002 #458 #460 handle unassigned num value', 1, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/3080699';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('SIGGROUP bulletin' , 'page title SIGGROUP bulletin... found');
    }).run(function() {
        test.done();
    });
});
