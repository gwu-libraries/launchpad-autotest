# ALLISSUES.sh
# combines m13.sh and m14.sh and m15-ALL.sh
#
# m13
echo 'Starting tests for m13'
sh m13.sh
echo 'All done testing m13. '
#
# m14
#
echo 'Starting tests for test m14-001'
sh m14-001.sh
sleep 2
echo 'Finished m14-001'
echo 'There are no automated tests for m14-002'
# there are no automated tests for m14-002
echo 'Starting tests for test m14-003'
sh m14-003.sh
echo 'Finished m14-003, starting m14-004'
sleep 2
#
sh m14-004.sh
echo 'Finished m14-004. '
echo 'All done testing m14. '
#
# m15
#
echo 'Starting m15-001 tests'
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
echo 'Finished m15-001 tests'
# m15-002.sh 
#
echo 'Starting m15-002 tests'
# 
sh issue.sh 355
sh issue.sh 398
sh issue.sh 417
sh issue.sh 418
sh issue.sh 419
sh issue.sh 420
sh issue.sh 421
sh issue.sh 426
sh issue.sh 427
sh issue.sh 428
sh issue.sh 431
sh issue.sh 433
sh issue.sh 434
sh issue.sh 444
sh issue.sh 450
sh issue.sh 454
sh issue.sh 458
sh issue.sh 464
# 
echo 'done testing m15'
