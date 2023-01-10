import {
  Flex,
  Table,
  Checkbox,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { useMemo } from 'react'
import {
  ColumnInstance,
  HeaderGroup,
  Row,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
  UseTableColumnProps
} from 'react-table'

// Custom components
import Card from 'components/card/Card'
import Menu from 'components/menu/MainMenu'
import {} from 'components/charts/LineAreaChart'
import { TableProps } from '../variables/columnsData'
import { MdCheckCircle, MdCancel, MdOutlineError,MdAddCircle } from 'react-icons/md'
export default function CheckTable (props: TableProps) {
  const { columnsData, tableData } = props

  const columns = useMemo(() => columnsData, [columnsData])
  const data = useMemo(() => tableData, [tableData])

  const tableInstance = useTable(
    {
      columns,
      data
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState
  } = tableInstance
  initialState.pageSize = 11

  const textColor = useColorModeValue('secondaryGray.900', 'white')
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100')
  return (
    <Card
      flexDirection='column'
      w='100%'
      px='0px'
      overflowX={{ sm: 'scroll', lg: 'hidden' }}
    >
      <Flex px='25px' justify='space-between' align='center'>
        <Text
          color={textColor}
          fontSize='22px'
          fontWeight='700'
          lineHeight='100%'
        >
          Servicios Contratados
        </Text>
        <Menu />
      </Flex>
      <Table {...getTableProps()} variant='simple' color='gray.500' mb='24px'>
        <Thead>
          {headerGroups.map((headerGroup, index: number) => (
            <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map(
                (
                  column: ColumnInstance & UseTableColumnProps<{}>,
                  index: number
                ) => (
                  <Th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    pe='10px'
                    key={index}
                    borderColor={borderColor}
                  >
                    <Flex
                      justify='space-between'
                      align='center'
                      fontSize={{ sm: '10px', lg: '12px' }}
                      color='gray.400'
                    >
                      {column.render('Header')}
                    </Flex>
                  </Th>
                )
              )}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row: Row, index: number) => {
            prepareRow(row)
            return (
              <Tr {...row.getRowProps()} key={index}>
                {row.cells.map((cell, index: number) => {
                  let data
                  if (cell.column.Header === 'PLAN') {
                    data = (
                      <Flex align='center'>
                        <Text color={textColor} fontSize='sm' fontWeight='700'>
                          {cell.value}
                        </Text>
                      </Flex>
                    )
                  } else if (cell.column.Header === 'ESTADO') {
                    data = (
                      <Flex align='center'>
                        <Icon
                          w='24px'
                          h='24px'
                          me='5px'
                          color={
                            cell.value === 'ACTIVO'
                              ? 'green.500'
                              : cell.value === 'TERMINADO'
                              ? 'red.500'
                              : cell.value === 'SUSPENDIDO'
                              ? 'orange.500'
                              : null
                          }
                          as={
                            cell.value === 'ACTIVO'
                              ? MdCheckCircle
                              : cell.value === 'TERMINADO'
                              ? MdCancel
                              : cell.value === 'SUSPENDIDO'
                              ? MdOutlineError
                              : null
                          }
                        />
                        <Text
                          me='10px'
                          color={textColor}
                          fontSize='sm'
                          fontWeight='700'
                        >
                          {cell.value}
                        </Text>
                      </Flex>
                    )
                  } else if (cell.column.Header === 'CONTRATO') {
                    data = (
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                        {cell.value}
                      </Text>
                    )
                  } else if (cell.column.Header === 'CAPACIDAD DEL PLAN') {
                    data = (
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                        {cell.value}
                      </Text>
                    )
                  }
                  else if (cell.column.Header === 'CONSUMO DEL MES') {
                    data = (
                      <Text color={cell.value > 1300 ?  'red.500': textColor} fontSize='sm' fontWeight='700'>
                        {cell.value} GB {cell.value > 1300 ?  'Limitado': null}
                      </Text>
                    )
                  }
                  return (
                    <Td
                      {...cell.getCellProps()}
                      key={index}
                      fontSize={{ sm: '14px' }}
                      minW={{ sm: '150px', md: '200px', lg: 'auto' }}
                      borderColor='transparent'
                    >
                      {data}
                    </Td>
                  )
                })}

              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </Card>
  )
}
