import { makeStyles } from "@material-ui/core";

export const styles = makeStyles((theme) => {
    return {
        root: {
            boxSizing: 'border-box'
        },
        container: {
            paddingTop: theme.spacing(1),
        },
        lrgBox: {
            fontFamily: 'Poppins',
            padding: theme.spacing(2),

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
            }

        },
        medBox: {
            padding: theme.spacing(2),

        },
        mdText: {
            textAlign: 'center',
            [theme.breakpoints.down('sm')]: {
                fontSize: theme.typography.body1.fontSize
            }
        },
        promoImg: {
            padding: theme.spacing(2),
            [theme.breakpoints.down('sm')]: {
                width: theme.spacing(20),
            }
        },
        socials: {
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            padding: theme.spacing(0.5)
        }
    }
})