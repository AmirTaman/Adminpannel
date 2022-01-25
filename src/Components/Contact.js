import React from "react";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Card, Form, Grid, TextArea, Button, Icon } from "semantic-ui-react";
import classes from "./Contacts.module.css";
const MySwal = withReactContent(Swal);
function showAlert() {
  MySwal.fire({
    title: <p>Your email is sent, I'll be in touch</p>,
    footer: "Who uses email , use some of them social media accounts",
    confirmButtonColor: "#3085d6",
    confirmButtonText: "A'ight",
    type: "success",
    icon: "success",
  });
}
const Contact = () => {
  return (
    <Grid.Row columns={1}>
      <Grid.Column>
        <Card className={classes.card}>
          <Card.Content>
            <Form>
              <Grid>
                <Grid.Row columns="2">
                  <Grid.Column span="12">
                    <div id="name">
                      <label className={classes.label}>
                        Your Name (or your companys name):{" "}
                      </label>
                      <div className={classes.boxshadow}>
                        <input
                          placeholder="Branden Greenbutton OR CTO of RayShare ...."
                          className={classes.input}
                        />
                      </div>
                    </div>
                    <div id="email">
                      <label className={classes.label}>Email: </label>
                      <div className={classes.boxshadow}>
                        <input
                          placeholder="jeffbazos@richpeople.com"
                          className={classes.input}
                        />
                      </div>
                    </div>
                    <div id="subject">
                      <label className={classes.label}>Subject: </label>
                      <div className={classes.boxshadow}>
                        <input
                          placeholder="let's talk biznes"
                          className={classes.input}
                        />
                      </div>
                    </div>
                  </Grid.Column>
                </Grid.Row>
                <br />
                <Grid.Row>
                  <Grid.Column span="12">
                    <div id="massage">
                      <label className={classes.label}>
                        Tell me what u want:{" "}
                      </label>
                      <div className={classes.boxshadow}>
                        <TextArea
                          placeholder="ye u r awsome , i wanna hier u RN!!!"
                          className={classes.input}
                          rows="5"
                        />
                      </div>
                    </div>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <div id="button">
                      <Button
                        animated="vertical"
                        floated="right"
                        className={classes.button}
                        onClick={showAlert}
                        size="huge"
                      >
                        <Button.Content hidden>Send</Button.Content>
                        <Button.Content visible>
                          <Icon className={classes.icon} name="mail" />
                        </Button.Content>
                      </Button>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Form>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid.Row>
  );
};
export default Contact;
