import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import MealCard from "../MealCard/MealCard";
import NoMeals from "../NoMeals/NoMeals";

export default function Meals(props) {
    const { meals } = props;
  return (
      <Box sx={{ flexGrow: 2 }}>
          <Container maxWidth="md">
                            <Grid container spacing={2} sx={{}}>
                {!meals ? (
                <NoMeals></NoMeals>
                ) : (
                meals?.map((meal) => (
                    <MealCard key={meal.idMeal} meal={meal}></MealCard>
                ))
                )}
            </Grid>
        </Container>

    </Box>
  );
}
