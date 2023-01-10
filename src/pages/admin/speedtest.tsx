import { Box, SimpleGrid, Flex,useColorModeValue,Text, AspectRatio } from '@chakra-ui/react'
import DevelopmentTable from 'views/admin/dataTables/components/DevelopmentTable'
import CheckTable from 'views/admin/dataTables/components/CheckTable'
import ColumnsTable from 'views/admin/dataTables/components/ColumnsTable'
import ComplexTable from 'views/admin/dataTables/components/ComplexTable'
import {
  columnsDataDevelopment,
  columnsDataCheck,
  columnsDataColumns,
  columnsDataComplex
} from 'views/admin/dataTables/variables/columnsData'
import tableDataDevelopment from 'views/admin/dataTables/variables/tableDataDevelopment.json'
import tableDataCheck from 'views/admin/dataTables/variables/tableDataCheck.json'
import tableDataColumns from 'views/admin/dataTables/variables/tableDataColumns.json'
import tableDataComplex from 'views/admin/dataTables/variables/tableDataComplex.json'
import React from 'react'
import AdminLayout from 'layouts/admin'
import { TableData } from 'views/admin/default/variables/columnsData'
import Card from 'components/card/Card'
import Menu from 'components/menu/MainMenu'

export default function DataTables () {
  const textColor = useColorModeValue('secondaryGray.900', 'white')
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100')

  return (
    <AdminLayout>
      <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
        <SimpleGrid
          mb='20px'
          columns={{ sm: 1, md: 1 }}
          spacing={{ base: '20px', xl: '20px' }}
        >
  
            <Card
              flexDirection='column'
              w='100%'
              px='10px'
              overflowX={{ sm: 'hidden', lg: 'hidden' }}
            >
                <AspectRatio ratio={16 / 9}>
                    <iframe src="https://comunicacionesgalup.speedtestcustom.com"></iframe>
                </AspectRatio>
            </Card>
        </SimpleGrid>
      </Box>
    </AdminLayout>
  )
}
