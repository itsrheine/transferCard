import React from "react";
import { Link } from "react-router-dom";
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


    return (
        <>
            {user ? (
                <>
                    {user.orders.map((order) => (
                        <div key={order._id} className="card px-1 py-1">
                            <p>Date Purchased: {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}</p>
                            {order.products.map(({ name, price, image }, index) => (
                                 <div key={index} className="card px-1 py-1">
                                 <Link to={`/products/${image}`}>
                                   <img
                                     alt={name}
                                     src={`/images/${image}`}
                                   />
                                   <p>{name}</p>
                                 </Link>
                                 <div>
                                   <span>${price}</span>
                                 </div>
                               </div>
                             ))}
                           </div>
                       ))}

                      <FormRow/>
                     </>
                   ) : null}
    </>)
};
export default OrderHistory;