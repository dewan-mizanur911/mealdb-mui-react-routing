import React from 'react';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const NoMeals = () => {
    return (
        <Container maxWidth="md">
            <Typography variant="h5">Oops! No Results Found</Typography>
        </Container>
    );
};

export default NoMeals;