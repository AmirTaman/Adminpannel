import { Card, Grid } from "bootstrap";
import Skill from "./Skill";
import classes from "./Skills.module.css";
function Skills() {
  return (
    <Grid.Row columns="1">
      <Grid.Column>
        <Card className={classes.card}>
          <Card.Content>
            <Grid>
              <Grid.Row columns="2" style={{ "margin-left": "0px" }}>
                <Grid.Column>
                  <Skill
                    text="English Language Skills: "
                    percent="82"
                    color="teal"
                  />
                </Grid.Column>
                <Grid.Column>
                  <Skill
                    text="Communication Skills: "
                    percent="94"
                    color="teal"
                  />
                </Grid.Column>
                <Grid.Column>
                  <Skill
                    text="Russian Language Skills:"
                    percent="23"
                    color="teal"
                  />
                </Grid.Column>
                <Grid.Column>
                  <Skill text="Creating Content: " percent="95" color="blue" />
                </Grid.Column>
                <Grid.Column>
                  <Skill text="JS Skills: " percent="74" color="red" />
                </Grid.Column>
                <Grid.Column>
                  <Skill text="React Skills: " percent="77" color="red" />
                </Grid.Column>
                <Grid.Column>
                  <Skill
                    text="Gaming Strategy (MOBA): "
                    percent="89"
                    color="orange"
                  />
                </Grid.Column>
                <Grid.Column>
                  <Skill text="Game theory: " percent="72" color="orange" />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid.Row>
  );
}

export default Skills;

{
  /* <div>
<label>English Skills : </label>
<Progress percent={78} active color="teal" size="small"></Progress>
</div>
<div>
<label>English Skills : </label>
<Progress percent={78} active color="teal" size="small"></Progress>
</div>
<div>
<label>English Skills : </label>
<Progress percent={78} active color="teal" size="small"></Progress>
</div>
<div>
<label>English Skills : </label>
<Progress percent={78} active color="teal" size="small"></Progress>
</div> */
}
