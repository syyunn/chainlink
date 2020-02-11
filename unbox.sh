#!/usr/bin/env bash

set -e

mv evm-box/* .
rm -rf evm-box
IMAGE=box-img-lg.png
if [ -f "$IMAGE" ]; then
	rm box-img*
fi