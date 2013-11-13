#!/bin/sh
# File name:    issue.sh
# Author:	Cummings
# Usage:	sh issue.sh NNN
# Description:  This script invokes casperjs test on a given file, NNN.js
#		which should be in the current working directory.
#		The target server url is defined in a separate configuration file
#		which should be in the current working directory.
# 		The test results are displayed on screen.
#		Test results are also saved in an xml file named log-NNN.xml where
#		NNN is the issue number
# Requirements: 1. phantomjs and casperjs installed
#		2. config.js which contains the setting for the server path
#		3. a test script, eg., 248.js which contains a single issue test
# Related file: Other shell scripts can be used to call this script so that one
#		command could be executed to chain multiple tests. 
#		example: sh m14-001.sh 
#		The script named errorslist.sh may be run after executing tests,
#		and it will identify any xml log containing an error.
#
# -------------------------------------------------------------------------------
# Check for argument, config.js, script named $1.js, casper.js, phantom.js
#
if [ $# -ne 1 ];
	then {
		tput rev;
		echo "Usage: sh issue.sh NNN "; 
		tput rmso;
		echo "       Where NNN is the issue js file";
		echo;
		exit 10;
	}
fi
if [ ! -f config.js ];
	then {
		tput rev;
		echo "Error: The required config.js file was not found in this directory.";
		tput rmso;
		exit 20;
	}
fi
if [ ! -f $1.js ];
	then {
		tput rev;
		echo "Error: There is no test script in this directory named $1.js";
		tput rmso;
		exit 30;
	}
fi
if [ ! $(which casperjs) ];
	then {
		tput rev;
		echo "Error: casperjs is required. It is not in your path, or not installed.";
		tput rmso;
		exit 40;
	}
fi
if [ ! $(which phantomjs) ];
	then {
		tput rev;
		echo "Error: phantomjs is required. It is not in your path, or not installed.";
		tput rmso;
		exit 50;
	}
fi
# OK run casper test
casperjs test $1.js --includes=config.js --xunit=log-$1.xml






