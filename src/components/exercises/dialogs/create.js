import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const styles = theme => ({
    FormControl: {
        width: 500
    }
});

export default withStyles(styles)(class extends Component {

    state = {
        open: false,
        exercise: {
            title: '',
            description: '',
            muscles: ''
        }
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        });
    }

    handleChange = name => ({ target: { value } }) => {
        this.setState({
            exercise: {
                ...this.state.exercise,
                [name]: value
                // title:'',
                // description:'',
                // muscles:''
            }
        });
    };

    handleSubmit = () => {
        // TODO: validate

        const { exercise } = this.state;
        this.props.onCreate({
            ...exercise,
            id: exercise.title.toLowerCase().replace(/ /g, '-')
        });

        this.setState({
            open: false,
            exercise: {
                title: '',
                description: '',
                muscles: ''
            }
        })
    }

    render() {
        const { open, exercise: { title, description, muscles } } = this.state;
        const { classes, muscles: categories } = this.props;

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

                            <TextField
                                label="title"
                                value={title}
                                onChange={this.handleChange('title')}
                                margin="normal"
                                className={classes.FormControl}
                            />
                            <br />
                            <TextField
                                label="description"
                                value={description}
                                multiline
                                rows="4"
                                onChange={this.handleChange('description')}
                                margin="normal"
                                className={classes.FormControl}
                            />
                            <br />
                            <FormControl>
                                <InputLabel htmlFor="muscles">Muscles</InputLabel>
                                <Select
                                    value={muscles}
                                    onChange={this.handleChange('muscles')}
                                    className={classes.FormControl}
                                >
                                    {categories.map(category =>
                                        <MenuItem value={category}>{category}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>

                        </form>

                    </DialogContent>
                    <DialogActions>
                        <Button color="primary"
                            variant="raised" onClick={this.handleSubmit} >
                            Create
                        </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        );
    }
})
