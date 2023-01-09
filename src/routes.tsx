import { Icon } from '@chakra-ui/react'
import {
  MdBarChart,
  MdOutlinePersonOutline,
  MdHome,
  MdHeadsetMic,
  MdPayment,
  MdSpeed
} from 'react-icons/md'

// Admin Imports
import MainDashboard from 'pages/admin/default'
import NFTMarketplace from 'pages/admin/nft-marketplace'
import Profile from 'pages/admin/profile'
import DataTables from 'pages/admin/data-tables'
import RTL from 'pages/rtl/rtl-default'

// Auth Imports
import SignInCentered from 'pages/auth/sign-in'
import { IRoute } from 'types/navigation'

const routes: IRoute[] = [
  {
    name: 'Inicio',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard
  },
  {
    name: 'Pagos',
    layout: '/admin',
    path: '/nft-marketplace',
    icon: (
      <Icon
        as={MdPayment}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: NFTMarketplace,
    secondary: true
  },
  {
    name: 'Uso de datos',
    layout: '/admin',
    path: '/data-tables',
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    component: Profile
  },
  {
    name: 'Perfil',
    layout: '/admin',
    path: '/profile',
    icon: <Icon as={MdOutlinePersonOutline} width='20px' height='20px' color='inherit' />,
    component: Profile
  },
  {
    name: 'Soporte',
    layout: '/auth',
    path: '/sign-in',
    icon: <Icon as={MdHeadsetMic} width='20px' height='20px' color='inherit' />,
    component: SignInCentered
  },
  {
    name: 'Test de velocidad',
    layout: '/rtl',
    path: '/rtl-default',
    icon: <Icon as={MdSpeed} width='20px' height='20px' color='inherit' />,
    component: RTL
  }
]

export default routes
