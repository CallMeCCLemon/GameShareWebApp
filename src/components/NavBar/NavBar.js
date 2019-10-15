import React from "react";
import { Grid, Cell } from "styled-css-grid";
import { Button, TextField } from "@material-ui/core";
import PropTypes from 'prop-types';


function NavBar(props) {
    const [values, setValues] = React.useState({
        lastSearch: props.lastSearch,
    });

    function handleChange(event) {
        setValues({ ...values, [event.target.name]: event.target.value})
    }

    return(
        <div>
            <Grid columns={3}>
                <Cell>
                    <Button>
                        GameShare
                    </Button>
                </Cell>
                <Cell left={2}>
                    <form>
                        <TextField id="search-input"
                                   label="Search"
                                   type={"search"}
                                   value={values.lastSearch}
                                   onChange={handleChange}
                                   margin={"normal"}
                        />
                    </form>
                </Cell>
                <Cell left={3}>
                    <Button>
                        My Account
                    </Button>
                </Cell>
            </Grid>
        </div>
    )
}

NavBar.propTypes = {
    lastSearch: PropTypes.string,
};

export default NavBar;
