import { makeStyles } from "@material-ui/core";

export const styles = makeStyles((theme) => {
    return {
        root: {

        },
        container: {
            paddingTop: theme.spacing(1),
        },
        lrgBox: {
            background: '#790000',
            padding: theme.spacing(2)
        },
        medBox: {
            background: '#005fbe54',
            padding: theme.spacing(2)
        }
    }
})