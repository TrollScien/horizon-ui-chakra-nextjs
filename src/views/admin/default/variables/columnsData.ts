import { Column } from "react-table";
import tableDataCheck from "./tableDataCheck.json";

export const columnsDataCheck = [
  {
    Header: "CONTRATO",
    accessor: "quantity",
  },
  {
    Header: "PLAN",
    accessor: "name",
  },
  {
    Header: "ESTADO",
    accessor: "status",
  },
  {
    Header: "FECHA",
    accessor: "date",
  },
  {
    Header: "DETALLES",
    accessor: "details",
  },
];
export const columnsHomeServices = [
  {
    Header: "CONTRATO",
    accessor: "quantity",
  },
  {
    Header: "PLAN",
    accessor: "name",
  },
  {
    Header: "ESTADO",
    accessor: "status",
  },
  {
    Header: "FECHA",
    accessor: "date",
  },
  {
    Header: "DETALLES",
    accessor: "details",
  },
];
export const columnsDataUsage = [
  {
    Header: "CONTRATO",
    accessor: "quantity",
  },
  {
    Header: "PLAN",
    accessor: "name",
  },
  {
    Header: "ESTADO",
    accessor: "status",
  },
  {
    Header: "CAPACIDAD DEL PLAN",
    accessor: "cuota",
  },
  {
    Header: "CONSUMO DEL MES",
    accessor: "consumo",
  },
];
export const columnsDataComplex = [
  {
    Header: "DESCRIPCIÓN",
    accessor: "name",
  },
  {
    Header: "ESTADO",
    accessor: "status",
  },
  {
    Header: "FECHA",
    accessor: "date",
  }
];

export type ColumnData = Column[];

export type TableData = Column<{
  name: (string | boolean)[];
  date: string;
  progress: number;
  quantity?: number;
  status?: string;
  artworks?: string;
  rating?: number;
}>;

export type TableProps = {
  columnsData: ColumnData;
  tableData: TableData[];
};
