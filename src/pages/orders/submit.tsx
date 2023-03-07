import Wrapper from "@/layout";
import {
  Accordion,
  Button,
  Card,
  Container,
  createStyles,
  Divider,
  Flex,
  Grid,
  MantineTheme,
  NativeSelect,
  NumberInput,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
  Title,
  UnstyledButton
} from "@mantine/core";
import React from "react";
import {MdOutlineCreditCard, MdOutlineDeliveryDining, MdOutlineSend, MdRemoveCircle} from "react-icons/md";
import {FaPaypal} from "react-icons/fa";

const useStyles = createStyles((theme: MantineTheme) => ({
  item: {
    display: 'block',
    width: '100%',
    padding: 3,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    },
  },
}));

const data = [
  {value: 'ke', label: 'KE'},
  {value: 'ug', label: 'UG'},
  {value: 'tz', label: 'TZ'},
  {value: 'rw', label: 'RW'},
];

export default function Submit() {
  const {classes, theme} = useStyles();
  const getColor = (color: string) => theme.colors[color][theme.colorScheme === 'dark' ? 5 : 7];

  return (
    <Wrapper>
      <Container my={60}>
        <Grid gutterXs="md" gutterMd="xl">
          <Grid.Col md={12} lg={7}>
            <Stack>
              <Paper withBorder p="md">
                <Card.Section>
                  <Title order={4} mb="md">Personal Details</Title>
                </Card.Section>
                <Card.Section>
                  <form action="">
                    <Stack>
                      <SimpleGrid cols={2} spacing="lg" breakpoints={[
                        {maxWidth: 'md', cols: 2, spacing: 'md'},
                        {maxWidth: 'sm', cols: 1, spacing: 'sm'},
                        {maxWidth: 'xs', cols: 1, spacing: 'sm'},
                      ]}>
                        <TextInput label="First name" placeholder="first name" withAsterisk/>
                        <TextInput label="Last name" placeholder="last name" withAsterisk/>
                        <TextInput label="Contact email" placeholder="email name" withAsterisk/>
                        <TextInput
                          type="tel"
                          placeholder="+254"
                          label="Telephone"
                          rightSection={<NativeSelect
                            data={data}
                            styles={{
                              input: {
                                fontWeight: 500,
                                borderTopLeftRadius: 0,
                                borderBottomLeftRadius: 0,
                              },
                            }}
                          />}
                          rightSectionWidth={92}
                        />
                      </SimpleGrid>
                      <TextInput placeholder="full address" label="Full address" withAsterisk/>
                      <SimpleGrid cols={2} spacing="lg" breakpoints={[
                        {maxWidth: 'md', cols: 2, spacing: 'md'},
                        {maxWidth: 'sm', cols: 1, spacing: 'sm'},
                        {maxWidth: 'xs', cols: 1, spacing: 'sm'},
                      ]}>
                        <TextInput placeholder="city" label="City" withAsterisk/>
                        <TextInput placeholder="postal code" label="Postal code" withAsterisk/>
                      </SimpleGrid>
                    </Stack>
                  </form>
                </Card.Section>
              </Paper>
              <Paper withBorder p="md">
                <Card.Section>
                  <Title order={4} mb="md">Payment method</Title>
                </Card.Section>
                <Card.Section>
                  <Accordion defaultValue="credit-card">
                    <Accordion.Item value="credit-card">
                      <Accordion.Control icon={<MdOutlineCreditCard size={20} color={getColor('red')}/>}>
                        Credit card
                      </Accordion.Control>
                      <Accordion.Panel>
                        <Stack>
                          <TextInput label="Name on card" placeholder="first & last names"/>
                          <TextInput label="Card number" placeholder="card number"/>
                          <SimpleGrid cols={4} spacing="lg" breakpoints={[
                            {maxWidth: 'md', cols: 2, spacing: 'md'},
                            {maxWidth: 'sm', cols: 1, spacing: 'sm'},
                            {maxWidth: 'xs', cols: 1, spacing: 'sm'},
                          ]}>
                            <NumberInput placeholder="mm" label="Month of expiry" hideControls withAsterisk/>
                            <NumberInput placeholder="yyyy" label="Year of expiry" hideControls withAsterisk/>
                            <NumberInput placeholder="csv number last 3 digits" label="CSV" hideControls withAsterisk/>
                          </SimpleGrid>
                        </Stack>
                      </Accordion.Panel>
                    </Accordion.Item>
                    <Accordion.Item value="paypal">
                      <Accordion.Control icon={<FaPaypal size={20} color={getColor('blue')}/>}>
                        Pay with paypal
                      </Accordion.Control>
                      <Accordion.Panel>
                        <Stack>
                          <TextInput label="Account name" placeholder="account name"/>
                          <TextInput label="Email address" placeholder="paypal email address"/>
                        </Stack>
                      </Accordion.Panel>
                    </Accordion.Item>
                  </Accordion>
                </Card.Section>
              </Paper>
            </Stack>
          </Grid.Col>
          <Grid.Col md={12} lg={5}>
            <Stack sx={{position: "sticky", top: 0}}>
              <Paper withBorder p="md">
                <Card.Section>
                  <Title order={4} mb="md">Order summary</Title>
                </Card.Section>
                <Card.Section>
                  <Flex gap="md" mb="xs">
                    <Text>Date</Text>
                    <Text>25/02/2023</Text>
                  </Flex>
                  <Flex gap="md" mb="xs">
                    <Text>Time</Text>
                    <Text>08.00 PM</Text>
                  </Flex>
                  <Flex gap="md" mb="xs">
                    <Text>Type</Text>
                    <Flex gap="sm" align="center">
                      <ThemeIcon variant="outline"><MdOutlineDeliveryDining/></ThemeIcon>
                      <Text size="sm">Delivery</Text>
                    </Flex>
                  </Flex>
                </Card.Section>
                <Divider my="md"/>
                <Card.Section>
                  <Stack spacing="xs">
                    {Array.from({length: 5}).map((_, idx) => (
                      <UnstyledButton key={`order-item-${idx}`} className={classes.item}>
                        <Flex justify="space-between">
                          <Flex gap="sm">
                            <ThemeIcon variant="light" color="pink">
                              <MdRemoveCircle/>
                            </ThemeIcon>
                            <Text>1x Crispy Cake</Text>
                          </Flex>
                          <Text>$11</Text>
                        </Flex>
                      </UnstyledButton>
                    ))}
                  </Stack>
                  <Stack py="xl" spacing="xs">
                    <Flex justify="space-between">
                      <Text>Subtotal</Text>
                      <Text>$93.13</Text>
                    </Flex>
                    <Flex justify="space-between">
                      <Text>Delivery fee</Text>
                      <Text>12.3</Text>
                    </Flex>
                    <Flex justify="space-between">
                      <Text size="xl" transform="uppercase" weight={600}>Total</Text>
                      <Text size="xl" transform="uppercase" weight={600}>$103.3</Text>
                    </Flex>
                  </Stack>
                </Card.Section>
                <Card.Section>
                  <Button fullWidth leftIcon={<MdOutlineSend/>}>Order now</Button>
                  <Text mt="sm" align="center">Helpline: +(00) 00-919-922</Text>
                </Card.Section>
              </Paper>
              <Paper withBorder p="md">
                <Card.Section>
                  <Title order={4} mb="md">Discounts, Voucher, Offers</Title>
                </Card.Section>
                <Card.Section>
                  <Stack>
                    <TextInput label="Do you have a voucher?" placeholder="enter voucher, promo, discount code"/>
                    <Button>Add voucher</Button>
                  </Stack>
                </Card.Section>
              </Paper>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Wrapper>
  );
}
