import { Box, SimpleGrid, Flex,useColorModeValue,Text } from '@chakra-ui/react'
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
////////////////////////////////////////////
import { useEffect, useState } from "react";
import {
    FormControl,
    FormLabel,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    Stack,
    Textarea,
    VStack,
    FormErrorMessage,
    FormHelperText,
    Select,
    Spacer,
    Button,
    useToast
} from "@chakra-ui/react";
import { BsPerson, BsTelephone } from "react-icons/bs";
// import ReactCanvasConfetti from "react-canvas-confetti";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";

const formasDePago = [
    //quizas es mejor llave value en origen y destino
    {
        metodo: "Transferencia Bancaria Nacional",
        bancoOrigen: [
            "Banesco",
            "Provincial",
            "Venezuela",
            "Mercantil",
            "BanCaribe",
            "100% Banco",
            "Banco del Tesoro",
            "Banco Nacional de Credito",
            "Banplus",
            "Bicentenario",
            "BFC",
            "BOD",
            "Caroni",
            "Exterior",
            "Sofitasa",
            "Venezolano de Credito",
            "Otro Nacional",
        ],
        bancoDestino: [
            "Banesco",
            "Provincial",
            "Banco Nacional de Credito (divisas)",
        ],
    },
    {
        metodo: "Transferencia Bancaria Internacional",
        bancoOrigen: ["Bank Of America"],
        bancoDestino: ["Bank Of America"],
    },
    {
        metodo: "Zelle",
        bancoOrigen: ["Zelle"],
        bancoDestino: ["Zelle"],
    },
    {
        metodo: "Binance USDT",
        bancoOrigen: ["Binance"],
        bancoDestino: ["Binance"],
    },
    {
        metodo: "PayPal",
        bancoOrigen: ["PayPal"],
        bancoDestino: ["PayPal"],
    },
    {
        metodo: "Pago movil",
        bancoOrigen: [
            "Banesco",
            "Provincial",
            "Venezuela",
            "Mercantil",
            "BanCaribe",
            "100% Banco",
            "Banco del Tesoro",
            "Banco Nacional de Credito",
            "Banplus",
            "Bicentenario",
            "BFC",
            "BOD",
            "Caroni",
            "Exterior",
            "Sofitasa",
            "Venezolano de Credito",
            "Otro Nacional",
        ],
        bancoDestino: ["Banesco", "Provincial"],
    },
];

const ContactSchema = Yup.object().shape({
    email: Yup.string()
        .email("Debe colocar un correo válido")
        .required("El correo es requerido"),
    telefono: Yup.string()
        .matches(/^(\+?\d{1,3})?\s?[0-9-]{10,12}$/, {
            message: "Teléfono inválido",
            excludeEmptyString: false,
        })
        .max(15, "El teléfono es incorrecto"),
    formaPago: Yup.string().required("La forma de pago es requerida"),
    bancoOrigen: Yup.string().required("El banco de origen es requerido"),
    bancoDestino: Yup.string().required("El banco de destino es requerido"),
    referencia: Yup.string().required("La referencia es requerida"),
    monto: Yup.number()
        .moreThan(0.0, "El monto debe ser superior a 0.00")
        .required("El monto es requerido"),
    fechaPago: Yup.string().required("La fecha del pago es requerida"),
    ciRIF: Yup.string()
        .min(5, "Debe tener más de 5 caracteres")
        .max(50, "Debe tener menos de 50 caracteres")
        .required("La cédula o RIF es requerido"),
    observaciones: Yup.string().max(
        255,
        "El mensaje no puede superar los 255 caracteres"
    ),
});

export default function DataTables () {
  const id = 1400
  const [data, setData] = useState([]),
  [formaPago, setformaPago] = useState(""),
  [bancoOrigen, setBancoOrigen] = useState([]),
  [bancoDestino, setBancoDestino] = useState([]);

  useEffect(() => {
    // captura de datos de la db o local
    setData(formasDePago);
  }, []);

  useEffect(() => {
    data.forEach((data) => {
        if (data.metodo === formaPago) {
            setBancoOrigen(data.bancoOrigen);
            setBancoDestino(data.bancoDestino);
        }
    });
  }, [formaPago, data]);
  const router = useRouter();
  const toast = useToast();



  // const id = router.query.id;
  let [report, setReport] = useState({});

  async function onSubmitForm(e: any) {
      e.preventDefault();

      report = {
          ...report,
          id_contrato: Number(id),
      };

      console.log(report);



  }
  const textColor = useColorModeValue('secondaryGray.900', 'white')
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100')
  return (
    <AdminLayout>
      <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
        <SimpleGrid
          mb='20px'
          columns={{ sm: 1, md: 2 }}
          spacing={{ base: '20px', xl: '20px' }}
        >
  
            <Card
              flexDirection='column'
              w='100%'
              px='10px'
              overflowX={{ sm: 'hidden', lg: 'hidden' }}
            >
              <Flex px='25px' justify='space-between' mb='20px' align='center'>
                <Text
                  color={textColor}
                  fontSize='22px'
                  fontWeight='700'
                  lineHeight='100%'
                >
                  Reporte de pago
                </Text>
                <Menu />
              </Flex>
              <Flex direction={{ base: 'column' }} justify='center'>

              <Box mb={{ base: '20px', '2xl': '20px' }} position='relative'>
                      <VStack>
                          <Stack
                              spacing={{ base: 4, md: 8, lg: 20 }}
                              direction={{ base: "column", md: "row" }}
                          >
                              <Formik
                                  initialValues={{
                                      contrato: "",
                                      email: "",
                                      telefono: "",
                                      formaPago: "",
                                      bancoOrigen: "",
                                      bancoDestino: "",
                                      referencia: "",
                                      monto: 0.0,
                                      fechaPago: "",
                                      ciRIF: "",
                                      observaciones: "",
                                  }}
                                  validationSchema={ContactSchema}
                                  onSubmit={(values, { setSubmitting }) => {
                                      setTimeout(() => {
                                          alert(JSON.stringify(values, null, 2));
                                          setSubmitting(false);
                                      }, 1000);
                                  }}
                              >
                                  {({ isSubmitting }) => (
                                      <Form
                                          onSubmit={onSubmitForm}
                                      >
                                          <VStack spacing={4} align={"left"}>
                                              <Stack
                                                  direction={["column", "column", "row"]}
                                                  spacing={4}
                                                  maxWidth={"550px"}
                                              >
                                                  <Field name="contrato" type="number">
                                                      {({ field, form }: {field: any,form: any}) => (
                                                          <FormControl
                                                              id="id_contrato"
                                                              // onChange={(e) => setReport({ ...report, id_contrato: Number(e.target.value) })}
                                                              isReadOnly
                                                              isRequired
                                                              isInvalid={
                                                                  form.errors.contrato && form.touched.contrato
                                                              }
                                                          >
                                                              <FormLabel color={textColor}>Contrato</FormLabel>
                                                              <InputGroup borderColor="#E0E1E7">
                                                                  <InputLeftElement pointerEvents="none">
                                                                      <BsPerson color="gray.800" />
                                                                  </InputLeftElement>
                                                                  <Input
                                                                      {...field}
                                                                      type="text"
                                                                      size="md"
                                                                      color={textColor}
                                                                      value={String(id)}
                                                                      variant="filled"
                                                                  />
                                                              </InputGroup>
                                                              <FormErrorMessage>
                                                                  {form.errors.contrato}
                                                              </FormErrorMessage>
                                                          </FormControl>
                                                      )}
                                                  </Field>
                                                  <Spacer />
                                                  <Field name="ciRIF" type="text">
                                                      {({ field, form }: {field: any,form: any}) => (
                                                          <FormControl
                                                              id="cedula_titular"
                                                    
                                                              isRequired
                                                              isInvalid={
                                                                  form.errors.ciRIF && form.touched.ciRIF
                                                              }
                                                          >
                                                              <FormLabel color={textColor}>Cédula/RIF</FormLabel>
                                                              <InputGroup borderColor="#E0E1E7">
                                                                  <InputLeftElement pointerEvents="none">
                                                                      <BsTelephone color="gray.800" />
                                                                  </InputLeftElement>
                                                                  <Input color={textColor} {...field} type="text" size="md" />
                                                              </InputGroup>
                                                              <FormHelperText>
                                                                  Introduzca su CI/RIF del titular de la Cuenta
                                                                  Bancaria
                                                              </FormHelperText>
                                                              <FormErrorMessage>
                                                                  {form.errors.ciRIF}
                                                              </FormErrorMessage>
                                                          </FormControl>
                                                      )}
                                                  </Field>

                                              </Stack>
                                              <Stack
                                                  direction={["column", "column", "row"]}
                                                  spacing={4}
                                                  maxWidth={"550px"}
                                              >

                                                  <Field name="formaPago" type="text">
                                                      {({ field, form }: {field: any,form: any}) => (
                                                          <FormControl
                                                              id="forma_pago"
                                                    
                                                              isRequired
                                                              isInvalid={
                                                                  form.errors.formaPago &&
                                                                  form.touched.formaPago
                                                              }
                                                          >
                                                              <FormLabel color={textColor}>Forma de pago</FormLabel>
                                                              <InputGroup borderColor="#E0E1E7">
                                                                  <Select
                                                                      {...field}
                                                                      borderColor="#E0E1E7"
                                                                      variant="outline"
                                                                      placeholder="Seleccione"
                                                                      color={textColor}
                                                                      size="md"
                                                                  >
                                                                      {data.map((data) => {
                                                                          return (
                                                                              <option
                                                                                  key={data.metodo}
                                                                                  value={data.metodo}
                                                                              >
                                                                                  {data.metodo}
                                                                              </option>
                                                                          );
                                                                      })}
                                                                  </Select>
                                                              </InputGroup>
                                                              <FormHelperText>
                                                                  Introduzca su forma de pago
                                                              </FormHelperText>
                                                              <FormErrorMessage>
                                                                  {form.errors.formaPago}
                                                              </FormErrorMessage>
                                                          </FormControl>
                                                      )}
                                                  </Field>
                                              </Stack>
                                              <Stack
                                                  direction={["column", "column", "row"]}
                                                  spacing={4}
                                                  maxWidth={"550px"}
                                              >
                                                  <Field name="bancoOrigen" type="text">
                                                      {({ field, form }: {field: any,form: any}) => (
                                                          <FormControl
                                                              id="origen"
                                                    
                                                              isRequired
                                                              isInvalid={
                                                                  form.errors.bancoOrigen &&
                                                                  form.touched.bancoOrigen
                                                              }
                                                          >
                                                              <FormLabel color={textColor}>Banco de origen</FormLabel>
                                                              <InputGroup borderColor="#E0E1E7">
                                                                  <Select
                                                                      {...field}
                                                                      borderColor="#E0E1E7"
                                                                      variant="outline"
                                                                      placeholder="Seleccione"
                                                                      size="md"
                                                                      color={textColor}
                                                                  >
                                                                      {bancoOrigen.length > 0 &&
                                                                          bancoOrigen.map((nombre, key) => {
                                                                              return (
                                                                                  <option key={key} value={nombre}>
                                                                                      {nombre}
                                                                                  </option>
                                                                              );
                                                                          })}
                                                                  </Select>
                                                              </InputGroup>
                                                              <FormErrorMessage>
                                                                  {form.errors.bancoOrigen}
                                                              </FormErrorMessage>
                                                          </FormControl>
                                                      )}
                                                  </Field>
                                                  <Spacer />
                                                  <Field name="bancoDestino" type="text">
                                                      {({ field, form }: {field: any,form: any}) => (
                                                          <FormControl
                                                              id="destino"
                                                    
                                                              isRequired
                                                              isInvalid={
                                                                  form.errors.bancoDestino &&
                                                                  form.touched.bancoDestino
                                                              }
                                                          >
                                                              <FormLabel color={textColor}>Banco de destino</FormLabel>
                                                              <InputGroup borderColor="#E0E1E7">
                                                                  <Select
                                                                      color={textColor}
                                                                      {...field}
                                                                      borderColor="#E0E1E7"
                                                                      variant="outline"
                                                                      placeholder="Seleccione"
                                                                      size="md"
                                                                  >
                                                                      {bancoDestino.length > 0 &&
                                                                          bancoDestino.map((nombre, key) => {
                                                                              return (
                                                                                  <option key={key} value={nombre}>
                                                                                      {nombre}
                                                                                  </option>
                                                                              );
                                                                          })}
                                                                  </Select>
                                                              </InputGroup>
                                                              <FormErrorMessage>
                                                                  {form.errors.bancoDestino}
                                                              </FormErrorMessage>
                                                          </FormControl>
                                                      )}
                                                  </Field>
                                              </Stack>
                                              <Stack
                                                  direction={["column", "column", "row"]}
                                                  spacing={4}
                                                  maxWidth={"550px"}
                                              >
                                                  <Field name="referencia" type="text">
                                                      {({ field, form }: {field: any,form: any}) => (
                                                          <FormControl
                                                              id="referencia"
                                                      
                                                              isRequired
                                                              isInvalid={
                                                                  form.errors.referencia &&
                                                                  form.touched.referencia
                                                              }
                                                          >
                                                              <FormLabel color={textColor}>Referencia</FormLabel>
                                                              <InputGroup borderColor="#E0E1E7">
                                                                  <InputLeftElement pointerEvents="none">
                                                                      <BsTelephone color="gray.800" />
                                                                  </InputLeftElement>
                                                                  <Input color={textColor} {...field} type="text" size="md" />
                                                              </InputGroup>
                                                              <FormHelperText>
                                                                  Introduzca la referencia de la operación
                                                              </FormHelperText>
                                                              <FormErrorMessage>
                                                                  {form.errors.referencia}
                                                              </FormErrorMessage>
                                                          </FormControl>
                                                      )}
                                                  </Field>
                                                  <Spacer />
                                                  <Field name="monto" type="number">
                                                      {({ field, form }: {field: any,form: any}) => (
                                                          <FormControl
                                                              id="monto"
                                                        
                                                              isRequired
                                                              isInvalid={
                                                                  form.errors.monto && form.touched.monto
                                                              }
                                                          >
                                                              <FormLabel color={textColor}>Monto</FormLabel>
                                                              <InputGroup borderColor="#E0E1E7">
                                                                  {/* <NumberInput defaultValue={0} precision={2} step={0.01} borderColor="#E0E1E7">
                                                                                  <NumberInputField {...field} />
                                                                                  <NumberInputStepper>
                                                                                      <NumberIncrementStepper />
                                                                                      <NumberDecrementStepper />
                                                                                  </NumberInputStepper>
                                                                              </NumberInput> */}
                                                                  <Input color={textColor} {...field} type="number" size="md" />
                                                              </InputGroup>
                                                              <FormHelperText>
                                                                  Use punto para decimales
                                                              </FormHelperText>
                                                              <FormErrorMessage>
                                                                  {form.errors.monto}
                                                              </FormErrorMessage>
                                                          </FormControl>
                                                      )}
                                                  </Field>
                                              </Stack>
                                              <Stack
                                                  direction={["column", "column", "row"]}
                                                  spacing={4}
                                                  maxWidth={"550px"}
                                              >
                                                  <Field name="telefono" type="text">
                                                      {({ field, form }: {field: any,form: any}) => (
                                                          <FormControl
                                                              id="telefono"
                                                          
                                                              isInvalid={
                                                                  form.errors.telefono && form.touched.telefono
                                                              }
                                                          >
                                                              <FormLabel color={textColor}>Teléfono</FormLabel>
                                                              <InputGroup borderColor="#E0E1E7">
                                                                  <InputLeftElement pointerEvents="none">
                                                                      <BsTelephone color="gray.800" />
                                                                  </InputLeftElement>
                                                                  <Input color={textColor} {...field} type="text" size="md" />
                                                              </InputGroup>
                                                              <FormHelperText>
                                                                  04121234567 ó +58 04121234567
                                                              </FormHelperText>
                                                              <FormErrorMessage>
                                                                  {form.errors.telefono}
                                                              </FormErrorMessage>
                                                          </FormControl>
                                                      )}
                                                  </Field>
                                                  <Spacer />
                                                  <Field name="fechaPago" type="date">
                                                      {({ field, form }: {field: any,form: any}) => (
                                                          <FormControl
                                                              id="fecha_pago"
                                                      
                                                              isInvalid={
                                                                  form.errors.fechaPago &&
                                                                  form.touched.fechaPago
                                                              }
                                                          >
                                                              <FormLabel color={textColor}>Fecha de pago</FormLabel>
                                                              <InputGroup borderColor="#E0E1E7">
                                                                  <Input
                                                                      color={textColor}
                                                                      {...field}
                                                                      type="date"
                                                                      size="md"
                                                                      maxWidth={"255px"}
                                                                  />
                                                              </InputGroup>
                                                              <FormErrorMessage>
                                                                  {form.errors.fechaPago}
                                                              </FormErrorMessage>
                                                          </FormControl>
                                                      )}
                                                  </Field>
                                              </Stack>

                                              <Field name="observaciones" type="text">
                                                  {({ field, form }: {field: any,form: any}) => (
                                                      <FormControl
                                                          id="observaciones"
                                                
                                                          isInvalid={
                                                              form.errors.observaciones &&
                                                              form.touched.observaciones
                                                          }
                                                      >
                                                          <FormLabel color={textColor}>Observaciones</FormLabel>
                                                          <Textarea
                                                              color={textColor}
                                                              {...field}
                                                              borderColor="gray.300"
                                                              _hover={{
                                                                  borderRadius: "gray.300",
                                                              }}
                                                          />
                                                          <FormErrorMessage>
                                                              {form.errors.observaciones}
                                                          </FormErrorMessage>
                                                      </FormControl>
                                                  )}
                                              </Field>

                                              <FormControl id="button" float="right" >
                                                  <Button type="submit" isLoading={isSubmitting} loadingText="Registrando...">Registrar</Button>
                                              </FormControl>
                                          </VStack>
                                      </Form>
                                  )}
                              </Formik>
                          </Stack>
                      </VStack>
              </Box>
              </Flex>

            </Card>
            <ComplexTable
              columnsData={columnsDataComplex}
              tableData={(tableDataComplex as unknown) as TableData[]}
            />

        </SimpleGrid>
      </Box>
    </AdminLayout>
  )
}
