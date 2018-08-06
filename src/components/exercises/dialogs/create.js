import React, { Component, Fragment } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

export default class extends Component {

    state = {
        open: false
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        const { open } = this.state;

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

                        <form>


                        </form>

                    </DialogContent>
                    <DialogActions>
                        <Button color="primary" variant="raised" onClick={this.handleToggle}>
                            Create
                        </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        );
    }
}
