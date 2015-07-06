#
# this command will identify any log file that has failures
#
NERR=`ls | grep -c xml`
if [ $NERR -ne 0 ]; 
then {
    echo "Errors:"
    grep -v "failures=\"0\"" *.xml | cut -f1 -d: 
    }
else {
    echo "No errors found."
}
fi
