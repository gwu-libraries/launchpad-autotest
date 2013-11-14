// m15_001 added feature, not related to any issue.
//
casper.test.begin('m15_001 marc json view available', 1, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/119119/marc.json';
var ENTITY=SERVER+USECASE;
casper.echo(ENTITY);
	casper.start(ENTITY, function() {
	test.assertUrlMatch(ENTITY, 'url MATCH worked');
    }).run(function() {
        test.done();
    });
});
