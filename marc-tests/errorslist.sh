#
# this command will identify any log file that has errors
#
grep -v "failures=\"0\"" *.xml | cut -f1 -d:
