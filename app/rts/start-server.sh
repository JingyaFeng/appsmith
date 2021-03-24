#!/usr/bin/env bash

set -o errexit

cd "$(dirname "$0")"
npx tsc
set -o allexport
source .env
exec node dist/server.js
