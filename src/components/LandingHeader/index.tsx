import {useState} from 'react';
import {
  Anchor,
  Box,
  Burger,
  Container,
  createStyles,
  Drawer,
  Group,
  Header,
  ScrollArea,
  Stack,
  Title
} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import Image from "next/image";
import LogoImg from "@/assets/logo/logo-no-background.png"

const HEADER_HEIGHT = 'auto';

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padddingLeft: theme.spacing.xl * 4,
    padddingRight: theme.spacing.xl * 4,
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  title: {
    color: theme.black
  },

  links: {
    paddingTop: theme.spacing.lg,
    height: HEADER_HEIGHT,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    color: theme.black,

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  mainLinks: {
    marginRight: -theme.spacing.sm,
  },

  mainLink: {
    textTransform: 'capitalize',
    color: theme.black,
    padding: `8px ${theme.spacing.sm}px`,
    fontWeight: 600,
    borderBottom: '2px solid transparent',
    transition: 'border-color 100ms ease, color 100ms ease',

    '&:hover': {
      color: theme.primaryColor,
      textDecoration: 'none',
    },
  },

  secondaryLink: {
    color: theme.black,
    fontWeight: 600,
    textTransform: 'capitalize',
    transition: 'color 100ms ease',

    '&:hover': {
      color: theme.primaryColor,
      textDecoration: 'none',
    },
  },

  mainLinkActive: {
    color: theme.black,
    borderBottomColor: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 5 : 6],
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}));

interface LinkProps {
  label: string;
  link: string;
}

interface DoubleHeaderProps {
  mainLinks: LinkProps[];
  userLinks: LinkProps[];
}

function LandingHeader({mainLinks, userLinks}: DoubleHeaderProps) {
  const [drawerOpened, {toggle: toggleDrawer, close: closeDrawer}] = useDisclosure(false);
  const {classes, cx, theme} = useStyles();
  const [active, setActive] = useState(0);

  const mainItems = mainLinks.map((item, index) => (
    <Anchor<'a'>
      href={item.link}
      key={item.label}
      className={cx(classes.mainLink, {[classes.mainLinkActive]: index === active})}
      onClick={(event) => {
        event.preventDefault();
        setActive(index);
      }}
    >
      {item.label}
    </Anchor>
  ));

  const secondaryItems = userLinks.map((item) => (
    <Anchor<'a'>
      href={item.link}
      key={item.label}
      onClick={(event) => event.preventDefault()}
      className={classes.secondaryLink}
    >
      {item.label}
    </Anchor>
  ));

  return (
    <Box sx={{position: "sticky", zIndex: 2}}>
      <Header height={HEADER_HEIGHT} sx={{backgroundColor: "transparent"}}>
        <Container fluid className={classes.inner} px={16 * 3}>
          <Group className={classes.title}>
            <Image src={LogoImg} alt="Meal mart logo" height={48}/>
            <Title order={3}>Food delivery</Title>
          </Group>
          <div className={classes.links}>
            <Group position="right">{secondaryItems}</Group>
            <Group spacing={0} position="right" className={classes.mainLinks}>
              {mainItems}
            </Group>
          </div>
          <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop}/>
        </Container>
      </Header>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea sx={{height: 'calc(100vh - 60px)'}} mx="-md">
          <Stack>{secondaryItems}</Stack>
          <Stack spacing={0} className={classes.mainLinks}>
            {mainItems}
          </Stack>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}

export default LandingHeader;
