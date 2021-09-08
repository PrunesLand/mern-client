import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    appBar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
        [theme.breakpoints.up('sm')]: {

            flexDirection: 'row',
        }

    },
    heading: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: theme.typography.h4.fontSize
        }

    },
    image: {
        textAlign: 'center'
    },
    toolbar: theme.mixins.toolbar,
    profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: theme.spacing(40),

    },
    userName: {
        display: 'flex',
        alignItems: 'center',
        fontSize: theme.spacing(2.5),
        textTransform: 'capitalize',
        color: theme.palette.primary.main
    },
    brandContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center'

    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
        height: theme.spacing(3),
        width: theme.spacing(3),

    },
    signin: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        }
    }
}));