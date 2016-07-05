// 
// m16_001 #349
//
casper.test.begin('m16_001 #349 show WRLC due date', 2, function suite(test) {
casper.echo("Test environment: "+SERVER);
var USECASE='/item/3992408';
var ENTITY=SERVER+USECASE;
casper.echo(ENTITY);
    casper.start(ENTITY, function() {
    test.assertTextExists('Harry Potter', 'book title verified');
    test.assertTextExists('DUE', 'found word "DUE"');
    casper.echo("disclaimer");
    casper.echo("This test may not work if the bibid 3992408 is not checked out.");
    casper.echo("If the book is not checked out, edit the test to ");
    casper.echo("use the bibid of a book that is checked out.");

    }).run(function() {
        test.done();
    });
});
