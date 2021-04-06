import { Interface } from '@ethersproject/abi'
import { ChainId } from '@pancakeswap-libs/sdk'
import V1_EXCHANGE_ABI from './v1_exchange.json'
import V1_FACTORY_ABI from './v1_factory.json'

const V1_FACTORY_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x5491C898De17Cc1753fA700583AcF1c5280A4A6F', // TODO
  [ChainId.BSCTESTNET]: '0x5491C898De17Cc1753fA700583AcF1c5280A4A6F'
}

const V1_FACTORY_INTERFACE = new Interface(V1_FACTORY_ABI)
const V1_EXCHANGE_INTERFACE = new Interface(V1_EXCHANGE_ABI)

export { V1_FACTORY_ADDRESSES, V1_FACTORY_INTERFACE, V1_FACTORY_ABI, V1_EXCHANGE_INTERFACE, V1_EXCHANGE_ABI }
