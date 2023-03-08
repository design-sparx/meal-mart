import React from 'react';
import {
  Button,
  Card,
  createStyles,
  Divider,
  Flex,
  MantineTheme,
  Paper,
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
  card: {
    padding: theme.spacing.md,
  },
  item: {
    display: 'block',
    width: '100%',
    padding: theme.spacing.xs,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    },
  },
}));

function OrderSummary() {
  const {classes, theme} = useStyles();

  return (
    <Paper className={classes.card} withBorder shadow="sm">
      <Card.Section mb="md">
        <Title order={4}>Order summary</Title>
      </Card.Section>
      <Card.Section>
        <Stack spacing={2}>
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
        <Divider/>
        <Radio.Group
          py="lg"
          name="favoriteFramework"
          label="Select order type"
          withAsterisk
        >
          <Radio value="delivery" label="Delivery"/>
          <Radio value="takeaway" label="Take away"/>
        </Radio.Group>
        <Divider/>
        <SimpleGrid cols={2} py="lg">
          <DatePicker placeholder="Pick date" label="Delivery date" withAsterisk/>
          <TimeInput label="What time?" withAsterisk/>
        </SimpleGrid>
      </Card.Section>
      <Card.Section>
        <Button fullWidth leftIcon={<MdOutlineSend/>}>Place order</Button>
        <Text align="center" size="sm" mt="sm" italic>Proceed to checkout</Text>
      </Card.Section>
    </Paper>
  );
}

export default OrderSummary;
