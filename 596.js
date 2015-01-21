// m25_002 #596 marc 362 removed from current frequency'
// 
casper.test.begin('m25_002 #596 marc 362 not present in current frequency', 4, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/13541479';
var ENTITY=SERVER+USECASE;
	casper.start(ENTITY, function() {
	test.assertTextExists('BAILII' , 'matched title');
	test.assertTextExists('Began in 2000' , 'found string Began in 2000');
	test.assertTextExists('Publication History' , 'found string Publication History');
	test.assertTextDoesntExist('Current Frequency' , 'verified Current Frequency omitted');
    }).run(function() {
        test.done();
    });
});
