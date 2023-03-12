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
  LoadingOverlay,
  Overlay,
  Paper,
  Stack,
  Text,
  Textarea,
  TextInput,
  ThemeIcon,
  Title
} from "@mantine/core";
import React, {useState} from "react";
import {MdOutlineHelpCenter, MdOutlineLocationOn, MdOutlineSend} from "react-icons/md";
import {hasLength, isEmail, isNotEmpty, useForm} from "@mantine/form";
import {showNotification} from "@mantine/notifications";

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
    height: 650,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    zIndex: 1,
    position: 'relative',

    [theme.fn.smallerThan('md')]: {
      height: 500,
      paddingTop: theme.spacing.xl * 3,
      justifyContent: 'center'
    },
  },
  title: {
    color: theme.white,
    fontSize: 48,
    fontWeight: 700,
    lineHeight: 1.1,
    textAlign: 'center',

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
        <Box sx={{backgroundColor: theme.colors.gray[0]}}>
          <Container pt={80} pb={120}>
            <Grid gutterXs="md" gutterMd="xl">
              <Grid.Col md={8}>
                <Paper p="md" shadow="sm" sx={{position: 'relative'}}>
                  <LoadingOverlay visible={loading}/>
                  <Box component="form" onSubmit={form.onSubmit(() => {
                    console.log('')
                  })}>
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
                      <Button type="submit" leftIcon={<MdOutlineSend size={14}/>} onClick={handleSubmit}>Submit</Button>
                    </Group>
                  </Box>
                </Paper>
              </Grid.Col>
              <Grid.Col md={4}>
                <Stack>
                  <Paper p="md" shadow="sm">
                    <Stack spacing="xs">
                      <Flex gap="sm">
                        <ThemeIcon variant="outline">
                          <MdOutlineHelpCenter/>
                        </ThemeIcon>
                        <Text size="lg" weight={500}>Help Center</Text>
                      </Flex>
                      <Anchor<'a'> size="sm">+254 706 094 433</Anchor>
                      <Anchor<'a'> size="sm">help@fooddelivery.com</Anchor>
                      <Text size="sm">Open on: Monday - Friday (9am - 6pm)</Text>
                    </Stack>
                  </Paper>
                  <Paper p="md" shadow="sm">
                    <Stack spacing="xs">
                      <Flex gap="sm">
                        <ThemeIcon variant="outline">
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
      </Box>
    </Wrapper>
  );
}
