import React from 'react';
import {SimpleGrid, Skeleton} from "@mantine/core";
import FoodListItem from "@/components/FoodList/item";

interface IProps {
  loading: boolean
}

function FoodList({loading}: IProps) {
  return (
    <SimpleGrid
      cols={3}
      spacing="lg"
      breakpoints={[
        {maxWidth: 'md', cols: 2, spacing: 'md'},
        {maxWidth: 'sm', cols: 1, spacing: 'sm'},
        {maxWidth: 'xs', cols: 1, spacing: 'sm'},
      ]}>
      {Array.from({length: 12}).map((_, idx) => (
        <Skeleton key={`food-list-skeleton-${idx}`} visible={loading}>
          <FoodListItem
            key={`food-list-item-${idx}`}
            title="Grilled fish"
            image="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            category="bbq"
            link=""
            ratings="8.6"/>
        </Skeleton>
      ))}
    </SimpleGrid>
  );
}

export default FoodList;
