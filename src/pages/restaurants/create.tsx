import React, {useState} from 'react';
import Wrapper from "@/layout";
import {
  Box,
  Button,
  Container,
  createStyles,
  Flex,
  Grid,
  Image,
  List,
  LoadingOverlay,
  NativeSelect,
  Overlay,
  Paper,
  Select,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Title
} from "@mantine/core";
import RestaurantFeatures from "@/components/RestaurantFeatures";
import Testimonials from "@/components/Testimonials";
import Faqs from "@/components/Faqs";
import {useMediaQuery, useScrollIntoView} from "@mantine/hooks";
import {MdSend, MdStart} from "react-icons/md";
import {showNotification} from "@mantine/notifications";
import Head from "next/head";

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  heroContainer: {
    height: 650,
    zIndex: 1,
    position: 'relative',
    paddingTop: theme.spacing.lg,
    paddingBottom: theme.spacing.lg,
    paddingLeft: theme.spacing.xl,
    paddingRight: theme.spacing.xl,

    '@media (max-width: 1025px)': {
      height: '100%',
      paddingBottom: theme.spacing.xl,
    },

    [theme.fn.smallerThan('sm')]: {
      height: '100%',
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  heroTitle: {
    color: theme.white,
    fontSize: 48,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 28,
      marginBottom: theme.spacing.lg,
    },
  },
  heroText: {
    color: theme.white,
    fontSize: 20
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
  const mediumScreen = useMediaQuery('(max-width: 769px)');
  const smallScreen = useMediaQuery('(max-width: 426px)');
  const {scrollIntoView, targetRef} = useScrollIntoView<HTMLDivElement>({offset: 60});
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showNotification({
        title: 'Form submitted',
        message: 'Hey there, you are doing great! 🤥',
      });
    }, 3000)
  }

  return (
    <>
      <Head>
        <title>Meal Mart | Create Restaurant</title>
      </Head>
      <Wrapper containNav={true}>
        <Container fluid className={classes.hero}>
          <Overlay
            gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, .65) 40%)"
            opacity={1}
            zIndex={0}
          />
          <Container fluid className={classes.heroContainer}>
            <Grid sx={{height: '100%', alignItems: 'center'}}>
              <Grid.Col md={5} lg={8} sx={{textAlign: 'center'}}>
                <Title className={classes.heroTitle}>Attract New Customers</Title>
                <Text className={classes.heroText}>More bookings from diners around the corner</Text>
              </Grid.Col>
              <Grid.Col md={7} lg={4}>
                <Paper p="md" ref={targetRef} sx={{position: 'relative'}}>
                  <Title order={3} mb="md">Get started</Title>
                  <form action="">
                    <LoadingOverlay visible={loading}/>
                    <Stack>
                      <TextInput label="Business name" placeholder="business name" withAsterisk/>
                      <Select label="Business address" placeholder="business address"
                              data={[{value: '', label: '---'},]}/>
                      <SimpleGrid cols={2} spacing="lg" breakpoints={[
                        {maxWidth: 'md', cols: 2, spacing: 'md'},
                        {maxWidth: 'sm', cols: 1, spacing: 'sm'},
                        {maxWidth: 'xs', cols: 1, spacing: 'sm'},
                      ]}>
                        <TextInput label="First name" placeholder="first name" withAsterisk/>
                        <TextInput label="Last name" placeholder="last name" withAsterisk/>
                      </SimpleGrid>
                      <TextInput label="Contact email" placeholder="email name" withAsterisk/>
                      <TextInput
                        type="tel"
                        placeholder="+254"
                        label="Telephone"
                        rightSection={<NativeSelect
                          data={data}
                          styles={{
                            input: {
                              fontWeight: 500,
                              borderTopLeftRadius: 0,
                              borderBottomLeftRadius: 0,
                            },
                          }}
                        />}
                        rightSectionWidth={92}
                      />
                      <Button leftIcon={<MdSend size={18}/>} size="md" onClick={handleSubmit}>Submit</Button>
                      <Text size="sm">By clicking &apos;Submit&apos;, you agree to <a href="">Meal Mart General Terms
                        and
                        Conditions</a> and acknowledge you have read the <a href="">Privacy Policy.</a>
                      </Text>
                    </Stack>
                  </form>
                </Paper>
              </Grid.Col>
            </Grid>
          </Container>
        </Container>
        <Container>
          <Box pt={80} pb={120}>
            <RestaurantFeatures/>
          </Box>
          <Box pt={80} pb={120}>
            <Testimonials/>
          </Box>
          <Box pt={80} pb={120}>
            <Flex justify="space-evenly" align="center" gap="md" direction={mediumScreen ? 'column-reverse' : 'row'}>
              <Image
                src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
                alt="get started image"
                width={mediumScreen ? 400 : 500}
                radius="sm"/>
              <Stack align={smallScreen ? "stretch" : "flex-start"}>
                <Title size={smallScreen ? 28 : 42} align={smallScreen ? 'center' : 'left'}>Get started in just 3
                  steps</Title>
                <List type="ordered" sx={{textAlign: mediumScreen ? 'center' : 'left'}}>
                  <List.Item>Tell us about your business</List.Item>
                  <List.Item>Upload you product catalog</List.Item>
                  <List.Item>Get access to your business dashboard</List.Item>
                </List>
                <Button
                  leftIcon={<MdStart size={18}/>}
                  size="md"
                  onClick={() => scrollIntoView({alignment: 'center'})}>
                  Get started</Button>
              </Stack>
            </Flex>
          </Box>
          <Box pt={80}>
            <Faqs/>
          </Box>
        </Container>
      </Wrapper>
    </>
  );
}
