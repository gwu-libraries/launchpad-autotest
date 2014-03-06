// m16_003 #556
// 
//
casper.test.begin('m16_003 #556 openurl wording', 1, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/8932980?genre=bookitem&isbn=9781843842675&issn=&title=Defining+Neomedievalism%28s%29+II&volume=&issue=&date=20110101&atitle=Borges+and+the+North&aulast=Brljak%2c+Vladimir&spage=99&sid=EBSCO:MLA+International+Bibliography&pid=Brljak%2c+Vladimir20110101MLA+International+Bibliography2011396426';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('You are looking for' , 'phrase You are looking for... found');
    }).run(function() {
        test.done();
    });
});
