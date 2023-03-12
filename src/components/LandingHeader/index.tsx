import {
  Box,
  Burger,
  Button,
  Center,
  Container,
  createStyles,
  Drawer,
  Group,
  Header,
  MantineTheme,
  Menu,
  ScrollArea,
  Stack,
  Text,
} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import Image from "next/image";
import LogoImgColor from "@/assets/logo/logo-color.png";
import LogoImgWhite from "@/assets/logo/logo-white.png";
import Link from "next/link";
import {MdKeyboardArrowDown} from "react-icons/md";
import {useScrollPosition} from '@/hooks/useScrollPosition';
import React from "react";

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme: MantineTheme, {scrollPosition}: any) => ({
  wrapper: {
    backgroundColor: scrollPosition > 5 ? 'white' : 'transparent',
    borderBottom: 'none',
    transition: 'all ease 150ms',
    boxShadow: scrollPosition > 5 ? theme.shadows.sm : 'none',
  },

  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    [theme.fn.smallerThan('sm')]: {
      paddingLeft: theme.spacing.sm,
      paddingRight: theme.spacing.sm,
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  navbarBrand: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none'
  },

  imgBrand: {
    borderRadius: theme.radius.sm,
  },

  title: {
    color: scrollPosition > 5 ? theme.black : theme.white,
    fontWeight: 500,
    fontSize: theme.fontSizes.lg
  },

  link: {
    display: 'block',
    lineHeight: 1,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: scrollPosition > 5 ? theme.black : theme.white,
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    textTransform: 'capitalize',
    backgroundColor: 'transparent',

    '&:hover': {
      backgroundColor: scrollPosition < 5 ? theme.colors.gray[7] : theme.colors.gray[1],
      // color: scrollPosition < 5 ? theme.primaryColor : theme.primaryColor,
      transition: 'all ease 200ms'
    },
  },

  subLink: {
    display: 'block',
    lineHeight: 1,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.black,
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    textTransform: 'capitalize',
    backgroundColor: 'transparent',

    '&:hover': {
      backgroundColor: scrollPosition < 5 ? theme.colors.gray[7] : theme.colors.gray[1],
      color: scrollPosition < 5 ? theme.white : theme.black,
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
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('md')]: {
      display: 'none',
    },
  },
}));

interface LinkProps {
  label: string
  link: string
  links?: { label: string, link: string }[]
}

interface IProps {
  mainLinks: LinkProps[]
  userLinks: LinkProps[]
  containNav: boolean | undefined
}

function LandingHeader({mainLinks, userLinks, containNav}: IProps) {
  const [drawerOpened, {toggle: toggleDrawer, close: closeDrawer}] = useDisclosure(false);
  const scrollPosition: number = useScrollPosition()
  const {classes} = useStyles({scrollPosition: containNav ? scrollPosition : 6});

  const mainItems = mainLinks.concat(userLinks).map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={`lg-${item.link}`} component={Link} href={`/${item.link}`}
                 className={classes.subLink}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={`lg-${link.link}`} trigger="hover" withinPortal>
          <Menu.Target>
            <Button
              component={Link}
              href={`/${link.link}`}
              className={classes.link}
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
      <Button component={Link} key={link.label} href={`/${link.link}`} className={classes.link}>
        {link.label}
      </Button>
    );
  });

  const smallMainItems = mainLinks.concat(userLinks).map((link) => {
    const menuItems = link.links?.map((item) => (
      <Button
        key={`sm-${item.link}`}
        component={Link}
        href={`/${item.link}`}
        variant="subtle"
        color="dark"
        sx={{textTransform: 'capitalize'}}>
        {item.label}</Button>
    ));

    return (
      <>
        <Button
          key={`sm-${link.link}`}
          component={Link}
          href={`/${link.link}`}
          variant="subtle"
          color="dark"
          sx={{textTransform: 'capitalize'}}>
          {link.label}
        </Button>
        {menuItems}
      </>
    );
  });

  return (
    <Box sx={{position: "sticky", top: 0, zIndex: 2}}>
      <Header height={HEADER_HEIGHT} className={classes.wrapper}>
        <Container fluid className={classes.inner} px={16 * 3}>
          <Box className={classes.navbarBrand} component={Link} href="/">
            <Image src={containNav && scrollPosition > 5 ? LogoImgColor : LogoImgWhite} alt="Meal mart logo"
                   height={48} className={classes.imgBrand}/>
            <Text className={classes.title} ml="sm">Meal Mart</Text>
          </Box>
          <Group spacing={0} className={classes.hiddenMobile}>{mainItems}</Group>
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
            color={containNav && scrollPosition < 5 ? '#fff' : '#000'}/>
        </Container>
      </Header>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        padding="md"
        title={
          <Box className={classes.navbarBrand} component={Link} href="/">
            <Image src={LogoImgWhite} alt="Meal mart logo" height={48} className={classes.imgBrand}/>
            <Text size="lg" ml="sm" color="dark" weight={600}>Meal Mart</Text>
          </Box>
        }
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea
          sx={{
            height: 'calc(100vh - 60px)',
            // backgroundColor: containNav && scrollPosition < 5 ? theme.colors.dark[8] : theme.white
          }}
          mx="-md">
          <Stack spacing="xs" pl="lg" align="flex-start">
            {smallMainItems}
          </Stack>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}

export default LandingHeader;
