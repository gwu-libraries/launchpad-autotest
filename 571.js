// 
// m16_003 #571
//
casper.test.begin('m16_003 #571 left border', 1, function suite(test) {
casper.echo("Test environment: git repository ");
var ENTITY='https://github.com/gwu-libraries/launchpad/blob/master/lp/ui/templates/about.html'
casper.echo(ENTITY);
    casper.start(ENTITY, function() {
    test.assertTextExists('.5em;', 'content');
    }).run(function() {
        test.done();
    });
});
