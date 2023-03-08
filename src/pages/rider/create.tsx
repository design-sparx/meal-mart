import React from 'react';
import Wrapper from "@/layout";
import {Box, Button, Center, Container, createStyles, Flex, Overlay, Stack, Text, Title} from "@mantine/core";
import Faqs from "@/components/Faqs";
import RiderFeatures from "@/components/RiderFeatures";
import RiderForm from "@/components/RiderForm";

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1533053092769-b3f6ded9fb2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  heroContainer: {
    height: 500,
    zIndex: 1,
    position: 'relative',
    paddingTop: theme.spacing.lg,
    paddingBottom: theme.spacing.lg,

    [theme.fn.smallerThan('sm')]: {
      height: 500,
    },
  },
  heroTitle: {
    fontSize: 48,
    color: theme.white
  },
  heroText: {
    fontSize: 24,
    color: theme.white,
  },
  control: {
    textTransform: 'capitalize'
  }
}))

const data = [
  {value: 'ke', label: 'KE'},
  {value: 'ug', label: 'UG'},
  {value: 'tz', label: 'TZ'},
  {value: 'rw', label: 'RW'},
];

export default function Create() {
  const {classes} = useStyles();

  return (
    <Wrapper containNav={false}>
      <Box className={classes.hero}>
        <Overlay
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, .65) 40%)"
          opacity={1}
          zIndex={0}
        />
        <Container fluid className={classes.heroContainer}>
          <Center sx={{height: '100%'}}>
            <Stack>
              <Title className={classes.heroTitle}>Deliver with Uber Eats</Title>
              <Text className={classes.heroText} mb="md">Flexible work, competitive fees</Text>
              <Flex gap="md">
                <Button size="lg">Apply now to deliver</Button>
                <Button size="lg">Already have an account? Sign in</Button>
              </Flex>
            </Stack>
          </Center>
        </Container>
      </Box>
      <Container fluid>
        <Box my={60}>
          <RiderFeatures/>
        </Box>
        <Box my={60}>
          <RiderForm/>
        </Box>
        <Box mt={60}>
          <Faqs/>
        </Box>
      </Container>
    </Wrapper>
  );
}
