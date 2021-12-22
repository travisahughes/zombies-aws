const moralisEnv = {
  mainnet: {
    serverUrl: 'https://ky2f8oyqj2xh.grandmoralis.com:2053/server',
    appId: 'XWBR8ujJrsaUBtxe5asGP5zEQStmlgfv9rZ7pCdx',
  },
  rinkeby: {
    serverUrl: 'https://9jesfsh6cfax.grandmoralis.com:2053/server',
    appId: 'rrxHXV0xkgPAzge58siRfGg02STS2lfxkpplw2lU',
  },
};

export const contract_data = {
  mainnet: {
    contract_id: '0x65273D9be210e10be64D7E122387cc85857F92FD',
    network_id: '0x1',
    chain_id: '0x1',
    network_name: 'Mainnet',
  },
  rinkeby: {
    contract_id: '0x4e68891b8b491dd128981ed14fb0a1eee59012b4',
    network_id: 'rinkeby',
    chain_id: '0x4',
    network_name: 'Rinkeby',
  },
  polygon: {
    contract_id: '0x4e68891b8b491dd128981ed14fb0a1eee59012b4',
    network_id: 'polygon',
    network_name: 'Polygon',
  },
  mumbai: {
    contract_id: '0x4e68891b8b491dd128981ed14fb0a1eee59012b4',
    network_id: 'mumbai',
    network_name: 'Mumbai',
  },
  '0x1': {
    contract_id: '0x65273D9be210e10be64D7E122387cc85857F92FD',
    network_id: '0x1',
    chain_id: '0x1',
    network_name: 'Mainnet',
  },
  '0x4': {
    contract_id: '0x4e68891b8b491dd128981ed14fb0a1eee59012b4',
    network_id: 'rinkeby',
    chain_id: '0x4',
    network_name: 'Rinkeby',
  },
  '0x89': {
    contract_id: '0x4e68891b8b491dd128981ed14fb0a1eee59012b4',
    network_id: 'polygon',
    network_name: 'Polygon',
  },
  '0x13881': {
    contract_id: '0x4e68891b8b491dd128981ed14fb0a1eee59012b4',
    network_id: 'mumbai',
    network_name: 'Mumbai',
  },
};

export default moralisEnv;
