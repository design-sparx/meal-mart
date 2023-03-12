import Wrapper from "@/layout";
import {
  Badge,
  Box,
  Button,
  Container,
  createStyles,
  Divider,
  Flex,
  Grid,
  Image,
  Modal,
  Overlay,
  Stack,
  Text,
  Title
} from "@mantine/core";
import React, {useRef, useState} from "react";
import {
  MdLocationPin,
  MdOutlineFavoriteBorder,
  MdOutlineForum,
  MdOutlineListAlt,
  MdOutlinePhotoSizeSelectActual,
  MdOutlineStar
} from "react-icons/md";
import RestaurantMenu from "@/components/RestaurantMenu";
import OrderSummary from "@/components/OrderSummary";
import RestaurantReviews from "@/components/RestaurantReviews";
import {scrollToView} from "@/utils/scrollToView";
import {Carousel} from "@mantine/carousel";
import {useMediaQuery} from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  wrapper: {},
  hero: {
    position: 'relative',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden'
  },
  heroContainer: {
    height: 550,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: theme.spacing.xl * 2,
    zIndex: 1,
    position: 'relative',
    overflow: 'hidden',
    paddingLeft: theme.spacing.xl,
    paddingRight: theme.spacing.xl,

    [theme.fn.smallerThan('md')]: {
      height: 500,
      paddingBottom: theme.spacing.xl * 3,
      alignItems: 'center',
      gap: 8
    },
  },
  heroTitle: {
    color: theme.white,
    fontSize: 48,

    [theme.fn.smallerThan('md')]: {
      textAlign: 'center',
    },

    [theme.fn.smallerThan('sm')]: {
      fontSize: 28,
      textAlign: 'center',
    },
  },
  heroText: {
    color: theme.white,
  },
  control: {
    textTransform: 'capitalize'
  },
  stickyTab: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    position: "sticky",
    top: 60,
    padding: theme.spacing.md,
    borderBottom: `1px solid ${theme.colors.gray[3]}`,
    borderTop: `1px solid ${theme.colors.gray[3]}`,
    zIndex: 2,
  },
  ordersWrapper: {
    paddingTop: theme.spacing.xl,

    [theme.fn.smallerThan('md')]: {
      paddingBottom: 64,
    },
  },
  menuWrapper: {
    backgroundColor: theme.colors.gray[0],
    paddingLeft: theme.spacing.xl,
    paddingRight: theme.spacing.xl,
  },
  title: {
    fontSize: 48,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 36,
    },
  }
}))

const images = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
];

export default function Home() {
  const {classes} = useStyles();
  const starterRef = useRef(null);
  const mainRef = useRef(null);
  const dessertRef = useRef(null);
  const drinksRef = useRef(null);
  const reviewsRef = useRef(null);
  const ordersRef = useRef(null);
  const [openGallery, setOpenGallery] = useState(false);
  const mediumScreen = useMediaQuery('(max-width: 769px)');

  const handleOpenGallery = (): void => {
    setOpenGallery(true);
  }

  const handleCloseGallery = (): void => {
    setOpenGallery(false);
  }

  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} alt="restaurant image"/>
    </Carousel.Slide>
  ));

  return (
    <Wrapper containNav={true}>
      <Box className={classes.hero}>
        <Overlay
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, .65) 40%)"
          opacity={1}
          zIndex={0}
        />
        <Container fluid className={classes.heroContainer}>
          <Flex
            align={mediumScreen ? 'center' : 'flex-end'}
            justify="space-between"
            sx={{width: '100%'}}
            mb="md"
            direction={mediumScreen ? 'column' : 'row'}
            gap={mediumScreen ? 'md' : 0}>
            <Stack>
              <Title className={classes.heroTitle}>Pinocchio&apos;s Servings</Title>
              <Flex gap={mediumScreen ? 'sm' : 'xs'} align="center" justify={mediumScreen ? 'center' : 'flex-start'}>
                <Text className={classes.heroText}>Cuisine: Mexican</Text>
                <Text className={classes.heroText}>-</Text>
                <Text className={classes.heroText}>Location: 8 spo zas St, 499</Text>
                {!mediumScreen && <>
									<Text className={classes.heroText}>-</Text>
									<Button
										className={classes.control}
										leftIcon={<MdLocationPin size={14}/>}
										variant="white">
										Get directions
									</Button>
								</>}
              </Flex>
            </Stack>
            <Flex gap={mediumScreen ? 'sm' : 'md'} wrap="wrap" justify={mediumScreen ? 'center' : 'flex-start'}>
              {mediumScreen && <>
								<Text className={classes.heroText}>-</Text>
								<Button
									className={classes.control}
									leftIcon={<MdLocationPin size={14}/>}
									variant="white">
									Get directions
								</Button>
							</>}
              <Button
                leftIcon={<MdOutlinePhotoSizeSelectActual/>}
                className={classes.control}
                variant="white"
                onClick={handleOpenGallery}>
                view photos
              </Button>
              <Button
                leftIcon={<MdOutlineFavoriteBorder/>}
                className={classes.control}
                variant="white">
                add to favorites
              </Button>
            </Flex>
          </Flex>
          <Flex gap="xs" align="center">
            <Badge size="xl" leftSection={<MdOutlineStar size={14}/>}>9.3</Badge>
            <Text className={classes.heroText}>310 reviews</Text>
          </Flex>
        </Container>
      </Box>
      <Flex gap={mediumScreen ? 'xs' : 'sm'} className={classes.stickyTab} sx={{width: '100%', overflowY: 'auto'}}>
        <Button variant="subtle" onClick={() => scrollToView(starterRef)}>Starters</Button>
        <Button variant="subtle" onClick={() => scrollToView(mainRef)}>Main Course</Button>
        <Button variant="subtle" onClick={() => scrollToView(dessertRef)}>Dessert</Button>
        <Button variant="subtle" onClick={() => scrollToView(drinksRef)}>Drinks</Button>
        <Divider orientation="vertical"/>
        <Button
          variant="outline"
          leftIcon={<MdOutlineForum size={14}/>}
          onClick={() => scrollToView(reviewsRef)}>Reviews</Button>
        {mediumScreen &&
					<Button
						variant="outline"
						leftIcon={<MdOutlineListAlt size={14}/>}
						onClick={() => scrollToView(ordersRef)}>Order summary</Button>
        }
      </Flex>
      <Box sx={{overflow: 'hidden'}}>
        <Grid className={classes.menuWrapper} gutterXs="md" gutterMd="xl" gutterLg={48}>
          <Grid.Col md={12} lg={8}>
            <Box>
              <div ref={starterRef} style={{paddingTop: 48, paddingBottom: 48}}>
                <RestaurantMenu title="Starters"/>
              </div>
              <div ref={mainRef} style={{paddingTop: 48, paddingBottom: 48}}>
                <RestaurantMenu title="Main courses"/>
              </div>
              <div ref={dessertRef} style={{paddingTop: 48, paddingBottom: 48}}>
                <RestaurantMenu title="Desserts"/>
              </div>
              <div ref={drinksRef} style={{paddingTop: 48, paddingBottom: 48}}>
                <RestaurantMenu title="Drinks"/>
              </div>
            </Box>
          </Grid.Col>
          <Grid.Col md={12} lg={4}>
            <Box component="div" className={classes.ordersWrapper} ref={ordersRef}>
              <OrderSummary/>
            </Box>
          </Grid.Col>
        </Grid>
      </Box>
      <Container pt={80} pb={120}>
        <div ref={reviewsRef}>
          <RestaurantReviews/>
        </div>
      </Container>
      <Modal
        opened={openGallery}
        onClose={handleCloseGallery}
        centered
        title="Restaurant gallery album"
        size="xl"
      >
        <Carousel
          mx="auto"
          withIndicators
          loop
          styles={{
            indicator: {
              width: 12,
              height: 4,
              transition: 'width 250ms ease',

              '&[data-active]': {
                width: 40,
              },
            },
          }}>
          {slides}
        </Carousel>
      </Modal>
    </Wrapper>
  )
}
