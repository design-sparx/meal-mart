import {Box, Card, Container, createStyles, SimpleGrid, Stack, Text, Title,} from '@mantine/core';
import {MdOutlineMouse} from "react-icons/md";
import Image from "next/image";
import FeatureImg1 from "@/assets/img/feature-icon-1.jpg";
import FeatureImg2 from "@/assets/img/feature-icon-2.jpg";
import FeatureImg3 from "@/assets/img/feature-icon-3.jpg";
import React from "react";

const mockdata = [
  {
    title: 'Select Restaurant',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    icon: MdOutlineMouse,
    image: FeatureImg1
  },
  {
    title: 'Select menu',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    icon: MdOutlineMouse,
    image: FeatureImg2
  },
  {
    title: 'Wait for delivery',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    icon: MdOutlineMouse,
    image: FeatureImg3
  },
];

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

function Instructions() {
  const {classes} = useStyles();
  const features = mockdata.map((_, idx) => (
    <Card key={_.title} radius="sm" className={classes.card} p="xl">
      <Image src={_.image} alt={''} height={200} width={200} style={{objectFit: "contain"}}/>
      <Text size="xl" weight={500} className={classes.cardTitle} mt="md">
        {++idx}. {_.title}
      </Text>
      <Text size="sm" color="dimmed" mt="sm">
        {_.description}
      </Text>
    </Card>
  ));
  return (
    <Container fluid my={120}>
      <Stack align="center">
        <Title order={2} className={classes.title} align="center">
          How It Works
        </Title>
        <Text color="dimmed" className={classes.description} align="center" mb="xl">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
      </Stack>
      <SimpleGrid cols={3} spacing="xl" breakpoints={[{maxWidth: 'md', cols: 1}]}>
        {features}
      </SimpleGrid>
    </Container>
  );
}

export default Instructions;
