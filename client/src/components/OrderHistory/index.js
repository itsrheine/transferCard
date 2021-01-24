import React from "react";

import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER } from "../../utils/queries";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


function OrderHistory() {
    const { data } = useQuery(QUERY_USER);
    let user;

    if (data) {
        user = data.user;
        console.log(user);
    }

    const classes = useStyles();

    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={4}>
                    <Paper className={classes.paper}><b>Date Purchased</b></Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}><b>Ticket</b></Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}><b>Price</b></Paper>
                </Grid>
            </React.Fragment>
        );
    }

    function MappingRow() {
        return (

            <>
                {user ? (
                    <>
                        {user.orders.map((order) => (

                            <React.Fragment key={order._id}>

                                <Grid item xs={4} key={order._id}>
                                    <Paper className={classes.paper}>{new Date(parseInt(order.purchaseDate)).toLocaleDateString()}</Paper>
                                </Grid>
                                {order.products.map(({ name }, index) => (
                                    <Grid item xs={4} key={index}>
                                        <Paper className={classes.paper}>{name}</Paper>
                                    </Grid>
                                ))}
                                {order.products.map(({ price }, index) => (
                                    <Grid item xs={4} key={index}>
                                        <Paper className={classes.paper}>${price}</Paper>
                                    </Grid>
                                ))}

                            </React.Fragment>
                        ))}
                    </>
                ) : null}
            </>

        )
    };



    return (

        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid container item xs={12}>
                    <FormRow />
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid container item xs={12}>
                    <MappingRow />
                </Grid>
            </Grid>
        </div>

    )
};

export default OrderHistory;
