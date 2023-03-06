import React from 'react';
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

    [theme.fn.smallerThan('sm')]: {
      height: 500,
    },
  },
  heroTitle: {
    color: theme.white,
    fontSize: 48
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

  return (
    <Wrapper containNav={false}>
      <Container fluid className={classes.hero}>
        <Overlay
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, .65) 40%)"
          opacity={1}
          zIndex={0}
        />
        <Container fluid className={classes.heroContainer}>
          <Grid sx={{height: '100%', alignItems: 'center'}}>
            <Grid.Col lg={8} sx={{textAlign: 'center'}}>
              <Title className={classes.heroTitle}>Attract New Customers</Title>
              <Text className={classes.heroText}>More bookings from diners around the corner</Text>
            </Grid.Col>
            <Grid.Col lg={4}>
              <Paper p="md">
                <Title order={3} mb="md">Get started</Title>
                <form action="">
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
                    <Button>Submit</Button>
                    <Text size="sm">By clicking &apos;Submit&apos;, you agree to <a href="">Meal Mart General Terms and
                      Conditions</a> and
                      acknowledge you have read the <a href="">Privacy Policy.</a>
                    </Text>
                  </Stack>
                </form>
              </Paper>
            </Grid.Col>
          </Grid>
        </Container>
      </Container>
      <Container fluid>
        <Container fluid my={120}>
          <RestaurantFeatures/>
        </Container>
        <Container fluid my={120}>
          <Testimonials/>
        </Container>
        <Container fluid my={120}>
          <Flex justify="space-evenly" align="center">
            <Image
              src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
              alt="get started image" width={500}
              radius="md"/>
            <Stack>
              <Title>Get started in just 3 steps</Title>
              <List type="ordered">
                <List.Item>Tell us about your business</List.Item>
                <List.Item>Upload you product catalog</List.Item>
                <List.Item>Get access to your business dashboard</List.Item>
              </List>
            </Stack>
          </Flex>
        </Container>
        <Container fluid mt={120}>
          <Faqs/>
        </Container>
      </Container>
    </Wrapper>
  );
}
