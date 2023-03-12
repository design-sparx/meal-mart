import Wrapper from '@/layout';
import React, {useEffect, useState} from 'react';
import {
  Accordion,
  Box,
  Button,
  Center,
  Chip,
  Collapse,
  Container,
  createStyles,
  Divider,
  Flex,
  Grid,
  Pagination,
  Radio,
  Slider,
  Stack,
  Switch,
  Text,
  TextInput,
  Title
} from "@mantine/core";
import {
  MdLocalOffer,
  MdLocationPin,
  MdMilitaryTech,
  MdOutlineFilterAlt,
  MdOutlineSearch,
  MdOutlineTune
} from "react-icons/md";
import {Carousel} from "@mantine/carousel";
import CategoryCard from "@/components/Categories/item";
import FoodList from "@/components/FoodList";
import CatagoriesData from "@/data/Categories.json";
import {useMediaQuery} from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  search: {
    padding: theme.spacing.xl,
    paddingTop: theme.spacing.xl * 1.5,
    backgroundColor: theme.colors.gray[0],
  },
  main: {
    padding: theme.spacing.xl
  },
  advert: {
    color: theme.white,
    background: "radial-gradient(circle, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .5) 40%), url(https://res.cloudinary.com/ddh7hfzso/image/upload/v1677323012/meal%20mart/delivery-image_gd2jpr.jpg)",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: theme.radius.sm,
    marginTop: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
  }
}))

function Index(): JSX.Element {
  const {classes} = useStyles();
  const [value, setValue] = useState('your-picks');
  const [opened, setOpened] = useState(false);
  const largeScreen = useMediaQuery('(max-width: 1024px)');
  const smallScreen = useMediaQuery('(max-width: 426px)');
  const mediumScreen = useMediaQuery('(max-width: 769px)');

  useEffect(() => {
    setOpened(true);
  }, [largeScreen]);

  return (
    <Wrapper>
      <Box className={classes.search}>
        <Container fluid>
          <Flex
            justify="space-between"
            align={smallScreen ? 'flex-start' : 'center'}
            gap="md"
            direction={smallScreen ? 'column' : 'row'}>
            <Stack align="flex-start">
              <Title order={4}>Location: 124 drive, Abc Rd</Title>
              <Button leftIcon={<MdLocationPin size={18}/>} variant="outline">Change address</Button>
            </Stack>
            <TextInput
              icon={<MdOutlineSearch size={24}/>}
              size="md"
              rightSection={
                <Button variant="white" size="sm">Search</Button>
              }
              placeholder="food, groceries, drinks etc"
              rightSectionWidth={96}
              sx={{width: mediumScreen ? '100%' : 500}}/>
          </Flex>
        </Container>
      </Box>
      <Box pt={40} pb={120}>
        <Container fluid px="lg">
          <Grid gutterXs="md" gutterMd="xl" gutterXl={48}>
            <Grid.Col mb={12} lg={3}>
              {largeScreen &&
								<Button
									onClick={() => setOpened((o) => !o)}
									variant="outline"
									leftIcon={<MdOutlineTune size={14}/>}>Filters</Button>
              }
              <Collapse in={opened}>
                <Stack sx={{position: "sticky", top: 70}}>
                  <Accordion variant="separated" multiple={true} defaultValue={["sort", "from"]} mt="md">
                    <Accordion.Item value="sort">
                      <Accordion.Control>
                        Sort
                      </Accordion.Control>
                      <Accordion.Panel>
                        <Radio.Group
                          value={value}
                          onChange={setValue}
                          name="sort-by"
                        >
                          <Stack>
                            <Radio value="your-picks" label="Your picks (Default)"/>
                            <Radio value="most-pop" label="Most popular"/>
                            <Radio value="top-rated" label="Top rated"/>
                            <Radio value="delivery-time" label="Delivery time"/>
                            <Radio value="all-offers" label="All offers"/>
                          </Stack>
                        </Radio.Group>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="from">
                      <Accordion.Control>
                        From meal mart
                      </Accordion.Control>
                      <Accordion.Panel>
                        <Switch.Group
                          defaultValue={['deals']}
                          orientation="vertical">
                          <Switch value="deals"
                                  label={<Flex gap="xs"><MdLocalOffer size={18}/><Text>Deals</Text></Flex>}/>
                          <Switch value="top-sells"
                                  label={<Flex gap="xs"><MdMilitaryTech size={18}/><Text>Sells</Text></Flex>}/>
                        </Switch.Group>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="price">
                      <Accordion.Control>
                        Price range
                      </Accordion.Control>
                      <Accordion.Panel>
                        <Chip.Group position="center">
                          <Chip value="1" size="md" variant="outline">$</Chip>
                          <Chip value="2" size="md" variant="outline">$$</Chip>
                          <Chip value="3" size="md" variant="outline">$$$</Chip>
                          <Chip value="4" size="md" variant="outline">$$$$</Chip>
                        </Chip.Group>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="camera">
                      <Accordion.Control>
                        Max delivery fee
                      </Accordion.Control>
                      <Accordion.Panel>
                        <Slider
                          labelAlwaysOn
                          py="xl"
                          marks={[
                            {value: 0, label: '$3'},
                            {value: 20, label: '$4.5'},
                            {value: 50, label: '$5.7'},
                            {value: 80, label: '$7.1'},
                            {value: 100, label: '$10'},
                          ]}
                        />
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="categories">
                      <Accordion.Control>
                        Categories
                      </Accordion.Control>
                      <Accordion.Panel>
                        <Chip.Group position="center">
                          <Chip value="1" size="md" variant="outline">Fast food</Chip>
                          <Chip value="2" size="md" variant="outline">African</Chip>
                          <Chip value="3" size="md" variant="outline">Wings</Chip>
                          <Chip value="4" size="md" variant="outline">Breakfast</Chip>
                          <Chip value="5" size="md" variant="outline">Dessert</Chip>
                          <Chip value="6" size="md" variant="outline">BBQ</Chip>
                        </Chip.Group>
                      </Accordion.Panel>
                    </Accordion.Item>
                  </Accordion>
                  <Divider/>
                  <Button leftIcon={<MdOutlineFilterAlt size={18}/>} size="md">Apply filter</Button>
                </Stack>
              </Collapse>
            </Grid.Col>
            <Grid.Col md={12} lg={9}>
              <Stack>
                <Box>
                  <Title order={3} mb="lg">Top categories</Title>
                  <Carousel
                    slideSize="23%"
                    slideGap="md"
                    loop
                    align="start"
                    slidesToScroll={3}
                    controlSize={32}
                    breakpoints={[
                      {maxWidth: 'md', slideSize: '30%'},
                      {maxWidth: 'sm', slideSize: '100%', slideGap: 0},
                    ]}
                    styles={{
                      control: {
                        '&[data-inactive]': {
                          opacity: 0,
                          cursor: 'default',
                        },
                      },
                    }}
                  >
                    {CatagoriesData.data.map((_, idx) =>
                      <Carousel.Slide key={`carousel-category-card-${idx}`}>
                        <CategoryCard
                          key={`category-card-${idx}`}
                          title={_.title}
                          price={_.price}
                          imageUrl={_.imageUrl}
                          link=""
                          size="sm"/>
                      </Carousel.Slide>
                    )}
                  </Carousel>
                </Box>
                <Box className={classes.advert}>
                  <Stack p="xl">
                    <Text size="xl" weight={600}>Free Delivery for your first two orders!</Text>
                    <Text>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                      id est laborum.</Text>
                  </Stack>
                </Box>
                <Box>
                  <FoodList/>
                </Box>
                <Center mt="xl">
                  <Pagination total={10} radius="md" withEdges/>
                </Center>
              </Stack>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>
    </Wrapper>
  );
}

export default Index;
