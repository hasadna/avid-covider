#!/bin/sh
git checkout master && \
(git branch -D dist || true) && \
git checkout -b dist && \
rm .gitignore && \
ng build --prod -c production && \
ng build --prod -c ar && \
ng build --prod -c en && \
ng build --prod -c ru && \
ng build --prod -c am && \
cp CNAME dist/avid-covider/ && \
git add dist/avid-covider && \
git commit -m dist && \
(git branch -D gh-pages || true) && \
git subtree split --prefix dist/avid-covider -b gh-pages && \
git push -f origin gh-pages:gh-pages && \
git checkout master && \
git branch -D gh-pages && \
git branch -D dist && \
git checkout . && \
git push
