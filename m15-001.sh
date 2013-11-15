# m15_001.sh 
# Script runs tests, output to screen plus an xml log for each
# Target url determined by contents of config.sh
# Each numbered item corresponds to a .js file of that name 
# (eg., 362.js)
#
# A set of test scripts to verify MARC fields are stored in the
# directory marc-tests along with a copy of the script issues.sh
# There you will find a script for every MARC field identified in
# lp/ui/tests/marc_test.py and on the MARC Extraction wiki page.
sh issue.sh 180
sh issue.sh 400a
sh issue.sh 400b
sh issue.sh 403
sh issue.sh 415
sh issue.sh 15json
