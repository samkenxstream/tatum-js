import {
  commonTestFactory,
  REPLACE_ME_WITH_TATUM_API_KEY,
  TEST_DATA,
  TestCasesApiCallMapping,
} from '@tatumio/shared-testing-common'
import { TatumKcsSDK } from '../kcs.sdk'
import * as apiClient from '@tatumio/api-client'
import { CallSmartContractMethod, KcsEstimateGas } from '@tatumio/api-client'

jest.mock('@tatumio/api-client')
const mockedApi = jest.mocked(apiClient.ApiServices, true)

describe('KcsSDK - blockchain', () => {
  const sdk = TatumKcsSDK({ apiKey: REPLACE_ME_WITH_TATUM_API_KEY })

  afterEach(() => {
    jest.clearAllMocks()
  })

  const blockchain = sdk.blockchain
  const api = mockedApi.blockchain.kcs
  const testData = TEST_DATA.KCS

  const blockchainFunctionsMapping: TestCasesApiCallMapping<typeof blockchain> = {
    broadcast: [api.kcsBroadcast, { txData: 'hello' }],
    getTransactionsCount: [api.kcsGetTransactionCount, testData.TESTNET.ADDRESS_0],
    getCurrentBlock: api.kcsGetCurrentBlock,
    getBlock: [api.kcsGetBlock, testData.BLOCK_HASH],
    getBlockchainAccountBalance: [api.kcsGetBalance, testData.TESTNET.ADDRESS_0],
    getTransaction: [api.kcsGetTransaction, testData.TX_HASH],
    estimateGas: [
      blockchain.estimateGas,
      {
        from: testData.TESTNET.ADDRESS_0,
        to: testData.TESTNET.ADDRESS_100,
        contractAddress: testData.TESTNET.SMART_CONTRACT.CONTRACT_ADDRESS,
        amount: '10',
      } as KcsEstimateGas,
    ],
    smartContractInvocation: [
      api.kcsBlockchainSmartContractInvocation,
      {
        contractAddress: testData.TESTNET.ERC_20.CONTRACT_ADDRESS,
        methodName: 'transfer',
        methodABI: {
          inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
          name: 'stake',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
        params: ['0x632'],
        amount: '100000',
        fromPrivateKey: testData.TESTNET.ERC_20.PRIVATE_KEY,
        nonce: 0,
        fee: { gasLimit: '40000', gasPrice: '20' },
      } as CallSmartContractMethod,
    ],
    smartContractGetAddress: [mockedApi.blockchain.util.scGetContractAddress, 'KCS', testData.TX_HASH],
  }

  describe('API methods mapping', () => {
    commonTestFactory.apiMethods(blockchain, blockchainFunctionsMapping)
  })
})