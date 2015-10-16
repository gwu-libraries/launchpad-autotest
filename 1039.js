// m33_001 list only a few subject headings and toggle to view more
//
casper.test.begin('m33_001 #1039 limit number of subjects in RefWorks link', 3, function suite(test) {
casper.echo("Test environment: "+SERVER);
var USECASE='/item/3836230';
var ENTITY=SERVER+USECASE;
    casper.start(ENTITY, function() {
        // verify the page is the correct item 
        test.assertTextExists('Presidential decisions','title is Presidential decisions'); 
        // verify that RefWorks link present 
        test.assertExists('#refworks');
        // test RefWorks link is less that 2000 characters. 
        casper.echo('checking that length of url is less than 2000 characters');
        test.assertEval(function() {
            return __utils__.findOne('#refworks').getAttribute('href').length <= 2000;
        });
    });
    casper.run(function() {
        test.done();
    });
});
