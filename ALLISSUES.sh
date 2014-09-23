# ALLISSUES.sh
# combines m13.sh and m14.sh and m15-ALL.sh
#
# m13
echo 'Starting tests for m13'
sh m13.sh
echo 'Finished testing m13. '
#
# m14
#
echo 'Starting tests for m14'
sh m14.sh
echo 'Finished testing m14. '
#
# m15
#
echo 'Starting tests for m15'
sh m15-ALL.sh
echo 'Finished testing m15'
# 
# m16
#
echo 'Starting tests for m16'
sh m16-ALL.sh
echo 'Finished testing m16'
#
echo 'Starting tests for m22 through 24-004'
sh m24-002.sh
echo 'Finished testing m22-24'
#
echo 'Finished ALL automated scripts'
