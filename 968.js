// m29_001 #968 show link to hathi trust catalog page
// 
casper.test.begin('m29_001 #968 show link to hathi trust catalog page', 2, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/2104559';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('The economic consequences of the peace' , 'matched title');
	test.assertTextExists('HathiTrust' , 'found string to go to hathi ');
    }).run(function() {
        test.done();
    });
});
