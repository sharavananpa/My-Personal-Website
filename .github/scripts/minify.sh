#!/bin/sh -l

npm i minify -g
sudo apt-get update
sudo apt-get -y install moreutils

find . -type f \( -iname \*.html -o -iname \*.js -o -iname \*.css \) | while read fname
    do
    minify ${fname} | sponge ${fname}
    done

rm -r .github
rm README.md
rm .gitignore
