# Build Chainlink
FROM smartcontract/builder:1.0.30

ARG SRCROOT=/usr/local/src/chainlink
WORKDIR ${SRCROOT}
