import React from 'react';
import {Box, Button, Container, createStyles, SimpleGrid, Stack, Text, Title} from "@mantine/core";
import RestaurantsData from "@/data/Restaurants.json";
import RestaurantCard from './item';

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.colors.gray[1]
  },

  title: {
    fontSize: 48,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 24,
    },
  },

  description: {
    margin: 'auto',

    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
}));

function Restaurants() {
  const {classes, theme} = useStyles();

  return (
    <Box sx={{backgroundColor: theme.colors.gray[0]}}>
      <Container pt={80} pb={120}>
        <Stack align="center">
          <Title className={classes.title} align="center">Top Rated Restaurants</Title>
          <Text className={classes.description} align="center" mb="xl">Lorem ipsum dolor sit amet, consectetur
            adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
          <SimpleGrid
            cols={2}
            spacing="xl"
            breakpoints={[
              {maxWidth: "md", cols: 2, spacing: 'md'},
              {maxWidth: "sm", cols: 1, spacing: 'sm'},
            ]}>
            {RestaurantsData.data.map((_, idx) =>
              <RestaurantCard
                key={idx}
                imageUrl={_.imageUrl}
                link="restaurants"
                type={_.type}
                avgPrice={10.12}
                ratings={_.ratings}
                title={_.title} location={_.location}/>
            )}
          </SimpleGrid>
          <Button size="lg" mt="xl">View all Restaurants</Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default Restaurants;
