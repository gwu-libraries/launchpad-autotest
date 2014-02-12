// 
// m16_001 #349
//
casper.test.begin('m16_001 #349 show WRLC due date', 3, function suite(test) {
casper.echo("Test environment: "+SERVER);
var USECASE='/item/2364479';
var ENTITY=SERVER+USECASE;
casper.echo(ENTITY);
    casper.start(ENTITY, function() {
    test.assertTextExists('Society of Arts', 'book title verified');
    test.assertTextDoesntExist('DUE', 'found word "DUE"');
    test.assertTextExists('Off site', 'Status "Off site" (not DUE) verified');
    }).run(function() {
        test.done();
    });
});
