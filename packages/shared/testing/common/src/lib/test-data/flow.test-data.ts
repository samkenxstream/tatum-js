import { ETH_TEST_DATA } from './eth.test-data'

export const FLOW_TEST_DATA = {
  ...ETH_TEST_DATA,
  TESTNET: {
    XPUB: 'xpub6EytmxWqMXrZTiWkCTHxZNJGXcC18orCWvhMtXwsHkiXkW4sDZGYj1Rj6Z5e629RNjWRSkHqM2PdpjusenxsZhbR5KiAqv9GecSUTzbLRm4',
    PRIVATE_KEY_0: 'ab10dacb7607ce09be38394622547e3c2f463d8bcace41c645bc312470492de3',
    PRIVATE_KEY_100: '88aa815531904a86b4ee3d15206ff1200a024365bf392ef98c857892bf07f91f',
    ADDRESS_0:
      '8091e703a79317a535d96ae6f4bf1c73d2120983e039b2b4cac93093eab8a6f2c6c4e1d0c6a5b99650af3a68f7c855e87d41d761bfc779a250790aa14162625f',
    ADDRESS_100:
      'a091269c116bf5981a88958d58c8ead1258b65314876c85a34af6d810e8c0dc110777f065131e9d0c02da589baff4cccdaac3fb6f2d1ff0c82e0277559c2a164',
    XPUB_REGEX: /xpub/,
  },
  MAINNET: {
    XPUB: 'xpub6EytmxWqMXrZTiWkCTHxZNJGXcC18orCWvhMtXwsHkiXkW4sDZGYj1Rj6Z5e629RNjWRSkHqM2PdpjusenxsZhbR5KiAqv9GecSUTzbLRm4',
    PRIVATE_KEY_0: 'ab10dacb7607ce09be38394622547e3c2f463d8bcace41c645bc312470492de3',
    PRIVATE_KEY_100: '88aa815531904a86b4ee3d15206ff1200a024365bf392ef98c857892bf07f91f',
    ADDRESS_0:
      '8091e703a79317a535d96ae6f4bf1c73d2120983e039b2b4cac93093eab8a6f2c6c4e1d0c6a5b99650af3a68f7c855e87d41d761bfc779a250790aa14162625f',
    ADDRESS_100:
      'a091269c116bf5981a88958d58c8ead1258b65314876c85a34af6d810e8c0dc110777f065131e9d0c02da589baff4cccdaac3fb6f2d1ff0c82e0277559c2a164',
    XPUB_REGEX: /xpub/,
  },
  ACCOUNT: '0x7b16fa6cc37f7ac1',
  INVALID_XPUB_CHILD_INDEX_ERROR: 'Expected BIP32Path, got String "-1"',
  INVALID_PRIVATE_KEY_CHILD_INDEX_ERROR: 'Expected UInt32, got Number -1',
  INVALID_PRIVATE_KEY_ERROR: 'Expected private key to be an Uint8Array with length 32',
}