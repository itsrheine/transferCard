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
                    <Paper className={classes.paper}>Date Purchased</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>Ticket</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>Price</Paper>
                </Grid>
            </React.Fragment>
        );
    }

    // function MappingRow() {
    //     return (
    //         <React.Fragment>

    //     <>
    //         {user ? (
    //             <>
    //                 {user.orders.map((order) => (

    //             <Grid item xs={4} key={order._id}>
    //                 <Paper className={classes.paper}>{new Date(parseInt(order.purchaseDate)).toLocaleDateString()}</Paper>
    //             </Grid>
    //             {order.products.map(({ name }, index) => (
    //             <Grid item xs={4} key={index}>
    //                 <Paper className={classes.paper}>{name}</Paper>
    //             </Grid>
    //             ))}
    //             <Grid item xs={4}>
    //                 <Paper className={classes.paper}>{price}</Paper>
    //             </Grid>
    //         </React.Fragment>
    //     );
    // }


    return (
        <>
            {user ? (
                <>
                    {user.orders.map((order) => (
                        <div key={order._id} className="px-1 py-1">
                            <h5>Date Purchased: {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}</h5>
                            {order.products.map(({ name, price }, index) => (
                                <h5 key={index}>Ticket: {name} - ${price}</h5>
                            ))}
                        </div>
                    ))}
                </>
            ) : null}

            <div className={classes.root}>
                <Grid container spacing={1}>
                    <Grid container item xs={12} spacing={2}>
                        <FormRow />
                    </Grid>
                </Grid>
                {/* <Grid container spacing={1}>
                    <Grid container item xs={12} spacing={2}>
                        <MappingRow />
                    </Grid>
                </Grid> */}
            </div>
        </>)
};
export default OrderHistory;