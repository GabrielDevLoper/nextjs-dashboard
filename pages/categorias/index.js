import { Button } from "@material-ui/core";
import MaterialDatatable from "material-datatable";
import Dashboard from "../../src/components/DashBoard/dashboard";

const columns = [
  {
    name: "Name",
    field: "name",
    options: {
      width: 50,
      headerNoWrap: true,
      filter: true,
      sort: true,
    },
  },
  {
    name: "Title",
    field: "title",
    options: {
      width: 50,
      headerNoWrap: true,
      filter: true,
      sort: true,
    },
  },
  {
    name: "Location",
    field: "location",
    options: {
      width: 50,
      headerNoWrap: true,
      filter: true,
      sort: true,
    },
  },
  {
    name: "Age",
    field: "age",
    options: {
      width: 50,
      headerNoWrap: true,
      filter: true,
      sort: true,
    },
  },
  {
    name: "Salary",
    field: "salary",
    options: {
      width: 50,
      headerNoWrap: true,
      filter: true,
      sort: true,
    },
  },
];

const data = [
  {
    name: "Name 1",
    title: "Title 1",
    location: "Location 1",
    age: 30,
    salary: 10,
  },
  {
    name: "Name 2",
    title: "Title 2",
    location: "Location 2",
    age: 31,
    salary: 11,
  },
  {
    name: "Name 1",
    title: "Title 1",
    location: "Location 1",
    age: 30,
    salary: 10,
  },
  {
    name: "Name 2",
    title: "Title 2",
    location: "Location 2",
    age: 31,
    salary: 11,
  },
  {
    name: "Name 1",
    title: "Title 1",
    location: "Location 1",
    age: 30,
    salary: 10,
  },
];

const options = {
  filterType: "dropdown",
  responsive: "scroll",
  filter: true,
  selectableRows: true,
  usePaperPlaceholder: false,
  filterType: "multiselect",
  rowsPerPage: 10,
  componentWillReceiveProps: true,
  page: 0,
  sortColumnIndex: 2,
  sortColumnDirection: "desc",
  textLabels: {
    body: {
      noMatch: "Desculpa, não foi encontrado nenhum registro",
      toolTip: "Sort",
    },
    pagination: {
      next: "Next Page",
      previous: "Previous Page",
      rowsPerPage: "Rows per page:",
      displayRows: "of",
    },
    toolbar: {
      search: "Search",
      downloadCsv: "Download CSV",
      print: "Print",
      viewColumns: "View Columns",
      filterTable: "Filter Table",
    },
    filter: {
      all: "All",
      title: "FILTERS",
      reset: "RESET",
    },
    viewColumns: {
      title: "Show Columns",
      titleAria: "Show/Hide Table Columns",
    },
    selectedRows: {
      text: "rows(s) selected",
      delete: "Delete",
      deleteAria: "Delete Selected Rows",
    },
  },

  onRowClick: (rowObject, rowMeta) => {},
};

export default function Categorias() {
  return (
    <Dashboard>
      <Button>Cadastrar</Button>
      <MaterialDatatable
        title={"ACME Employee list"}
        data={data}
        columns={columns}
        options={options}
      />
    </Dashboard>
  );
}
