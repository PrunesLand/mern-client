import { makeStyles } from "@material-ui/core";

export const styles = makeStyles((theme) => {
    return {
        root: {
            boxSizing: 'border-box',
            paddingTop: '8vh',
            display: 'flex',
            justifyContent: 'center',
            [theme.breakpoints.up('sm')]: {
                paddingTop: '6vw'
            }
        },
        container: {
            paddingTop: theme.spacing(1),
            maxWidth: '75vh',

        },
        lrgBox: {
            fontFamily: 'Poppins',
            padding: theme.spacing(3),
            color: theme.palette.secondary.main,
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',

        },
        heroTextLrg: {
            padding: theme.spacing(1),
            [theme.breakpoints.down('sm')]: {
                fontSize: theme.typography.h4.fontSize
            }
        },
        heroTextMd: {
            maxWidth: '70vw',
            [theme.breakpoints.down('sm')]: {
                fontSize: theme.typography.body2.fontSize,
                padding: theme.spacing(2),
            },
            padding: theme.spacing(2),

        },
        medBox: {
            padding: theme.spacing(2),
            color: theme.palette.secondary.main
        },
        mdText: {
            textAlign: 'center',
            [theme.breakpoints.down('sm')]: {
                fontSize: theme.typography.body2.fontSize
            },
            color: theme.palette.secondary.main
        },
        promoImg: {
            padding: theme.spacing(2),
            [theme.breakpoints.down('sm')]: {
                width: theme.spacing(20),
            },
            maxHeight: theme.spacing(25)
        },
        socials: {
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            padding: theme.spacing(0.5),


        },
    }
})