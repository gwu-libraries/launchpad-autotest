// m33_001 list only a few subject headings and toggle to view more
//
casper.test.begin('m33_001 #1026 subject heading list toggle', 6, function suite(test) {
casper.echo("Test environment: "+SERVER);
var USECASE='/search?q=Statistics+and+reality+%3A+concepts+and+measurements+of+migration+in+Europe';
var ENTITY=SERVER+USECASE;
    casper.start(ENTITY, function() {
        // verify the record is showing
        test.assertTextExists('Fassman','author Fassman appearing');	
        // verify that collapsed div is present
        test.assertExists('a[href="#moresubjects7703715"]','a:href with url moresubjects7703715 exists');
        // verify that the div is not visible
        test.assertNotVisible('#moresubjects7703715', 'subject headings div is not visible');
	// click on Show toggle
        this.click('a[href="#moresubjects7703715"]');
    });
    casper.then(function() {
        // verify formerly hidden heading now visible
        test.assertTextExists('Statistik','Statistik appearing'); 
        // verify that text has changed to "Hide"
        test.assertSelectorHasText('a[href="#moresubjects7703715"]','[-] Hide','toggle text is Hide');
        // click on Hide and verify that text is invisible again
        this.click('a[href="#moresubjects7703715"]'); 
        
    });
    casper.then(function() {
        // verify that text has changed to "Show"
        test.assertSelectorHasText('a[href="#moresubjects7703715"]','[+] Show','toggle text is Show'); 
    });
    casper.run(function() {
        test.done();
    });
});
