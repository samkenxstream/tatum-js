export enum Currency {
  BTC = 'BTC',
  BCH = 'BCH',
  LTC = 'LTC',
  CELO = 'CELO',
  SOL = 'SOL',
  ONE = 'ONE',
  CUSD = 'CUSD',
  CEUR = 'CEUR',
  ETH = 'ETH',
  FABRIC = 'FABRIC',
  QUORUM = 'QUORUM',
  XRP = 'XRP',
  XLM = 'XLM',
  DOGE = 'DOGE',
  VET = 'VET',
  NEO = 'NEO',
  BNB = 'BNB',
  BSC = 'BSC',
  CAKE = 'CAKE',
  BUSD_BSC = 'BUSD_BSC',
  B2U_BSC = 'B2U_BSC',
  BETH = 'BETH',
  GAMEE = 'GAMEE',
  BBTC = 'BBTC',
  BADA = 'BADA',
  RMD = 'RMD',
  WBNB = 'WBNB',
  BDOT = 'BDOT',
  BXRP = 'BXRP',
  BLTC = 'BLTC',
  BBCH = 'BBCH',
  MATIC = 'MATIC',
  USDC_MATIC = 'USDC_MATIC',
  USDC_BSC = 'USDC_BSC',
  USDT = 'USDT',
  GMC = 'GMC',
  GMC_BSC = 'GMC_BSC',
  FLOW = 'FLOW',
  FUSD = 'FUSD',
  USDT_TRON = 'USDT_TRON',
  INRT_TRON = 'INRT_TRON',
  TRON = 'TRON',
  LEO = 'LEO',
  LINK = 'LINK',
  WBTC = 'WBTC',
  UNI = 'UNI',
  FREE = 'FREE',
  MKR = 'MKR',
  USDC = 'USDC',
  MATIC_ETH = 'MATIC_ETH',
  BAT = 'BAT',
  TUSD = 'TUSD',
  BUSD = 'BUSD',
  PAX = 'PAX',
  PLTC = 'PLTC',
  XCON = 'XCON',
  REVV = 'REVV',
  SAND = 'SAND',
  MMY = 'MMY',
  PAXG = 'PAXG',
  HAG = 'HAG',
  LYRA = 'LYRA',
  ADA = 'ADA',
  XDC = 'XDC',
  LATOKEN = 'LATOKEN',
  USDT_MATIC = 'USDT_MATIC',
  QTUM = 'QTUM',
  EGLD = 'EGLD',
  ALGO = 'ALGO',
  KCS = 'KCS',
  COIIN = 'COIIN',
  TTT = 'TTT',
}

export const ERC20_CURRENCIES = [
  Currency.USDT.toString(),
  Currency.LATOKEN.toString(),
  Currency.LEO.toString(),
  Currency.LINK.toString(),
  Currency.UNI.toString(),
  Currency.FREE.toString(),
  Currency.MKR.toString(),
  Currency.BUSD.toString(),
  Currency.USDC.toString(),
  Currency.MATIC_ETH.toString(),
  Currency.BAT.toString(),
  Currency.WBTC.toString(),
  Currency.TUSD.toString(),
  Currency.PAX.toString(),
  Currency.PAXG.toString(),
  Currency.PLTC.toString(),
  Currency.XCON.toString(),
  Currency.MMY.toString(),
  Currency.COIIN.toString(),
  Currency.REVV.toString(),
  Currency.SAND.toString(),
  Currency.GMC.toString(),
]

export const BEP20_CURRENCIES = [
  Currency.BETH.toString(),
  Currency.BBTC.toString(),
  Currency.RMD.toString(),
  Currency.USDC_BSC.toString(),
  Currency.B2U_BSC.toString(),
  Currency.BADA.toString(),
  Currency.WBNB.toString(),
  Currency.GMC_BSC.toString(),
  Currency.BDOT.toString(),
  Currency.BXRP.toString(),
  Currency.BLTC.toString(),
  Currency.BBCH.toString(),
  Currency.HAG.toString(),
  Currency.CAKE.toString(),
  Currency.BUSD_BSC.toString(),
]

export const MATIC20_CURRENCIES = [Currency.USDC_MATIC.toString(), Currency.GAMEE.toString(), Currency.USDT_MATIC.toString()]

export const ETH_BASED_CURRENCIES = [Currency.ETH.toString(), ...ERC20_CURRENCIES]

export const MATIC_BASED_CURRENCIES = [Currency.MATIC.toString(), ...MATIC20_CURRENCIES]

export const BSC_BASED_CURRENCIES = [Currency.BSC.toString(), ...BEP20_CURRENCIES]

export const CELO_BASED_CURRENCIES = [Currency.CELO.toString(), Currency.CEUR.toString(), Currency.CUSD.toString()]
