import {
  Box,
  Burger,
  Button,
  Center,
  Container,
  createStyles,
  Drawer,
  Group,
  Header, MantineTheme,
  Menu,
  rem,
  ScrollArea,
  Stack,
  Text,
} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import Image from "next/image";
import LogoImg from "@/assets/logo/logo-no-background.png";
import Link from "next/link";
import {MdKeyboardArrowDown} from "react-icons/md";

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme: MantineTheme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: rem(24),
    paddingRight: rem(24),
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  title: {
    color: theme.black
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    textTransform: 'capitalize',
    backgroundColor: 'transparent',

    '&:hover': {
      color: theme.primaryColor,
      transition: 'all ease 200ms'
    },
  },

  linkActive: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  linkLabel: {
    marginRight: '5px',
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
  label: string
  link: string
  links: { label: string, link: string }[]
}

interface DoubleHeaderProps {
  mainLinks: LinkProps[];
  userLinks: LinkProps[];
}

function LandingHeader({mainLinks, userLinks}: DoubleHeaderProps) {
  const [drawerOpened, {toggle: toggleDrawer, close: closeDrawer}] = useDisclosure(false);
  const {classes} = useStyles();

  const mainItems = mainLinks.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" withinPortal>
          <Menu.Target>
            <Button
              component={Link}
              href={link.link}
              className={classes.link}
              variant="subtle"
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <MdKeyboardArrowDown size="0.9rem"/>
              </Center>
            </Button>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Button component={Link}  key={link.label} href={link.link} variant="subtle" className={classes.link}>
        {link.label}
      </Button>
    );
  });

  const secondaryItems = userLinks.map((item) => (
    <Button component={Link} href={item.link} key={item.label} variant="subtle" className={classes.link}>
      {item.label}
    </Button>
  ));

  return (
    <Box sx={{position: "sticky", top: 0, zIndex: 2}}>
      <Header height={HEADER_HEIGHT} sx={{backgroundColor: "transparent"}}>
        <Container fluid className={classes.inner} px={16 * 3}>
          <Group className={classes.title}>
            <Image src={LogoImg} alt="Meal mart logo" height={40}/>
            <Text component={Link} href="/">Food delivery</Text>
          </Group>
          <Group spacing="xs">
            {mainItems}
          </Group>
          <Group spacing="xs">{secondaryItems}</Group>
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
          <Stack spacing={0} className={classes.link}>
            {mainItems}
          </Stack>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}

export default LandingHeader;
