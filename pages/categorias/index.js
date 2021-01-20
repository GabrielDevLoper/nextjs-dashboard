import MaterialDatatable from "material-datatable";
import Dashboard from "../../src/components/DashBoard/dashboard";

const columns = [
  { name: "Name", field: "name" },
  { name: "Title", field: "title" },
  { name: "Location", field: "location" },
  { name: "Age", field: "age" },
  { name: "Salary", field: "salary" },
  {
    name: "Name and Title Custom Column",
    field: "salary",
    options: {
      noHeaderWrap: true,
      width: 200,
      customBodyRender: (value, tableMeta, updateValue) => {
        return `${value.name} (${value.title})`;
      },
    },
  },
  {
    name: "Custom Render",
    field: "salary2",
    options: {
      noHeaderWrap: true,
      width: 200,
      customBodyRender: (value, tableMeta, updateValue) => {
        return <h4>{value.name}</h4>;
      },
      customValue: (value, tableMeta, updateValue) => value.name,
      customSortValue: (value, tableMeta, updateValue) => value.name,
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
];

const options = {
  filterType: "dropdown",
  responsive: "scroll",
};

export default function Categorias() {
  return (
    <Dashboard>
      <MaterialDatatable
        title={"ACME Employee list"}
        data={data}
        columns={columns}
        options={options}
      />
    </Dashboard>
  );
}
