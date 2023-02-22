import React from 'react';
import {Box, Button, createStyles, Group, SimpleGrid, Stack, Text, Title} from "@mantine/core";
import {MdArrowRight} from "react-icons/md";
import RestaurantsData from "@/data/Restaurants.json";
import RestaurantCard from './item';

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 34,
    fontWeight: 900,

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
  const {classes} = useStyles();

  return (
    <Box>
      <Stack>
        <Group>
          <div>
            <Title className={classes.title} align="center">Top Rated Restaurants</Title>
            <Text className={classes.description} align="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.</Text>
          </div>
          <Button rightIcon={<MdArrowRight/>}>view all</Button>
        </Group>
        <SimpleGrid
          cols={3}
          spacing="lg"
          breakpoints={[
            {maxWidth: 980, cols: 3, spacing: 'md'},
            {maxWidth: 755, cols: 2, spacing: 'sm'},
            {maxWidth: 600, cols: 1, spacing: 'sm'},
          ]}>
          {RestaurantsData.data.map((_, idx) =>
            <RestaurantCard key={idx} imageUrl={_.imageUrl} link="/" type={_.type} avgPrice={10.12} ratings={_.ratings}
                            title={_.title} location={_.location}/>
          )}
        </SimpleGrid>
      </Stack>
    </Box>
  );
}

export default Restaurants;
