# m39-001.sh / m39-002
# 
# NOT tested in casper yet:
#
# 1120 sorted, de-duplicated subject terms
# 1123 author date is part of the oclc identities link
# 1124 google analytics is on the oclc identities link
# 1129 remove debug statement
# 1133 fix global variable name HttpError
# 1141 himmelfarb links to their borrowing services page is ignored.
#
echo 'Starting m39 tests'
sh issue.sh 1105
sh issue.sh 1125
sh issue.sh 1128
echo 'Finished m39 tests'
