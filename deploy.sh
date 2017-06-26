#!/bin/bash
 
WEB_PATH='../usr/local/drygoods'
 
echo "Start deployment"
cd $WEB_PATH
echo "pulling source code..."
git reset --hard origin/master
git clean -f
git pull
git checkout master
echo "changing permissions..."
chown -R 777 $WEB_PATH
echo "Finished."