import { Icon } from '@chakra-ui/react'
import {
  MdBarChart,
  MdPaid,
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
    name: 'Reportar pago',
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
    name: 'Consulta de saldo',
    layout: '/admin',
    icon: <Icon as={MdPaid} width='20px' height='20px' color='inherit' />,
    path: '/data-tables',
    component: DataTables
  },
  {
    name: 'Uso de datos',
    layout: '/admin',
    path: '/profile',
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
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
