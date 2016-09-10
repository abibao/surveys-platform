#!/bin/bash

clear

mkdir -p ./.build/reader

cp ./src/reader/index.html ./.build/reader/
cp ./src/reader/favicon.ico ./.build/reader/
cp -a ./src/reader/styles ./.build/reader/
cp -a ./src/reader/images ./.build/reader/

./node_modules/.bin/webpack-dev-server --config ./webpack-reader.config.js --history-api-fallback --progress --host 0.0.0.0 --port 8484
