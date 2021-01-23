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

    function MappingRow() {
        return (

            <React.Fragment>
                <>
<<<<<<< HEAD
                    {user.orders.map((order) => (
                        <div key={order._id} className="card px-1 py-1">
                            <p>Date Purchased: {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}</p>
                            {order.products.map(({ name, price, image }, index) => (
                                 <div key={index} className="card px-1 py-1">
                                 <Link to={`/images/${image}`}>
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
                     </>
                   ) : null}
    </>)
};
export default OrderHistory;
=======
                    {user ? (
                        <>
                            {user.orders.map((order) => (
                                <Grid item xs={4} key={order._id}>
                                    <Paper className={classes.paper}>{new Date(parseInt(order.purchaseDate)).toLocaleDateString()}</Paper>
                                    {order.products.map(({ name }, index) => (
                                        <Paper item xs={4} key={index}>
                                            <Paper className={classes.paper}>{name}</Paper>
                                        </Paper>
                                    ))}

                                    {order.products.map(({ price }, index) => (
                                        <Paper item xs={4} key={index}>
                                            <Paper className={classes.paper}>${price}</Paper>
                                        </Paper>
                                    ))}
                                </Grid>
                                
                            ))}
                        </>
                    ) : null}
                </>
            </React.Fragment>


            // <React.Fragment>
            //     <>
            //         {user ? (
            //             <>
            //                 {user.orders.map((order) => (
            //                     <Grid item xs={4} key={order._id}>
            //                         <Paper className={classes.paper}>{new Date(parseInt(order.purchaseDate)).toLocaleDateString()}</Paper>
            //                         {order.products.map(({ name }, index) => (
            //                             <Paper item xs={4} key={index}>
            //                                 <Paper className={classes.paper}>{name}</Paper>
            //                             </Paper>
            //                         ))}

            //                         {order.products.map(({ price }, index) => (
            //                             <Paper item xs={4} key={index}>
            //                                 <Paper className={classes.paper}>${price}</Paper>
            //                             </Paper>
            //                         ))}
            //                     </Grid>
            //                 ))}
            //             </>
            //         ) : null}
            //     </>
            // </React.Fragment>
        )
    };



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
                    <Grid container spacing={1}>
                        <Grid container item xs={12} spacing={2}>
                            <MappingRow />
                        </Grid>
                    </Grid>
                </div>
            </>)
    };

    export default OrderHistory;
>>>>>>> 3a882a983fcf6cf4b8391c2d56511a72bfe408d5
