import {Card, createStyles, Text} from '@mantine/core';
import Link from "next/link";

const useStyles = createStyles((theme, _params, getRef) => {
  const image = getRef('image');

  return {
    card: {
      position: 'relative',
      height: 280,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],

      [`&:hover .${image}`]: {
        transform: 'scale(1.05)',
      },
    },

    image: {
      ref: image,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
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
      marginBottom: 5,
    },

    price: {
      color: theme.white,
    },
  };
});

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

          <Text size="sm" className={classes.price}>
            Average price - ${price}
          </Text>
        </div>
      </div>
    </Card>
  );
}

export default CategoryCard;
