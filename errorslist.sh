#
# this command will identify any log file that has failures
#
NERR=`ls | grep -c xml`
if [ $NERR -ne 0 ]; 
then {
    grep -v "failures=\"0\"" *.xml | cut -f1 -d: 2>/tmp/junk.out
    }
else {
    echo "No errors found."
}
fi
