curl --request POST \
    --url https://lb.drpc.org/ogrpc?network=ethereum&dkey=ApCfFsP-XEG1ocvoh8RNPY0GAf87cqkR746_hlDYfw4q
    --header 'accept: application/json' \
    --header 'content-type: application/json' \
    --data '
{
 "id": 1,
 "jsonrpc": "2.0",
 "method": "eth_getBlockByNumber",
 "params": [0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2
   "finalized",
   true
 ]
}
'
