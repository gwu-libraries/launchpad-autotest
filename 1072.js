// 35-001 #1072 GM id m377358 bug fix
// previously this request displayed an error page
//
casper.test.begin('m35_001 #1072 GM id m377358 bug fix', 2, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/m377358';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Journal of neurolinguistics' , 'matched title');
	test.assertTextExists('George Mason' , 'found George Mason holding');
    }).run(function() {
        test.done();
    });
});
