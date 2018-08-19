import React, { Component, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    FormControl: {
        width: 500
    }
});

export default withStyles(styles)(class extends Component {

    state = this.getInitState()

    getInitState() {
        const {exercise} = this.props;

        return exercise ? exercise : {
            title: '',
            description: '',
            muscles: ''
        }

    }

    componentWillReceiveProps({exercise}) {
        this.setState({
            ...exercise
        })
    }

    handleChange = name => ({ target: { value } }) => {
        this.setState({
                [name]: value
        });
    };

    handleSubmit = () => {
        // TODO: validate

        this.props.onSubmit({
            id: this.state.title.toLowerCase().replace(/ /g, '-'),
            ...this.state
        });

        this.setState(this.getInitState())
    }

    render() {
        const { title, description, muscles } = this.state;
        const { exercise, classes, muscles: categories } = this.props;
        
        return (
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
                <br/>
                <Button color="primary"
                            variant="raised" onClick={this.handleSubmit} >
                            {exercise? 'Edit': 'Create'}
                        </Button>


            </form>
        )
    }

})