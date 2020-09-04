import React from 'react';
import './styles.scss'
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
            backgroundColor: 'white'
        },
        title: {
            textAlign: 'center'
        }
    },
}));


export const Calendar = () => {
    const classes = useStyles();

    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
        setValue(event.target.value);
    };


    return <>
    <div className="container">
        <div className="row">
            <div className="col-12 ">
                <div className="box "> Twój plan odżywiania</div>
            </div>

        </div>
        <div className="row">
            <div className="col-4">
                <div className="box">
                    <h1>Poniedziałek</h1>
                    <form noValidate autoComplete="off" className={classes.root}>
                        <div>

                            <TextField
                                id="standard-textarea"
                                label="Śniadanie"
                                placeholder="Śniadanie"
                                multiline
                            />
                            <TextField
                                id="standard-textarea"
                                label="Drugie śniadanie"
                                placeholder="Drugie śniadanie"
                                multiline
                            />
                            <TextField
                                id="standard-textarea"
                                label='Obiad'
                                placeholder="Obiad"
                                multiline
                            />
                            <TextField
                                id="standard-textarea"
                                label='Podwieczorek'
                                placeholder="Podwieczorek"
                                multiline
                            />
                            <TextField
                                id="standard-textarea"
                                label='Kolacja'
                                placeholder="Kolacja"
                                multiline
                            />
                        </div>
                    </form>
                </div>
            </div>


            <div className="col-4">
                <div className="box">
                    <h1>Wtorek</h1>
                    <form noValidate autoComplete="off" className={classes.root}>
                        <div>

                            <TextField
                                id="standard-textarea"
                                label="Śniadanie"
                                placeholder="Śniadanie"
                                multiline
                            />
                            <TextField
                                id="standard-textarea"
                                label="Drugie śniadanie"
                                placeholder="Drugie śniadanie"
                                multiline
                            />
                            <TextField
                                id="standard-textarea"
                                label='Obiad'
                                placeholder="Obiad"
                                multiline
                            />
                            <TextField
                                id="standard-textarea"
                                label='Podwieczorek'
                                placeholder="Podwieczorek"
                                multiline
                            />
                            <TextField
                                id="standard-textarea"
                                label='Kolacja'
                                placeholder="Kolacja"
                                multiline
                            />
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-4">
                <div className="box">
                    <h1>Środa</h1>
                    <form noValidate autoComplete="off" className={classes.root}>
                        <div>

                            <TextField
                                id="standard-textarea"
                                label="Śniadanie"
                                placeholder="Śniadanie"
                                multiline
                            />
                            <TextField
                                id="standard-textarea"
                                label="Drugie śniadanie"
                                placeholder="Drugie śniadanie"
                                multiline
                            />
                            <TextField
                                id="standard-textarea"
                                label='Obiad'
                                placeholder="Obiad"
                                multiline
                            />
                            <TextField
                                id="standard-textarea"
                                label='Podwieczorek'
                                placeholder="Podwieczorek"
                                multiline
                            />
                            <TextField
                                id="standard-textarea"
                                label='Kolacja'
                                placeholder="Kolacja"
                                multiline
                            />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </div>
</>
}
