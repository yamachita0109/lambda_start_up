#!/bin/sh

# zip
rm -fr release && mkdir release
cd src
zip -r ../app.zip index.js node_modules usecase.js model client
cd ../
mv app.zip release/
