/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateAuction = {
    /**
     * Blockchain to work with.
     */
    chain: CreateAuction.chain;
    /**
     * Address of the auction smart contract.
     */
    contractAddress: string;
    /**
     * Address of the NFT asset to sell smart contract.
     */
    nftAddress: string;
    /**
     * Address of the seller of the NFT asset.
     */
    seller: string;
    /**
     * Optional address of the ERC20 token, which will be used as a selling currency of the NFT.
     */
    erc20Address?: string;
    /**
     * ID of the auction. It's up to the developer to generate unique ID
     */
    id: string;
    /**
     * Amount of the assets to be sent. For ERC-721 tokens, enter 1.
     */
    amount?: string;
    /**
     * ID of token, if transaction is for ERC-721 or ERC-1155.
     */
    tokenId: string;
    /**
     * Last block, where auction accepts bids.
     */
    endedAt: number;
    /**
     * True if asset is NFT of type ERC721, false if ERC1155.
     */
    isErc721: boolean;
    /**
     * Private key of sender address. Private key, or signature Id must be present.
     */
    fromPrivateKey: string;
    /**
     * Nonce to be set to Ethereum transaction. If not present, last known nonce will be used.
     */
    nonce?: number;
    /**
     * Custom defined fee. If not present, it will be calculated automatically.
     */
    fee?: {
        /**
         * Gas limit for transaction in gas price.
         */
        gasLimit: string;
        /**
         * Gas price in Gwei.
         */
        gasPrice: string;
    };
}

export namespace CreateAuction {

    /**
     * Blockchain to work with.
     */
    export enum chain {
        ETH = 'ETH',
        ONE = 'ONE',
        BSC = 'BSC',
        MATIC = 'MATIC',
    }


}