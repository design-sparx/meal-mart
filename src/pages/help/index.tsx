import Wrapper from "@/layout";
import {
  Box,
  Button,
  Center,
  Container,
  createStyles,
  Flex,
  Overlay,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
  Title,
  UnstyledButton
} from "@mantine/core";
import React from "react";
import {MdOutlineBook, MdOutlineSearch} from "react-icons/md";
import FaqsData from "@/data/Faqs.json";
import {useMediaQuery} from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  heroContainer: {
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
  heroTitle: {
    color: theme.white,
    fontSize: 48,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 28,
    },
  },
  heroText: {
    color: theme.white,
    fontSize: 24,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 18,
    },
  },
  control: {
    textTransform: 'capitalize',
    width: 600,

    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },
  categoryCard: {
    height: 160,
    position: 'relative',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    color: theme.white,
    borderRadius: theme.radius.sm,
    padding: theme.spacing.xl,
    overflow: 'hidden',
    transition: 'background-size 300ms ease',

    '&:hover': {
      backgroundSize: '105%',
    },
  },
  categoryLabel: {
    color: theme.white,
    zIndex: 2,
    position: 'relative',
  },
  subtitle: {
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
  linkControl: {
    boxShadow: theme.shadows.sm,
    padding: theme.spacing.md,
    borderRadius: theme.radius.sm,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,

    '&:hover': {
      transform: 'scale(1.05)',
      transition: 'all ease 200ms',
      fontWeight: 700
    }
  }
}));

export default function Help() {
  const {classes, theme} = useStyles();
  const smallScreen = useMediaQuery('(max-width: 426px)');

  return (
    <Wrapper containNav={true}>
      <Stack>
        <Box className={classes.hero}>
          <Overlay
            gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, .65) 40%)"
            opacity={1}
            zIndex={0}
          />
          <Container fluid className={classes.heroContainer}>
            <Center sx={{height: '100%'}}>
              <Stack align="center">
                <Title className={classes.heroTitle}>Help and support</Title>
                <Text className={classes.heroText} mb="xl">Search questions or useful articles</Text>
                <TextInput
                  className={classes.control}
                  icon={<MdOutlineSearch size={24}/>}
                  radius="sm"
                  size="lg"
                  rightSection={<Button size="md" variant="white">Search</Button>}
                  placeholder="what are you looking for?"
                  rightSectionWidth={110}/>
              </Stack>
            </Center>
          </Container>
        </Box>
        <Container pt={80} pb={120}>
          <Title align="center" size={smallScreen ? 28 : 48} mb="xl">Select topic</Title>
          <Text className={classes.subtitle} align="center" mb="xl">Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
          <SimpleGrid
            cols={4}
            spacing="xl"
            breakpoints={[
              {maxWidth: 'lg', cols: 3, spacing: 'lg'},
              {maxWidth: 'md', cols: 2, spacing: 'md'},
              {maxWidth: 'sm', cols: 1, spacing: 'sm'},
              {maxWidth: 'xs', cols: 1, spacing: 'sm'},
            ]}>
            {FaqsData.categories.map((_, idx) => (
              <UnstyledButton
                style={{backgroundImage: `url(${_.image})`}}
                className={classes.categoryCard}
                key={`faq-item-${_.label}-${idx}`}
              >
                <Overlay color="#000" opacity={0.6} zIndex={1}/>
                <Text size="xl" align="center" weight={700} className={classes.categoryLabel}>
                  {_.label}
                </Text>
              </UnstyledButton>
            ))}
          </SimpleGrid>
        </Container>
        <Box sx={{backgroundColor: theme.colors.gray[0]}}>
          <Container pt={80} pb={120}>
            <Title align="center" size={smallScreen ? 28 : 48} mb="xl">Relevant links</Title>
            <Text className={classes.subtitle} align="center" mb="xl">Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            <SimpleGrid
              cols={3}
              spacing="lg"
              breakpoints={[
                {maxWidth: 'md', cols: 2, spacing: 'md'},
                {maxWidth: 'sm', cols: 1, spacing: 'sm'},
                {maxWidth: 'xs', cols: 1, spacing: 'sm'},
              ]}>
              {Array.from({length: 10}).map((_, idx) => (
                <UnstyledButton key={`help-article-${idx}`} className={classes.linkControl}>
                  <Flex gap="md">
                    <ThemeIcon variant="default" size="md"><MdOutlineBook/></ThemeIcon>
                    <Text>A pellentesque sit amet porttitor {idx}</Text>
                  </Flex>
                </UnstyledButton>
              ))}
            </SimpleGrid>
          </Container>
        </Box>
      </Stack>
    </Wrapper>
  )
}
