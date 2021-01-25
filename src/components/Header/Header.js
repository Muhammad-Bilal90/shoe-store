import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function Header() {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        forAppBar: {
            backgroundColor: "#C70039",
        },

        title: {
            flexGrow: 1,
            fontWeight: "bolder",
        },
        noBtn: {
            textTransform: "capitalize",
            marginRight: "15px",
        },
        ncBtn: {
            display: "flex",
            alignItems: "center",
        },
        cartValue: {
            marginLeft: '10px',
            marginRight: '10px',
            fontSize: "15px"
        }
    }));

    const classes = useStyles();

    return (

        <div className={classes.root}>
            <AppBar className={classes.forAppBar} position="static">
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                            Shoe Store
                        </Link>
                    </Typography>
                    <Link style={{ textDecoration: "none", color: "white" }} to="/">
                        <Button className={classes.noBtn} color="inherit">
                            Home
                    </Button>
                    </Link>

                    <Link
                        style={{ textDecoration: "none", color: "white" }}
                        to="/Products"
                    >
                        <Button className={classes.noBtn} color="inherit">
                            Products
                    </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;