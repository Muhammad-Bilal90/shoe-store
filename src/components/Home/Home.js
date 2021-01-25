import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "infinite-react-carousel";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../GlobalContext/GlobalContext";
import { useContext } from "react";

const useStyles = makeStyles({
    parentCard: {
        backgroundColor: "#F5F5F5",
        marginTop: 50 + "px",
        paddingTop: 2 + "rem",
        paddingLeft: 2 + "rem",
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
        borderRadius: "50px",
        padding: "2px 15px",
        marginTop: "1rem",
    },
    mainDiv: {
        height: "100vh",
    }
});


const Home = () => {
    const classes = useStyles();
    const { shoes } = useContext(GlobalContext);

    return (
        <div style={{ backgroundColor: "#F5F5F5" }}>
            <Slider className={classes.mainDiv} arrows={false} dots={true} autoplay={true} autoplaySpeed={3000}>
                {shoes.map((shoe, index) => (
                    <div key={index}>
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
                                        borderRadius: "50px",

                                        paddingLeft: "10px",
                                        fontWeight: "bolder",
                                        marginTop: 4 + "rem",
                                        marginBottom: 1 + "rem",
                                    }}
                                    variant="h4"
                                >
                                    {shoe.model}
                                </Typography>
                                <Typography className={classes.typet}>{shoe.type}</Typography>
                                <span
                                    style={{
                                        fontSize: "1.5rem",
                                        fontWeight: "bolder",
                                        marginLeft: "30px",
                                    }}
                                >
                                    {shoe.price}
                                </span>
                                <Typography style={{ marginTop: 1 + "rem" }}>
                                    {shoe.about}
                                </Typography>
                                <Link
                                    style={{ textDecoration: "none", color: "white" }}
                                    to={`products/${shoe.slug}`}
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
            </Slider>
        </div>
    );
};

export default Home;