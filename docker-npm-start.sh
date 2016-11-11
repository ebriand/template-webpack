#!/bin/bash
docker run --rm -it -p 8080:8080 -v $(pwd):/usr/src/app node:7.1-onbuild npm start
