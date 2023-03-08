import Wrapper from "@/layout";
import {
  Anchor,
  Box,
  Button,
  Container,
  createStyles,
  Flex,
  Grid,
  Group,
  Overlay,
  Paper,
  Stack,
  Text,
  Textarea,
  TextInput,
  ThemeIcon,
  Title
} from "@mantine/core";
import React from "react";
import {MdOutlineHelpCenter, MdOutlineLocationOn} from "react-icons/md";
import {hasLength, isEmail, isNotEmpty, useForm} from "@mantine/form";

const useStyles = createStyles((theme) => ({
  wrapper: {
    overflow: 'hidden'
  },
  hero: {
    position: 'relative',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  container: {
    height: 500,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    zIndex: 1,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      height: 500,
      paddingBottom: theme.spacing.xl * 3,
    },
  },
  title: {
    color: theme.white,
    fontSize: 54,
    fontWeight: 900,
    lineHeight: 1.1,
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      fontSize: 40,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
      lineHeight: 1.3,
    },
  },
  description: {
    color: theme.white,
    fontSize: 32,
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.sm,
    },
  },
}));

export default function Contact() {
  const {classes, theme} = useStyles();
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },

    validate: {
      name: hasLength({min: 2, max: 10}, 'Name must be 2-10 characters long'),
      subject: isNotEmpty('Enter your subject'),
      message: isNotEmpty('Enter your message'),
      email: isEmail('Invalid email'),
    },
  });

  return (
    <Wrapper>
      <Box className={classes.wrapper}>
        <Box className={classes.hero}>
          <Overlay
            gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, .65) 40%)"
            opacity={1}
            zIndex={0}
          />
          <Container className={classes.container}>
            <Title className={classes.title}>Contact Food Delivery.</Title>
            <Text className={classes.description} size="xl" mt="xl">The best of restaurant experience.</Text>
          </Container>
        </Box>
        <Container my={60}>
          <Grid gutterXs="md" gutterMd="xl">
            <Grid.Col md={6} lg={8}>
              <Paper withBorder p="md" shadow="sm" sx={{backgroundColor: theme.colors.gray[0]}}>
                <Box component="form" onSubmit={form.onSubmit(() => {})}>
                  <Title order={3} mb="md">Get in Touch</Title>
                  <Group grow>
                    <TextInput label="Name" placeholder="Your name" withAsterisk {...form.getInputProps('name')} />
                    <TextInput
                      label="Email"
                      placeholder="Your email"
                      withAsterisk
                      {...form.getInputProps('email')}
                    />
                  </Group>
                  <TextInput
                    label="Subject"
                    placeholder="Your subject"
                    withAsterisk
                    mt="md"
                    {...form.getInputProps('subject')}
                  />
                  <Textarea
                    label="Message"
                    placeholder="Your message"
                    withAsterisk
                    mt="md"
                    {...form.getInputProps('message')}
                  />
                  <Group position="right" mt="md">
                    <Button type="submit">Submit</Button>
                  </Group>
                </Box>
              </Paper>
            </Grid.Col>
            <Grid.Col md={6} lg={4}>
              <Stack>
                <Paper withBorder p="md" shadow="sm" sx={{backgroundColor: theme.colors.gray[0]}}>
                  <Stack spacing="xs">
                    <Flex gap="sm">
                      <ThemeIcon>
                        <MdOutlineHelpCenter/>
                      </ThemeIcon>
                      <Text size="lg" weight={500}>Help Center</Text>
                    </Flex>
                    <Anchor<'a'> size="sm">+254 706 094 433</Anchor>
                    <Anchor<'a'> size="sm">help@fooddelivery.com</Anchor>
                    <Text size="sm">Open on: Monday - Friday (9am - 6pm)</Text>
                  </Stack>
                </Paper>
                <Paper withBorder p="md" shadow="sm" sx={{backgroundColor: theme.colors.gray[0]}}>
                  <Stack spacing="xs">
                    <Flex gap="sm">
                      <ThemeIcon>
                        <MdOutlineLocationOn/>
                      </ThemeIcon>
                      <Text size="lg" weight={500}>Address</Text>
                    </Flex>
                    <Text size="sm">10th Avenue, Forest Road, Nairobi - 30100 - KE</Text>
                    <Text size="sm">Open on: Monday - Saturday (9am - 6pm)</Text>
                  </Stack>
                </Paper>
              </Stack>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>
    </Wrapper>
  );
}
