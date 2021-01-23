import { Button, Grid, makeStyles, Paper } from "@material-ui/core";
import clsx from "clsx";
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

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",

    flexDirection: "column",
  },
  fixedHeight: {
    height: 500,
  },
}));

export default function Categorias() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper);
  return (
    <Dashboard>
      <Grid item xs={12} md={8} lg={12}>
        <Paper className={fixedHeightPaper}>
          <MaterialDatatable
            title={"ACME Employee list"}
            data={data}
            columns={columns}
            options={options}
          />
        </Paper>
      </Grid>
    </Dashboard>
  );
}
