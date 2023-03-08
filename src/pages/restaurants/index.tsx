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
  Overlay,
  Stack,
  Text,
  Title
} from "@mantine/core";
import React, {useRef} from "react";
import {MdOutlineFavorite, MdOutlineForum, MdOutlinePhotoSizeSelectActual, MdOutlineStar} from "react-icons/md";
import RestaurantMenu from "@/components/RestaurantMenu";
import OrderSummary from "@/components/OrderSummary";
import RestaurantReviews from "@/components/RestaurantReviews";
import {scrollToView} from "@/utils/scrollToView";

const useStyles = createStyles((theme) => ({
  wrapper: {
  },
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
    paddingBottom: theme.spacing.xl,
    zIndex: 1,
    position: 'relative',
    overflow: 'hidden',

    [theme.fn.smallerThan('sm')]: {
      height: 500,
      paddingBottom: theme.spacing.xl * 3,
    },
  },
  heroText: {
    color: theme.white
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
    zIndex: 1000,
  },
  ordersWrapper: {
    position: "sticky",
    top: 0,
    paddingTop: theme.spacing.lg
  },
  menuWrapper: {
    backgroundColor: theme.colors.gray[0],
    paddingLeft: theme.spacing.xl,
    paddingRight: theme.spacing.xl,
  }
}))

export default function Home() {
  const {classes} = useStyles();
  const starterRef = useRef(null);
  const mainRef = useRef(null);
  const dessertRef = useRef(null);
  const drinksRef = useRef(null);
  const reviewsRef = useRef(null);

  return (
    <Wrapper containNav={true}>
      <Box className={classes.hero}>
        <Overlay
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, .65) 40%)"
          opacity={1}
          zIndex={0}
        />
        <Container fluid className={classes.heroContainer}>
          <Flex mb="lg" gap="xs" align="center">
            <Badge size="xl" leftSection={<MdOutlineStar size={14}/>}>9.3</Badge>
            <Text className={classes.heroText}>310 reviews</Text>
          </Flex>
          <Flex align="center" justify="space-between" sx={{width: '100%'}}>
            <Stack>
              <Title className={classes.heroText}>Pinocchio&apos;s Servings</Title>
              <Flex gap="xs" align="center">
                <Text className={classes.heroText}>Mexican</Text>
                <Text className={classes.heroText}>-</Text>
                <Text className={classes.heroText}>8 spo zas St, 499</Text>
                <Text className={classes.heroText}>-</Text>
                <Button className={classes.control} variant="white">Get directions</Button>
              </Flex>
            </Stack>
            <Flex gap="xs">
              <Button leftIcon={<MdOutlinePhotoSizeSelectActual/>} className={classes.control} variant="white">view
                photos</Button>
              <Button leftIcon={<MdOutlineFavorite/>} className={classes.control} variant="white">wishlist</Button>
            </Flex>
          </Flex>
        </Container>
      </Box>
      <Box component="div">
        <Flex gap="sm" className={classes.stickyTab}>
          <Button variant="subtle" onClick={() => scrollToView(starterRef)}>Starters</Button>
          <Button variant="subtle" onClick={() => scrollToView(mainRef)}>Main Course</Button>
          <Button variant="subtle" onClick={() => scrollToView(dessertRef)}>Dessert</Button>
          <Button variant="subtle" onClick={() => scrollToView(drinksRef)}>Drinks</Button>
          <Divider orientation="vertical"/>
          <Button variant="light" leftIcon={<MdOutlineForum size={18}/>}
                  onClick={() => scrollToView(reviewsRef)}>Reviews</Button>
        </Flex>
      </Box>
      <Box sx={{overflow: 'hidden'}}>
        <Grid className={classes.menuWrapper} gutterXs="md" gutterMd="xl">
          <Grid.Col md={12} lg={8}>
            <Box>
              <div ref={starterRef}>
                <RestaurantMenu title="Starters"/>
              </div>
              <div ref={mainRef}>
                <RestaurantMenu title="Main courses"/>
              </div>
              <div ref={dessertRef}>
                <RestaurantMenu title="Desserts"/>
              </div>
              <div ref={drinksRef}>
                <RestaurantMenu title="Drinks"/>
              </div>
            </Box>
          </Grid.Col>
          <Grid.Col md={12} lg={4}>
            <div className={classes.ordersWrapper}>
              <OrderSummary/>
            </div>
          </Grid.Col>
        </Grid>
      </Box>
      <Container fluid mt={60} px={30}>
        <div ref={reviewsRef}>
          <RestaurantReviews/>
        </div>
      </Container>
    </Wrapper>
  )
}
