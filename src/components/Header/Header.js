import React from 'react';
import Navbar from '../Navbar/Navbar';
import SearchBar from '../SearchBar/SearchBar';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";


const Header = (props) => {
    return (
      <>
        <Box
          sx={{
            flexGrow: 1,
            m: ".2rem",
            mb: "30px"
          }}
        >
          <Grid container spacing={2}>
            <Grid
              item
              xs={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Navbar></Navbar>
            </Grid>
            <Grid
              item
              xs={8}
              sx={{ display: "flex", justifyContent: "end" }}
            >
              <SearchBar handleOnSearch={props.handleOnSearch}></SearchBar>
            </Grid>
          </Grid>
        </Box>
      </>
    );
};

export default Header;
