import React, {useState} from 'react';
import Wrapper from "@/layout";
import {Box, Button, Center, Container, createStyles, Flex, Overlay, Stack, Text, Title} from "@mantine/core";
import Faqs from "@/components/Faqs";
import RiderFeatures from "@/components/RiderFeatures";
import RiderForm from "@/components/RiderForm";
import {useMediaQuery} from "@mantine/hooks";
import {showNotification} from "@mantine/notifications";

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1533053092769-b3f6ded9fb2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  heroContainer: {
    height: 650,
    zIndex: 1,
    position: 'relative',
    paddingTop: theme.spacing.lg,
    paddingBottom: theme.spacing.lg,

    [theme.fn.smallerThan('sm')]: {
      height: 550,
      paddingTop: theme.spacing.lg,
      textAlign: 'center'
    },
  },
  heroTitle: {
    fontSize: 48,
    color: theme.white,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 28,
    },
  },
  heroText: {
    fontSize: 24,
    color: theme.white,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 18,
    },
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
  const {classes, theme} = useStyles();
  const smallScreen = useMediaQuery('(max-width: 426px)');
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showNotification({
        title: 'Form submitted',
        message: 'Hey there, you are doing great! 🤥',
      });
    }, 3000);
  }

  return (
    <Wrapper containNav={true}>
      <Box className={classes.hero}>
        <Overlay
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, .65) 40%)"
          opacity={1}
          zIndex={0}
        />
        <Container fluid className={classes.heroContainer}>
          <Center sx={{height: '100%'}}>
            <Stack align="center">
              <Title className={classes.heroTitle}>Deliver with Meal Mart</Title>
              <Text className={classes.heroText} mb="md">Flexible work, competitive fees</Text>
              <Flex gap="md" wrap="wrap" sx={{justifyContent: smallScreen ? 'center' : 'flex-start'}}>
                <Button size="md">Apply now to deliver</Button>
                <Button size="md" variant="white">Already have an account? Sign in</Button>
              </Flex>
            </Stack>
          </Center>
        </Container>
      </Box>
      <Container pt={80} pb={120}>
        <RiderFeatures/>
      </Container>
      <Box pt={80} pb={120} sx={{backgroundColor: theme.colors.gray[0]}}>
        <RiderForm/>
      </Box>
      <Container pt={80}>
        <Faqs/>
      </Container>
    </Wrapper>
  );
}
