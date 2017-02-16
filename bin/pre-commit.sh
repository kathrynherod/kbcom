#!/bin/sh

##
#   Eslint validation
##
jsFiles=$(git diff --cached --name-only --diff-filter=AM '*.js')
pass=true

if [ "$jsFiles" != "" ]; then
    for file in ${jsFiles}; do
        result=$(eslint ${file} --quiet --color)
        if [ "$result" != "" ]; then
            echo "$result"
            pass=false
        fi
    done
    if $pass; then
        echo " ✔ ︎Eslint validation passed!"
        exit 0;
    else
        echo ""
        echo " ✗ Commit failed. Please fix eslint validation errors."
        echo ""
        exit 1
    fi
fi

