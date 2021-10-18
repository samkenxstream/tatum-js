import {axios, get, post} from '../connector/tatum';
import {
    Currency,
    MintErc721,
} from '../model';
import {ipfsUpload} from '../storage';

export const mintNFTRequest = (body: MintErc721) => post(`/v3/nft/mint`, body)

/**
 * For more details, see <a href="https://tatum.io/apidoc#operation/NftGetBalanceErc721" target="_blank">Tatum API documentation</a>
 */
export const getNFTsByAddress = async (chain: Currency, contractAddress: string, address: string): Promise<string[]> =>
    get(`/v3/nft/balance/${chain}/${contractAddress}/${address}`);

/**
 * For more details, see <a href="https://tatum.io/apidoc#operation/NftGetContractAddress" target="_blank">Tatum API documentation</a>
 */
export const getNFTContractAddress = async (chain: Currency, txId: string): Promise<{ contractAddress: string }> =>
    get(`/v3/nft/address/${chain}/${txId}`);

/**
 * For more details, see <a href="https://tatum.io/apidoc#operation/NftGetMetadataErc721" target="_blank">Tatum API documentation</a>
 */
export const getNFTMetadataURI = async (chain: Currency, contractAddress: string, tokenId: string, account?: string): Promise<{ data: string }> => {
    let url = `/v3/nft/metadata/${chain}/${contractAddress}/${tokenId}`;
    if (account) {
        url += `?account=${account}`;
    }
    return get(url);
};

/**
 * Get IPFS image URL from the NFT with the IPFS Metadata scheme. URL
 * @param chain chain where NFT token is
 * @param contractAddress contract address of the NFT token
 * @param tokenId ID of the token
 * @param account FLOW only - account where the token is minted
 */
export const getNFTImage = async (chain: Currency, contractAddress: string, tokenId: string, account?: string): Promise<{ originalUrl: string, publicUrl: string }> => {
    const {data: metadata} = await getNFTMetadataURI(chain, contractAddress, tokenId, account);
    const metadataUrl = `https://gateway.pinata.cloud/ipfs/${metadata.replace('ipfs://', '')}`;
    const {data} = await axios.get(metadataUrl);
    const imageUrl = data.image;
    return {
        originalUrl: imageUrl,
        publicUrl: `https://gateway.pinata.cloud/ipfs/${imageUrl.replace('ipfs://', '')}`
    };
};

/**
 * For more details, see <a href="https://tatum.io/apidoc#operation/NftGetRoyaltyErc721" target="_blank">Tatum API documentation</a>
 */
export const getNFTRoyalty = async (chain: Currency, contractAddress: string, tokenId: string): Promise<{ data: string }> => get(`/v3/nft/royalty/${chain}/${contractAddress}/${tokenId}`);

/**
 * Mint new NFT token with metadata stored on the IPFS.
 * @param testnet if we use testnet or not
 * @param body body of the mint request
 * @param file file to be stored on the IPFS
 * @param name name of the file
 * @param description description of the file
 * @param scheme optional JSON Metadata scheme
 * @param provider optional provider do broadcast tx
 */
export const createNFTAbstraction = async (
                                mintNftWithUri: (testnet: boolean, body: MintErc721, provider?: string) => Promise<any>,
                                testnet: boolean, 
                                body: MintErc721,
                                file: Buffer,
                                name: string,
                                description?: string,
                                scheme?: any, 
                                provider?: string) => {
    const metadata = scheme || {};
    metadata.name = name;
    if (description) {
        metadata.description = description;
    }
    const {ipfsHash} = await ipfsUpload(file, name);
    metadata.image = `ipfs://${ipfsHash}`;
    const {ipfsHash: metadataHash} = await ipfsUpload(Buffer.from(JSON.stringify(metadata)), 'metadata.json');
    body.url = `ipfs://${metadataHash}`;
    if (body.chain === Currency.FLOW) {
        (body as any).privateKey = (body as any).privateKey || (body as any).fromPrivateKey;
    }
    const result = await mintNftWithUri(testnet, body, provider);
    return {
        tokenId: (body as any).tokenId,
        // @ts-ignore
        ...result,
        metadataUrl: body.url,
        metadataPublicUrl: `https://gateway.pinata.cloud/ipfs/${metadataHash}`,
        imageUrl: `ipfs://${ipfsHash}`,
        imagePublicUrl: `https://gateway.pinata.cloud/ipfs/${ipfsHash}`
    };
};