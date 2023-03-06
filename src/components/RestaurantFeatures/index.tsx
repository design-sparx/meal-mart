import {Box, Card, createStyles, Image, SimpleGrid, Stack, Text, Title,} from '@mantine/core';
import {MdOutlineMouse} from "react-icons/md";
import React from "react";

const mockdata = [
  {
    title: 'Boost your Bookings',
    subTitle: 'Turpis cursus in hac habitasse platea dictumst. ',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    icon: MdOutlineMouse,
    image: 'https://res.cloudinary.com/ddh7hfzso/image/upload/v1677332409/meal%20mart/3725866_w4khbv.jpg'
  },
  {
    title: 'Manage Easily',
    subTitle: 'Turpis cursus in hac habitasse platea dictumst. ',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    icon: MdOutlineMouse,
    image: 'https://res.cloudinary.com/ddh7hfzso/image/upload/v1677332424/meal%20mart/3333976_pgxlnw.jpg'
  },
  {
    title: 'Reach New Customers',
    subTitle: 'Turpis cursus in hac habitasse platea dictumst. ',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    icon: MdOutlineMouse,
    image: 'https://res.cloudinary.com/ddh7hfzso/image/upload/v1677332415/meal%20mart/6030259_lborvp.jpg'
  },
];

const useStyles = createStyles((theme) => ({
  title: {
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

  card: {
    textAlign: 'center',
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
    boxShadow: theme.shadows.sm,

    '&:hover': {
      transform: 'scale(1.03)',
      transition: 'all ease 200ms',
      boxShadow: theme.shadows.lg,
    },
  },

  cardTitle: {
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

export  default function RestaurantFeatures() {
  const {classes} = useStyles();

  const features = mockdata.map((_, idx) => (
    <Card key={_.title} shadow="md" radius="md" className={classes.card} p="xl">
      <Image src={_.image} alt={''} height={200} fit="contain"/>
      <Text size="xl" weight={500} className={classes.cardTitle} mt="md">
        {++idx}. {_.title}
      </Text>
      <Text size="md" mt="sm">
        {_.subTitle}
      </Text>
      <Text size="sm" color="dimmed" mt="sm">
        {_.description}
      </Text>
    </Card>
  ));

  return (
    <Box py="xl">
      <Stack align="center">
        <Title align="center">
          Why Signup to Meal Mart
        </Title>
        <Text color="dimmed" className={classes.description} align="center" mb="lg">
          Et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque.
        </Text>
      </Stack>
      <SimpleGrid cols={3} spacing="xl" breakpoints={[{maxWidth: 'md', cols: 1}]}>
        {features}
      </SimpleGrid>
    </Box>
  );
}
