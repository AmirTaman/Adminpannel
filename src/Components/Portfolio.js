import { Card, Button, Grid } from "bootstrap";
import classes from "./Portfolio.module.css";
function Portfolio() {
  return (
    <Grid.Row columns="2">
      <Grid.Column>
        <Card className={classes.card}>
          <div id="headerImage" className={classes.cover_container}>
            <img
              className={classes.cover_image}
              src="/cover.jpg"
              wrapped
              ui={false}
            />
          </div>

          <div>
            <a href="#" target="_blank">
              <Button floated="right"> check it out ;) </Button>{" "}
            </a>
          </div>

          <div className={classes.text}>
            <p>a sample page for getting daily data on wether</p>
          </div>
        </Card>
      </Grid.Column>
      <Grid.Column>
        <Card className={classes.card}>
          <div id="headerImage" className={classes.cover_container}>
            <img
              className={classes.cover_image}
              src="/cover.jpg"
              wrapped
              ui={false}
            />
          </div>

          <div>
            <a href="#" target="_blank">
              <Button floated="right"> check it out ;) </Button>{" "}
            </a>
          </div>

          <div className={classes.text}>
            <p>a sample page for getting daily data on wether</p>
          </div>
        </Card>
      </Grid.Column>
    </Grid.Row>
  );
}
export default Portfolio;
