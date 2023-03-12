import React from 'react';
import {Box, SimpleGrid, Title} from "@mantine/core";
import MenuItem from "@/components/RestaurantMenu/item";

interface IProps {
  title: string
}

const data = [
  {
    title: 'Pizza food item',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    price: 5.21
  }
]

function RestaurantMenu({title}: IProps) {
  return (
    <Box>
      <Title order={2} mb="md">{title}</Title>
      <SimpleGrid
        cols={2}
        spacing="lg"
        breakpoints={[
          {maxWidth: 'md', cols: 3, spacing: 'md'},
          {maxWidth: 'sm', cols: 2, spacing: 'sm'},
          {maxWidth: 'xs', cols: 1, spacing: 'sm'},
        ]}
      >
        {Array.from({length: 4}).map((_, idx) => (
          <MenuItem
            key={`menu-item-${idx}`}
            title={`${++idx}. ${data[0].title}`}
            imageUrl={data[0].imageUrl}
            price={data[0].price}
            description={data[0].description}/>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default RestaurantMenu;
