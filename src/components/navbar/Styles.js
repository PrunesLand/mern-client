import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    appBar: {
        // borderRadius: 15,
        // margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
    },
    heading: {
        color: 'rgba(0,183,255, 1)',
        textDecoration: 'none',
        [theme.breakpoints.down('sm')]: {
            fontSize: theme.typography.h4.fontSize
        }

    },
    image: {
        textAlign: 'center'
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '400px',
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
    },
    brandContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'


    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
}));