// m16_001 #429 #533
// 
//
casper.test.begin('m16_001 #429 #533 display open url request', 4, function suite(test) { 
casper.echo("Test environment: "+SERVER);
var USECASE='/item/2388242?ctx_ver=Z39.88-2004&ctx_enc=info:ofi/enc:UTF-8&rfr_id=info:sid/ProQ:abiglobal&rft_val_fmt=info:ofi/fmt:kev:mtx:journal&rft.genre=article&rft.jtitle=Library%20Hi%20Tech&rft.atitle=Developing%20and%20completing%20a%20library%20mobile%20technology%20survey%20to%20create%20a%20user-centered%20mobile%20presence&rft.au=Becker,%20Danielle%20Andre;Bonadie-Joseph,%20Ingrid;Cain,%20Jonathan&rft.aulast=Becker&rft.aufirst=Danielle&rft.date=2013-10-01&rft.volume=31&rft.issue=4&rft.spage=688&rft.isbn=&rft.btitle=&rft.title=Library%20Hi%20Tech&rft.issn=07378831#';
var ENTITY=SERVER+USECASE;
casper.echo(USECASE);
	casper.start(ENTITY, function() {
	test.assertTextExists('Library hi tech' , 'page title Library hi tech found');
	test.assertTextExists('you are looking for is' , 'Verified article label');
	test.assertTextExists('Becker, Danielle Andre' , 'Verified article author');
	test.assertTextExists('31, (4),  688 -' , 'Verified volumne, issue, pages');
    }).run(function() {
        test.done();
    });
});
