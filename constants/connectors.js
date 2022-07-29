// import { initializeConnector } from '@web3-react/core'
// import { MetaMask } from '@web3-react/metamask'

import SvgMathWallet from '../public/assets/icons/mathWallet.svg'
import SvgMetaMask from '../public/assets/icons/metaMask.svg'
import SvgSafePal from '../public/assets/icons/safePal.svg'
import SvgTokenPocket from '../public/assets/icons/tokenPacket.svg'
import SvgTrustWallet from '../public/assets/icons/trustWallet.svg'
import SvgWalletConnect from '../public/assets/icons/walletConnect.svg'

export const CONNECTOR_CARDS = [
  {
    title: 'Meta Mask',
    icon: SvgMetaMask,
    connection: null,// TODO: implement me!
  },
  {
    title: 'Wallet Connect',
    icon: SvgWalletConnect,
    connector: null, // TODO: implement me!
  },
  {
    title: 'Trust Wallet',
    icon: SvgTrustWallet,
    connector: null, // TODO: implement me!
  },
  {
    title: 'Math Wallet',
    icon: SvgMathWallet,
    connector: null, // TODO: implement me!
  },
  {
    title: 'SafePal',
    icon: SvgSafePal,
    connector: null, // TODO: implement me!
  },
  {
    title: 'Token Pocket',
    icon: SvgTokenPocket,
    connector: null, // TODO: implement me!
  },
]