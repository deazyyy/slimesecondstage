import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://slime.finance/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://slime.finance/swap-slimeeees#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://slime.finance/swap-slimeeees#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://slime.finance/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://slime.finance/pools',
  },
  {
    label: 'Launch Pools',
    icon: 'IfoIcon', 
    href: 'https://slime.finance/launch',
  
  },
  {
    label: "Automatic Launchpool Maker (Coming soon)",
    href: "https://docs.slime.finance/roadmap/automatic-launchpool-maker",
    icon: 'SunIcon', 
  },
   
 //  {
//    label: 'Roulette',
  //   icon: 'TicketIcon',
 //    href: '/roulette',
 //  },
  {
    label: 'Referrals',
    icon: 'GroupsIcon',
    href: 'https://slime.finance/slime-friends',
  },
  {
    label: "Certik Audit (In-Progress) ",
    href: "https://certik.org/projects/slime-finance",
    icon: 'CertikIcon',    
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
   // {
  //   label: 'Lottery',
   //  icon: 'TicketIcon',
   //   href: '/lottery',
  // },
   // {
  //   label: 'NFT',
   //  icon: 'NftIcon',
   // href: '/nft',
   // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: 'https://voting.pancakeswap.finance',
      // },
      {
        label: "Token",
        href: "https://pancakeswap.info/tokens/0x4fcfa6cc8914ab455b5b33df916d90bfe70b6ab1",
      },
      {
        label: "Blog",
        href: "https://medium.com/@SlimeFinance",

      },
      {
        label: "Docs",
        href: "http://docs.slime.finance/",
      },
      {
        label: "Github",
        href: "https://github.com/slime-fi/",
      },
      {
        label: "Treasury fund report",
        href: "https://slime.finance/reports/buybacks.html",
      },
    
      
     
    ],
  },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
   
]

export default config
 
