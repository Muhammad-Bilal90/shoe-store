import React from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import { GlobalContext } from "../../GlobalContext/GlobalContext";
import { useContext } from "react";

const useStyle = makeStyles({
  imgShoe: {
    width: "90%",
    height: "100%",
  },
})
const ProductDetails = () => {
  const { shoes } = useContext(GlobalContext);
  // console.log(shoes, "shoes")

  const classes = useStyle();

  const { slug } = useParams();



  const shoeData = shoes.filter((shoe) => shoe.slug === slug)
  // console.log(shoeData, "shoe Data")
  // console.log(slug, "slug")


  return (
    <>
      {shoeData.map((shoe, index) => (
        <div key={index} style={{ padding: "3rem" }}>
          <Typography
            variant="h3"
            style={{ borderLeft: "8px solid #C70039", paddingLeft: "1rem" }}
          >
            {shoe.model}
          </Typography>
          <br />
          <Typography variant="h6">Price : {shoe.price}</Typography>
          <Typography>{shoe.about}</Typography>
          <br />
          <br />
          <Typography variant="h6">Benefits:</Typography>
          {shoe.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
          <br />
          <Typography variant="h6">Details:</Typography>
          {shoe.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
          <br />
          <Grid xs={12} md={5} item>
            <img
              className={classes.imgShoe}
              src={shoe.image}
              alt={shoe.model}
            ></img>
          </Grid>
        </div>
      ))}
    </>
  );
};

export default ProductDetails;