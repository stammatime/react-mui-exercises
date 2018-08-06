import React, { Fragment } from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


export default ({ muscles, category, onSelect, exercise }) => {
    const index = category ? muscles.findIndex(group => group === category) + 1
        : 0 

    const onIndexSelect = (e, index) => {
        onSelect(index === 0 ? '': muscles[index-1])
    }

    return (
    <Fragment>
        <Paper>
            <Tabs
                value={index}
                onChange={onIndexSelect}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab key="all" label="all" />
                {muscles.map(group =>
                    <Tab key={group} label={group} onSelect={this.handleCategorySelected} />
                )}

            </Tabs>
        </Paper>
    </Fragment>);
}

