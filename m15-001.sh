# m15-001.sh 
# Script runs tests, output to screen plus an xml log for each
# Target url determined by contents of config.sh
# Each numbered item corresponds to a .js file of that name 
# (eg., 362.js)
#
#  two of the same test
sh issue.sh 403
sh issue.sh 415
#  three of the same test
sh issue.sh 180
sh issue.sh 409
sh issue.sh 416
#
sh issue.sh 413
# 
sh issue.sh 400a
sh issue.sh 400b
sh issue.sh 15json
