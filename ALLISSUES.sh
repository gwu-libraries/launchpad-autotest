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
echo 'Starting tests for m22 through 24-003'
sh m24-002.sh
# issue 803 is the only one in milestone m24_003
sh issue.sh 803
sh issue.sh 809
echo 'Finished testing m22-24_004'
#
echo 'Starting m25_002 tests'
sh m25-002.sh
echo 'Finished testing m25_002'
#
echo 'Starting m26_001 tests'
sh m26-001.sh
echo 'Finished testing m26_001'
#
echo 'Starting m27-001 tests'
sh m27-001.sh
echo 'Finished testing m27-001'
#
echo 'Starting m29-001 tests'
sh m29-001.sh
echo 'Finished testing m29-001'
#
echo 'Starting m29-002 and m29-003 tests'
# (m29-003.js includes both)
sh m29-003.sh
echo 'Starting m30-001 tests'
sh m30-001.sh
echo 'Starting m31-001 tests'
sh m31-001.sh
echo 'Starting m32-001 tests'
sh m32-001.sh
echo 'Finished ALL automated scripts'
