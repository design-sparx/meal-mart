import Wrapper from "@/layout";
import {
  Accordion,
  Button,
  Card,
  createStyles,
  Divider,
  Flex,
  Grid,
  MantineTheme,
  NativeSelect,
  NumberInput,
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
      <Grid>
        <Grid.Col md={12} lg={7}>
          <Stack>
            <Card>
              <Card.Section>
                <Title>Personal Details</Title>
              </Card.Section>
              <Card.Section>
                <form action="">
                  <Stack>
                    <SimpleGrid cols={2} spacing="lg" breakpoints={[
                      {maxWidth: 'md', cols: 2, spacing: 'md'},
                      {maxWidth: 'sm', cols: 1, spacing: 'sm'},
                      {maxWidth: 'xs', cols: 1, spacing: 'sm'},
                    ]}>
                      <TextInput placeholder="First name" label="first name" withAsterisk/>
                      <TextInput placeholder="Last name" label="last name" withAsterisk/>
                      <TextInput placeholder="Contact email" label="email name" withAsterisk/>
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
            </Card>
            <Card>
              <Card.Section>
                <Title>Payment method</Title>
              </Card.Section>
              <Card.Section>
                <Accordion variant="filled" defaultValue="credit-card">
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
            </Card>
          </Stack>
        </Grid.Col>
        <Grid.Col md={12} lg={5}>
          <Stack sx={{position: "sticky", top: 0}}>
            <Card>
              <Card.Section>
                <Title>Order summary</Title>
              </Card.Section>
              <Card.Section>
                <Flex>
                  <Text>Date</Text>
                  <Text>25/02/2023</Text>
                </Flex>
                <Flex>
                  <Text>Time</Text>
                  <Text>08.00 PM</Text>
                </Flex>
                <Flex gap="xs">
                  <Text>Type</Text>
                  <Flex>
                    <ThemeIcon variant="light"><MdOutlineDeliveryDining/></ThemeIcon>
                    <Text size="sm">Delivery</Text>
                  </Flex>
                </Flex>
              </Card.Section>
              <Divider/>
              <Card.Section>
                <Stack spacing="xs">
                  {Array.from({length: 5}).map((_, idx) => (
                    <UnstyledButton key={`order-item-${idx}`} className={classes.item}>
                      <Flex justify="space-between">
                        <Flex gap="sm">
                          <ThemeIcon variant="light" color="gray">
                            <MdRemoveCircle/>
                          </ThemeIcon>
                          <Text>1x Crispy Cake</Text>
                        </Flex>
                        <Text>$11</Text>
                      </Flex>
                    </UnstyledButton>
                  ))}
                </Stack>
                <Stack spacing="xs">
                  <Flex>
                    <Text>Subtotal</Text>
                    <Text>$93.13</Text>
                  </Flex>
                  <Flex>
                    <Text>Delivery fee</Text>
                    <Text>12.3</Text>
                  </Flex>
                  <Flex>
                    <Text>Total</Text>
                    <Text>103.3</Text>
                  </Flex>
                </Stack>
              </Card.Section>
              <Card.Section>
                <Button fullWidth leftIcon={<MdOutlineSend/>}>Order now</Button>
                <Text>Helpline: +(00) 00-919-922</Text>
              </Card.Section>
            </Card>
            <Card>
              <Card.Section>
                <Title>Discounts, Voucher, Offers</Title>
              </Card.Section>
              <Card.Section>
                <Stack>
                  <TextInput label="Do you have a voucher?" placeholder="enter voucher, promo, discount code"/>
                  <Button>Add voucher</Button>
                </Stack>
              </Card.Section>
            </Card>
          </Stack>
        </Grid.Col>
      </Grid>
    </Wrapper>
  );
}
