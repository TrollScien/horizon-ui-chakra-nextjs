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
import NFTMarketplace from 'pages/admin/pagos'
import Profile from 'pages/admin/perfil'
import DataTables from 'pages/admin/uso-datos'
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
    path: '/pagos',
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
    path: '/uso-datos',
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    component: DataTables
  },
  {
    name: 'Soporte',
    layout: '/admin',
    path: '/soporte',
    icon: <Icon as={MdHeadsetMic} width='20px' height='20px' color='inherit' />,
    component: SignInCentered
  },
  {
    name: 'Test de velocidad',
    layout: '/admin',
    path: '/speedtest',
    icon: <Icon as={MdSpeed} width='20px' height='20px' color='inherit' />,
    component: RTL
  }
]

export default routes
