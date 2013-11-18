#
# this command will identify any log file that has failures
#
grep -v "failures=\"0\"" *.xml | cut -f1 -d:
