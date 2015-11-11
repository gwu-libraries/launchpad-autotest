// m33_001 list only a few subject headings and toggle to view more
//
casper.test.begin('m33_001 #736 periodicals "library has" toggle', 6, function suite(test) {
casper.echo("Test environment: "+SERVER);
var USECASE='/item/2274255';
var ENTITY=SERVER+USECASE;
    casper.start(ENTITY, function() {
        // verify the record is showing
        test.assertTextExists('New Yorker','title New Yorker appearing');	
        // verify that collapsed div is present
        test.assertExists('a[href="#morePeriodicals4872259"]','a:href with url href="#morePeriodicals4872259" exists');
        // verify that the div is not visible
        test.assertNotVisible('#morePeriodicals4872259', 'more issues div is not visible');
	// click on Show toggle
        this.click('a[href="#morePeriodicals4872259"]');
    });
    casper.then(function() {
        // verify formerly hidden volume holding now visible
        test.assertTextExists('Feb.17/24','Feb.17/24 appearing'); 
        // verify that text has changed to "Hide"
        test.assertSelectorHasText('a[href="#morePeriodicals4872259"]','[-] Hide','toggle text is Hide');
        // click on Hide and verify that text is invisible again
        this.click('a[href="#morePeriodicals4872259"]'); 
        
    });
    casper.then(function() {
        // verify that text has changed to "Show"
        test.assertSelectorHasText('a[href="#morePeriodicals4872259"]','[+] Show','toggle text is Show'); 
    });
    casper.run(function() {
        test.done();
    });
});
