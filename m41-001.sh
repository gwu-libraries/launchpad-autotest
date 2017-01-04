# m41-001.sh 
# 
# NOT tested in casper yet:
# 1175 fixed invalid header value error
# 1160 update manage.py fixing site map
# 1149 advanced search passes wildcard
#
echo 'Starting m49 tests'
sh issue.sh 1148
sh issue.sh 1150
sh issue.sh 1173
sh issue.sh 1174
sh issue.sh 1177
echo 'Finished m41 tests'
