import React from "react";
import classes from "./About.module.css";
import { Card, Image, Grid } from "bootstrap";

import SocialMedia from "./SocialMedia";

const About = () => {
  // const social = [
  //   <SocialMedia icon="instagram" url="#" />,
  //   <SocialMedia icon="linkedin" url="#" />,
  //   <SocialMedia icon="github" url="#" />,
  //   <SocialMedia icon="twitter" url="#" />,
  // ];

  // const social = [
  //   {
  //     icon="instagram",
  //     url="#"
  //   },
  //   {
  //     icon="linkedin",
  //     url="#"
  //   },
  //   {
  //     icon="github",
  //     url="#"
  //   },
  //   {
  //     icon="twitter",
  //     url="#"
  //   }
  // ]

  return (
    <Grid.Row columns="1">
      <Grid.Column>
        <Card className={classes.card}>
          <div id="headerImage" className={classes.cover_container}>
            {/* <img
              className={classes.cover_image}
              src="/cover.jpg"
              wrapped
              ui={false}
            /> */}
          </div>
          <Card.Content>
            <div id="avatar" className={classes.avatar_countainer}>
              <div className={classes.avatar_body}>
                <Image
                  className={classes.avatar_image}
                  src="/avatar.jpg"
                  avatar
                />
              </div>
            </div>
            <div
              id="socialMediaIcons"
              className={classes.social_grid_container}
            >
              <Grid className={classes.social_grid}>
                <Grid.Row columns={4}>
                  <Grid.Column>
                    <SocialMedia
                      icon="instagram"
                      url="#"
                      color="45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%"
                    />
                  </Grid.Column>

                  <Grid.Column>
                    <SocialMedia
                      icon="linkedin"
                      url="#"
                      color="#0a66c2 , #0a66c2"
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <SocialMedia
                      icon="github"
                      url="#"
                      color="#292929 , #292929"
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <SocialMedia
                      icon="twitter"
                      url="#"
                      color="#1d9bf0 ,#1d9bf0"
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>

            <Card.Header>Amir Reza Tamandani</Card.Header>
            <Card.Meta>
              <span className="date">Born in 1997/9/7</span>
            </Card.Meta>
            <Card.Description>
              <p className={classes.text}>
                the idea of autography is redundent as you cant really know
                somone based on what they say about them selves ... so allow me
                to tell you about my self via others perspective (atleast those
                whome that came to me with honesty){" "}
              </p>
              <p className={classes.text}>
                my strong suit is my creativity and how i observe problems !
              </p>
              <p className={classes.text}>
                due to being lazy , i always rather to find easiest ways !
              </p>
            </Card.Description>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid.Row>
  );
};

export default About;
