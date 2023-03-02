import {Card, createStyles, getStylesRef, rem, Text} from '@mantine/core';
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    height: rem(280),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],

    [`&:hover .${getStylesRef('image')}`]: {
      transform: 'scale(1.03)',
    },
  },

  image: {
    ...theme.fn.cover(),
    ref: getStylesRef('image'),
    backgroundSize: 'cover',
    transition: 'transform 500ms ease',
  },

  overlay: {
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)',
  },

  content: {
    height: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    zIndex: 1,
  },

  title: {
    color: theme.white,
    marginBottom: rem(5),
  },

  bodyText: {
    color: theme.colors.dark[2],
    marginLeft: rem(7),
  },

  price: {
    color: theme.white,
  },
}));

interface IProps {
  link: string
  imageUrl: string
  title: string
  price: number
  size: 'sm' | 'md'
}

function CategoryCard({imageUrl, title, link, price, size}: IProps) {
  const {classes} = useStyles();

  return (
    <Card
      p="lg"
      shadow="lg"
      className={classes.card}
      radius="md"
      component={Link}
      href={link}
      target="_blank"
      sx={{height: size === "md" ? 280 : 150}}
    >
      <div className={classes.image} style={{backgroundImage: `url(${imageUrl})`}}/>
      <div className={classes.overlay}/>

      <div className={classes.content}>
        <div>
          <Text size="lg" className={classes.title} weight={500}>
            {title}
          </Text>

          {size === 'md' &&
						<Text size="sm" className={classes.price}>
							Average price - ${price}
						</Text>
          }
        </div>
      </div>
    </Card>
  );
}

export default CategoryCard;
