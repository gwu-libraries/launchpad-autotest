// m41_001 do not display URI from MARC 700 tag
// 
// 
casper.test.begin('m41_001 #1173 do not display URI from MARC 700 tag', 2, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/2517034';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Clementine Churchill' , 'verified title page');
	test.assertTextDoesntExist('relators/dnr' , 'verified URI text did not display');
    }).run(function() {
        test.done();
    });
});
