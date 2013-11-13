# m14.sh test server
# Script runs tests 
# output to screen plus an xml log for each
#
	echo 'running tests for test m14-001'
	sh m14-001.sh
	sleep 2
	# there are no automated tests for m14-002
	echo 'running tests for test m14-003'
	sh m14-003.sh
	echo 'Finished m14-003, starting m14-004'
	sleep 2
	#
	sh m14-004.sh
	echo 'Finished m14-004. '
	echo 'All done testing m14. '
	echo 'In addition to onscreen results above, the '
	echo 'individual results are logged as log-{p}NNN.xml'
