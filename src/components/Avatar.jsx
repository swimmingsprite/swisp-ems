import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    average: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
    smaller: {
        width: theme.spacing(5.5),
        height: theme.spacing(5.6),
    },
}));

export default function ImageAvatars(props) {
    const classes = useStyles();

    return (
        <div className={classes.root + " " + props.cl } >
            

                <Avatar alt="Remy Sharp"

                    className={classes.average}
                    style={{ color: "#0984e3" }
        
                    }
                >

                    <AccountCircleIcon
                        style={{ backgroundColor: "white" }}
                        className={classes.smaller} />

                </Avatar>
            
        </div>
    );
}