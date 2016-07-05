// m37_001 provide form for requesting print version of DDA ebook.
//
// THIS TEST FAILS. NEED A DIFFERENT EXAMPLE. THE LINK FOR DDA IS NOT
// SHOWN BECAUSE THIS TITLE HAS A PRINT HOLDING AT AMERIDAN
//
casper.test.begin('m37_001 #1102 request print edition form', 5, function suite(test) {
casper.echo("Test environment: "+SERVER);
var USECASE='/item/15497004';
var ENTITY=SERVER+USECASE;
    casper.start(ENTITY, function() {
        // verify the link is showing
        test.assertTextExists('Request print edition','Request print edition link text appearing');	
        test.assertExists('a[href*="request"]','Found link with url containing "request", for form'); 
        this.click('a[href*="request"]');
    });
    casper.waitForPopup(/request/, function() {
        this.test.assertEquals(this.popups.length, 1);
    });
    casper.withPopup(/request/, function() {
        // verify the form has loaded
        test.assertTextExists('Request a Print Edition','Request a Print Edition header displays');
        // verify that ISBN data appearing in id_isbn form element 
        test.assertField('isbn','ISBN: 0253018242'); 
    });
    casper.run(function() {
        test.done();
    });
});
