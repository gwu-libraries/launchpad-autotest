// 
// m16_001 @249
//
casper.test.begin('m16_001 #249 move javascripts to static files', 4, function suite(test) {
casper.echo("Test environment: "+SERVER);
var USECASE='item/2341877';
var ENTITY=SERVER+USECASE;
casper.echo(ENTITY);
    casper.start(ENTITY, function() {
         test.assertExists('h1.title');
    test.assertTextExists('CPCU journal', 'book title verified');
    test.assertSelectorHasText('script', 'function feedback');
    // this function no longer visible; it is in the file launchpad.js 
    test.assertSelectorDoesntHaveText('script', 'toggle_visibility');
    }).run(function() {
        test.done();
    });
});
