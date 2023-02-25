import React from 'react';
import {
  Button,
  Card,
  createStyles,
  Divider,
  Flex,
  MantineTheme,
  Radio,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
  UnstyledButton
} from "@mantine/core";
import {MdOutlineSend, MdRemoveCircle} from "react-icons/md";
import {DatePicker, TimeInput} from "@mantine/dates";

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

function OrderSummary() {
  const {classes} = useStyles();

  return (
    <Card py="lg" sx={{position: "sticky", top: 0}}>
      <Card.Section>
        <Title>Order summary</Title>
      </Card.Section>
      <Card.Section>
        <Stack spacing={0}>
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
        <Divider/>
        <Radio.Group
          name="favoriteFramework"
          label="Select order type"
          withAsterisk
        >
          <Radio value="delivery" label="Delivery"/>
          <Radio value="takeaway" label="Take away"/>
        </Radio.Group>
        <Divider/>
        <SimpleGrid cols={2}>
          <DatePicker placeholder="Pick date" label="Delivery date" withAsterisk/>
          <TimeInput label="What time?" withAsterisk/>
        </SimpleGrid>
      </Card.Section>
      <Card.Section>
        <Button fullWidth leftIcon={<MdOutlineSend/>}>Place order</Button>
        <Text>proceed to checkout</Text>
      </Card.Section>
    </Card>
  );
}

export default OrderSummary;
