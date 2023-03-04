import React from 'react';
import {Container, createStyles, Stack, Text, Title} from "@mantine/core";
import CatagoriesData from "@/data/Categories.json"
import CategoryCard from "@/components/Categories/item";
import {Carousel} from "@mantine/carousel";

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 48,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 24,
    },
  },

  description: {
    maxWidth: 600,
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

function Categories() {
  const {classes} = useStyles();

  return (
    <Container fluid my={120}>
      <Stack>
        <Title className={classes.title} align="center">Popular Categories</Title>
        <Text className={classes.description} align="center" mb="xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        <Carousel
          slideSize="23%"
          slideGap="md"
          loop
          align="start"
          slidesToScroll={3}
          controlSize={32}
          breakpoints={[
            {maxWidth: 'md', slideSize: '50%'},
            {maxWidth: 'sm', slideSize: '100%', slideGap: 0},
          ]}
          styles={{
            control: {
              '&[data-inactive]': {
                opacity: 0,
                cursor: 'default',
              },
            },
          }}
        >
          {CatagoriesData.data.map((_, idx) =>
            <Carousel.Slide key={`carousel-category-card-${idx}`}>
              <CategoryCard
                key={`category-card-${idx}`}
                title={_.title}
                price={_.price}
                imageUrl={_.imageUrl}
                link=""
                size="md"/>
            </Carousel.Slide>
          )}
        </Carousel>
      </Stack>
    </Container>
  );
}

export default Categories;
