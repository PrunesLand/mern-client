import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    appBar: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
        [theme.breakpoints.up('sm')]: {

            flexDirection: 'row',
            height: '6vw'
        },
        height: '8vh'


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
        width: '100%'


    },
    userName: {
        display: 'flex',
        alignItems: 'center',
        fontSize: theme.typography.h5.fontSize,
        textTransform: 'capitalize',
        color: theme.palette.primary.main
    },
    brandContainer: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        [theme.breakpoints.up('sm')]: {
            justifyContent: 'space-between'
        }

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
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            height: theme.spacing(5)
        },

    },
    logout: {

    },
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));