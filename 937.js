// m27_001 #937
//
casper.test.begin('m27_001 #937 himmelfarb online', 3, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/12935354';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('Foundations of clinical research' , 'matched title');
	test.assertTextExists('Himmelfarb Health Sciences' , 'found Himmelfarb');
	test.assertTextExists('Full text online' , 'found Full text online button');
    }).run(function() {
        test.done();
    });
});
