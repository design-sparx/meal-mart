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
import React from "react";
import {MdOutlineFavorite, MdOutlinePhotoSizeSelectActual, MdOutlineStar} from "react-icons/md";
import RestaurantMenu from "@/components/RestaurantMenu";
import OrderSummary from "@/components/OrderSummary";
import RestaurantReviews from "@/components/RestaurantReviews";

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  heroContainer: {
    height: 500,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: theme.spacing.xl,
    zIndex: 1,
    position: 'relative',

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
  }
}))

export default function Home() {
  const {classes} = useStyles();

  return (
    <Wrapper containNav={false}>
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
                <Button className={classes.control}>Get directions</Button>
              </Flex>
            </Stack>
            <Flex gap="md">
              <Button leftIcon={<MdOutlinePhotoSizeSelectActual/>} className={classes.control}>view photos</Button>
              <Button leftIcon={<MdOutlineFavorite/>} className={classes.control}>view photos</Button>
            </Flex>
          </Flex>
        </Container>
      </Box>
      <Container fluid>
        <Flex gap="md" sx={{position: "sticky", top: 0}}>
          <Button>Starters</Button>
          <Button>Main Course</Button>
          <Button>Dessert</Button>
          <Button>Drinks</Button>
          <Divider orientation="vertical"/>
          <Button>Reviews</Button>
        </Flex>
        <Grid>
          <Grid.Col md={12} lg={8}>
            <Box>
              <RestaurantMenu title="Starters"/>
              <RestaurantMenu title="Main courses"/>
              <RestaurantMenu title="Desserts"/>
              <RestaurantMenu title="Drinks"/>
            </Box>
          </Grid.Col>
          <Grid.Col md={12} lg={4}>
            <OrderSummary/>
          </Grid.Col>
        </Grid>
        <Box>
          <RestaurantReviews/>
        </Box>
      </Container>
    </Wrapper>
  )
}
