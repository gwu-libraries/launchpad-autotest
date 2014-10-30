// m16_001 #381 and 503 OCLC lookup in Worldcat when not found in Voyager
//
casper.test.begin('m16_001 #381 and 503 OCLC lookup in Worldcat', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/oclc/748362414';
var ENTITY=SERVER+USECASE;
casper.echo(ENTITY);
	casper.start(ENTITY, function() {
	test.assertUrlMatch(ENTITY, 'url MATCH worked');
    test.assertTextExists('get your ideal job','returned from external source');
    test.assertTextExists('Interlibrary Loan','Interlibrary loan link displayed');
    }).run(function() {
        test.done();
    });
});
