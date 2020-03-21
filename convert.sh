#!/bin/bash

# Conversion export xls Hello Bank en csv nettoyé

if [ $# -ne 1 ]; then
	echo "Usage: $0 <xls file>"
	exit 1
fi

INFILE=$1

unoconv -f csv $1

BASE=$(basename $INFILE .xls)
OUTFILE="${BASE}.csv"

echo "$OUTFILE généré"

NBLINES=$(cat $OUTFILE | wc -l)
NBLINESM2=$(($NBLINES - 2))

DATE=$(date "+%Y%m%d")

# On enlève l'entête
tail -n $NBLINESM2 $OUTFILE > $DATE.csv

echo "${DATE}.csv généré"

