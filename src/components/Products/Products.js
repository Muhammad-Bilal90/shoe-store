import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext/GlobalContext";

const useStyles = makeStyles({
  parentCard: {
    backgroundColor: "#F5F5F5",
    marginBottom: 50 + "px",
    padding: 2 + "rem",
  },
  imgShoe: {
    width: 90 + "%",
    height: 100 + "%",
  },
  typet: {
    color: "#6A6A6B",
    fontSize: 1.5 + "rem",
    display: "inline",
  },
  readBtn: {
    backgroundColor: "#C70039",
    color: "white",

    padding: "2px 15px",
    marginTop: "1rem",
  },
  main: {
    boxShadow: "0px 0px 15px -3px rgba(0,0,0,0.75)",
    margin: "0px 70px",
  },
  heading: {
    display: "inline-block",
  },
});

function Products() {
  const {shoes} = useContext(GlobalContext);
  const classes = useStyles();
  return (
    <div>
      <h1
        className={classes.heading}
        style={{
          textAlign: "center",
          margin: "55px ",
          marginLeft: "45%",
          borderBottom: "10px solid #C70039",
          padding: "10px",
        }}
      >
        OUR PRODUCTS
        </h1>
      {shoes.map((shoe, index) => (
        <div key={index} className={classes.main} data-aos="fade-up">
          <Grid
            className={classes.parentCard}
            container
            direction="row"
            justify="space-between"
          >
            <Grid item xs={12} md={5}>
              <Typography
                style={{
                  borderLeft: "8px solid #C70039",

                  paddingLeft: "10px",
                  fontWeight: "bolder",
                  marginTop: 1 + "rem",
                  marginBottom: 1 + "rem",
                }}
                variant="h4"
              >
                {shoe.model}
              </Typography>
              <Typography className={classes.typet}>{shoe.type}</Typography>
              <span
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "bolder",
                  marginLeft: "30px",
                }}
              >
                {shoe.price}
              </span>
              <Typography variant="body1" style={{ marginTop: 1 + "rem" }}>
                {shoe.about}
              </Typography>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={`${shoe.slug}`}
              >
                <Button className={classes.readBtn}>Read More</Button>
              </Link>
            </Grid>

            <Grid xs={12} md={5} item>
              <img
                className={classes.imgShoe}
                src={shoe.image}
                alt={shoe.model}
              ></img>
            </Grid>
          </Grid>
        </div>
      ))}
    </div>
  );
}

export default Products;  