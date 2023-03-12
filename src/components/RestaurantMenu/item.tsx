import React from 'react';
import {createStyles, Flex, Paper, Stack, Text, Title} from "@mantine/core";
import Image from "next/image";

const useStyles = createStyles((theme, _params, getRef) => ({
  card: {
    boxShadow: theme.shadows.sm,
    padding: theme.spacing.md,
    border: `1px solid ${theme.colors.gray[1]}`,

    ['&:hover']: {
      boxShadow: theme.shadows.lg,
      transform: 'scale(1.03)',
      transition: 'all ease 200ms'
    },

    [`&:hover .${getRef('title')}`]: {
      fontWeight: 700
    }
  },

  title: {
    ref: getRef('title'),
    textTransform: 'capitalize',
    fontWeight: 500
  }
}))

interface IProps {
  title: string
  description: string
  price: number
  imageUrl: string
}

function MenuItem({title, description, price, imageUrl}: IProps) {
  const {classes, theme} = useStyles();

  return (
    <Paper className={classes.card}>
      <Flex gap="sm">
        <Stack>
          <Title order={5} className={classes.title}>{title}</Title>
          <Text>{description}</Text>
          <Text weight={500}>$ {price}</Text>
        </Stack>
        <Image src={imageUrl} alt="menu item" height={72} width={72} style={{borderRadius: theme.radius.sm}}/>
      </Flex>
    </Paper>
  );
}

export default MenuItem;
