import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';

import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Form from './form';


const styles = theme => ({
    FormControl: {
        width: 500
    }
});

export default withStyles(styles)(class extends Component {

    state = {
        open: false,
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        });
    }

    

    render() {
        const { open } = this.state;
        const { muscles, onCreate } = this.props;

        return (
            <Fragment>
                <Button variant="fab" onClick={this.handleToggle} mini>
                    <AddIcon />
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleToggle}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">
                        Create a new exercise.
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Content
                        </DialogContentText>

                        <Form
                            muscles={muscles}
                            onSubmit={onCreate}
                        />

                    </DialogContent>

                </Dialog>
            </Fragment>
        );
    }
})
