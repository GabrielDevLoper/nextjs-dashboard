import {
  Container,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import Dashboard from "../../src/components/DashBoard/dashboard";
import ExampleForm from "../../src/components/ExampleForm";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

function Usuarios() {
  const classes = useStyles();

  return (
    <Dashboard>
      <Paper>
        <Container className={classes.container} maxWidth="lg">
          <ExampleForm />
        </Container>
      </Paper>
    </Dashboard>
  );
}

export default Usuarios;
