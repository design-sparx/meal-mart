import {ActionIcon, Container, createStyles, Flex, Group, Text, ThemeIcon, Title} from '@mantine/core';
import LogoImg from "@/assets/logo/logo-color.png";
import Image from "next/image";
import {FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa";
import {MdLocationPin, MdMailOutline, MdOutlinePhone} from "react-icons/md";
import LanguagePicker from "@/components/LanguagePicker";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: 200,

    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center',
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  wrapper: {
    width: 160,
  },

  link: {
    display: 'block',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  afterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  social: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

function Footer({data}: FooterLinksProps) {
  const {classes} = useStyles();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Flex align="center" gap="sm" mb="md" className={classes.title}>
            <Image src={LogoImg} alt="Meal mart logo" height={48}/>
            <Title order={4}>Food delivery</Title>
          </Flex>
          <LanguagePicker/>
        </div>
        <div className={classes.groups}>
          {groups}
        </div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © {new Date().getFullYear()}{' '}
          <a href="https://github.com/kelvins-lab" target="_blank" rel="noreferrer">kelvins-lab</a>.
          Designed with ❤ by <a href="https://lnk.bio/kelvink96" target="_blank" rel="noreferrer">Kelvin</a>. All rights
          reserved
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg" component="a" href="https://twitter.com/kelvink_96" target="_blank">
            <FaTwitter size={18}/>
          </ActionIcon>
          <ActionIcon size="lg" component="a" href="https://www.linkedin.com/in/kelvink96/" target="_blank">
            <FaLinkedinIn size={18}/>
          </ActionIcon>
          <ActionIcon size="lg" component="a" href="https://github.com/kelvink96" target="_blank">
            <FaGithub size={18}/>
          </ActionIcon>
          <ActionIcon size="lg" component="a" href="https://www.facebook.com/kelvinkk96" target="_blank">
            <FaFacebook size={18}/>
          </ActionIcon>
          <ActionIcon size="lg" component="a" href="https://www.instagram.com/kelvink_96/" target="_blank">
            <FaInstagram size={18}/>
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}

export default Footer;
