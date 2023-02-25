import {
  ActionIcon,
  Badge,
  Card,
  Center,
  createStyles,
  Flex,
  Group,
  Image,
  MantineTheme,
  Stack,
  Text,
  ThemeIcon
} from '@mantine/core';
import {
  MdOutlineDeliveryDining,
  MdOutlineFavoriteBorder,
  MdOutlineShare,
  MdOutlineTakeoutDining,
  MdStar
} from "react-icons/md";

const useStyles = createStyles((theme: MantineTheme) => ({
  card: {
    position: 'relative',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    border: `2px solid transparent`,

    [`&:hover`]: {
      transform: 'scale(1.03)',
      transition: `all ease-in-out 150ms`,
      cursor: 'pointer'
    },
  },
  rating: {
    position: 'absolute',
    top: theme.spacing.xs,
    right: theme.spacing.xs + 2,
    pointerEvents: 'none',
  },
  title: {
    display: 'block',
    fontSize: theme.fontSizes.lg
  },
  action: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    }),
  },
}));

interface IProps {
  category: string
  image: string
  link: string
  title: string
  ratings: string
}

function FoodListItem({image, category, title, link, ratings}: IProps) {
  const {classes, theme} = useStyles();
  const linkProps = {href: link, target: '_blank', rel: 'noopener noreferrer'};

  return (
    <Card className={classes.card}>
      <Card.Section>
        <a {...linkProps}>
          <Image src={image} height={200} alt={`${title} image`} fit="cover" radius="md"/>
        </a>
      </Card.Section>

      <Badge className={classes.rating} size="md" radius="xs" variant="filled">
        {category}
      </Badge>
      <Stack mt="md">
        <Flex align="center" justify="space-between">
          <Text className={classes.title} weight={500} component="a" {...linkProps}>{title}</Text>
          <Flex gap={4} align="center">
            <MdStar size={14}/>
            <Text>{ratings}</Text>
          </Flex>
        </Flex>

        <Group position="apart">
          <Center>
            <Flex gap="sm">
              <Flex gap="xs">
                <ThemeIcon variant="light"><MdOutlineDeliveryDining/></ThemeIcon>
                <Text size="sm">Delivery</Text>
              </Flex>
              <Flex gap="xs">
                <ThemeIcon variant="light"><MdOutlineTakeoutDining/></ThemeIcon>
                <Text size="sm">Takeout</Text>
              </Flex>
            </Flex>
          </Center>

          <Group spacing={8} mr={0}>
            <ActionIcon className={classes.action}>
              <MdOutlineFavoriteBorder size={16} color={theme.colors.red[6]}/>
            </ActionIcon>
            <ActionIcon className={classes.action}>
              <MdOutlineShare size={16}/>
            </ActionIcon>
          </Group>
        </Group>
      </Stack>
    </Card>
  );
}

export default FoodListItem;
