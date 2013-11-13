#
# this command will identify any log file that has errors
#
grep -v "errors=\"0\"" *.xml | cut -f1 -d:
