// m25_002 #794 Refine Results says nnn titles
// 
casper.test.begin('m25_002 #794 Refine Results says nnn titles', 1, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE="/search?q=search?q=Author:Waldman";
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('titles' , 'matched string titles');
    }).run(function() {
        test.done();
    });
});
