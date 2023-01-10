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
import { MdMailOutline, MdPhone,MdPersonOutline,MdSubject } from "react-icons/md";
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
          columns={{ sm: 1, md: 3 }}
          spacing={{ base: '20px', xl: '20px' }}
        >
            <Spacer />
            <Card
              flexDirection='column'
              w='100%'
              px='20px'
              overflowX={{ sm: 'hidden', lg: 'hidden' }}
            >
              <Flex px='25px' justify='space-between' mb='20px' align='center'>
                <Text
                  color={textColor}
                  fontSize='22px'
                  fontWeight='700'
                  lineHeight='100%'
                >
                  Reporte de incidencia
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
                                                                    <MdPersonOutline color="gray.800" />
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
                                                <Field name="correo" type="text">
                                                    {({ field, form }: {field: any,form: any}) => (
                                                        <FormControl
                                                            id="correo"
                                                        
                                                            isInvalid={
                                                                form.errors.correo && form.touched.correo
                                                            }
                                                        >
                                                            <FormLabel color={textColor}>Correo</FormLabel>
                                                            <InputGroup borderColor="#E0E1E7">
                                                                <InputLeftElement pointerEvents="none">
                                                                    <MdMailOutline color="gray.800" />
                                                                </InputLeftElement>
                                                                <Input color={textColor} {...field} type="text" size="md" />
                                                            </InputGroup>
                                                            <FormHelperText>
                                                                Introduzca el correo donde quiere ser contactado
                                                            </FormHelperText>
                                                            <FormErrorMessage>
                                                                {form.errors.telefono}
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
                                              <Field name="titulo" type="text">
                                                    {({ field, form }: {field: any,form: any}) => (
                                                        <FormControl
                                                            id="titulo"
                                                    
                                                            isRequired
                                                            isInvalid={
                                                                form.errors.titulo && form.touched.titulo
                                                            }
                                                        >
                                                            <FormLabel color={textColor}>Asunto</FormLabel>
                                                            <InputGroup borderColor="#E0E1E7">
                                                                <InputLeftElement pointerEvents="none">
                                                                    <MdSubject color="gray.800" />
                                                                </InputLeftElement>
                                                                <Input color={textColor} {...field} type="text" size="md" />
                                                            </InputGroup>
                                                            <FormHelperText>
                                                                Introduzca una breve descripción de la incidencia
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
                                                                    <MdPhone color="gray.800" />
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
                                                     <Field name="fechaIncidencia" type="date">
                                                    {({ field, form }: {field: any,form: any}) => (
                                                        <FormControl
                                                            id="fecha_incidencia"
                                                    
                                                            isInvalid={
                                                                form.errors.fechaIncidencia &&
                                                                form.touched.fechaIncidencia
                                                            }
                                                        >
                                                            <FormLabel color={textColor}>Fecha de incidencia</FormLabel>
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
                                                                {form.errors.fechaIncidencia}
                                                            </FormErrorMessage>
                                                        </FormControl>
                                                    )}
                                                </Field>
                                              
                                            </Stack>
                                            <Field name="descripcion" type="text">
                                                {({ field, form }: {field: any,form: any}) => (
                                                    <FormControl
                                                        id="descripcion"
                                                
                                                        isInvalid={
                                                            form.errors.descripcion &&
                                                            form.touched.descripcion
                                                        }
                                                    >
                                                        <FormLabel color={textColor}>Descripción</FormLabel>
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
            <Spacer />
        </SimpleGrid>
      </Box>
    </AdminLayout>
  )
}
