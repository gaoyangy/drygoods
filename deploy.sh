#!/bin/bash
 
WEB_PATH='/usr/local/nginx/drygoods/'
 
echo "Start deployment"
cd $WEB_PATH
echo "pulling source code..."
git pull
echo "changing permissions..."
echo "Finished."