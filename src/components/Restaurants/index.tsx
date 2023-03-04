import React from 'react';
import {Button, Container, createStyles, Flex, Group, SimpleGrid, Stack, Text, Title} from "@mantine/core";
import {MdArrowRight} from "react-icons/md";
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
  const {classes} = useStyles();

  return (
    <Container fluid my={120}>
      <Stack>
        <Flex mb="xl" justify="space-between" align="flex-end">
          <Stack align="flex-start">
            <Title className={classes.title} align="center">Top Rated Restaurants</Title>
            <Text className={classes.description} align="center">Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
          </Stack>
          <Button variant="subtle" rightIcon={<MdArrowRight/>}>View all</Button>
        </Flex>
        <SimpleGrid
          cols={3}
          spacing="lg"
          breakpoints={[
            {maxWidth: 980, cols: 3, spacing: 'md'},
            {maxWidth: 755, cols: 2, spacing: 'sm'},
            {maxWidth: 600, cols: 1, spacing: 'sm'},
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
      </Stack>
    </Container>
  );
}

export default Restaurants;
