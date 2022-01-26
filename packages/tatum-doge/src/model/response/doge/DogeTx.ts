/**
 *
 * @export
 * @interface DogeTx
 */
export interface DogeTx {
  /**
   * Transaction hash.
   * @type {string}
   * @memberof DogeTx
   */
  hash: string
  /**
   *
   * @type {number}
   * @memberof DogeTx
   */
  size: number
  /**
   * @type {number}
   * @memberof DogeTx
   */
  vsize: number
  /**
   * Index of the transaction.
   * @type {number}
   * @memberof DogeTx
   */
  version: number
  /**
   *
   * @type {Array<DogeTxInputs>}
   * @memberof DogeTx
   */
  vin: DogeTxInputs[]
  /**
   *
   * @type {Array<DogeTxOutputs>}
   * @memberof DogeTx
   */
  vout: DogeTxOutputs[]
  /**
   * Block this transaction was included in.
   * @type {number}
   * @memberof DogeTx
   */
  locktime: number
}

/**
 *
 * @export
 * @interface DogeTxCoin
 */
export interface DogeTxCoin {
  /**
   *
   * @type {number}
   * @memberof DogeTxCoin
   */
  version: number
  /**
   *
   * @type {number}
   * @memberof DogeTxCoin
   */
  height: number
  /**
   *
   * @type {string}
   * @memberof DogeTxCoin
   */
  value: string
  /**
   *
   * @type {string}
   * @memberof DogeTxCoin
   */
  script: string
  /**
   * Sender address.
   * @type {string}
   * @memberof DogeTxCoin
   */
  address: string
  /**
   * Coinbase transaction - miner fee.
   * @type {boolean}
   * @memberof DogeTxCoin
   */
  coinbase: boolean
}

/**
 *
 * @export
 * @interface DogeTxInputs
 */
export interface DogeTxInputs {
  /**
   *
   * @type {string}
   * @memberof DogeTxInputs
   */
  txid: string
  vout: number
  /**
   * Data generated by a spender which is almost always used as variables to satisfy a pubkey script.
   * @type {string}
   * @memberof DogeTxInputs
   */
  scriptSig: {
    asm: string
    hex: string
  }
  /**
   *
   * @type {number}
   * @memberof DogeTxInputs
   */
  sequence: number
}

/**
 *
 * @export
 * @interface DogeTxOutputs
 */
export interface DogeTxOutputs {
  /**
   * Sent amount in LTC.
   * @type {string}
   * @memberof DogeTxOutputs
   */
  value: number
  n: number
  scriptPubKey: {
    asm: string
    hex: string
    regSigs: number
    type: string
    addresses: string[]
  }
}