import {Accordion, Box, createStyles, Text, Title} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 650,
    width: 720,
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  title: {
    marginBottom: theme.spacing.xl * 1.5,
  },

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,

    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

const placeholder =
  'A pellentesque sit amet porttitor. Viverra maecenas accumsan lacus vel facilisis volutpat est. Tellus pellentesque eu tincidunt tortor. Ornare quam viverra orci sagittis eu volutpat. Nunc non blandit massa enim. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Est ultricies integer quis auctor elit sed vulputate mi sit. Nullam eget felis eget nunc lobortis mattis aliquam. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat.';

export default function Faqs() {
  const {classes} = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Title align="center" className={classes.title}>Frequently Asked Questions</Title>
      <Text>Here you&apos;ll be able find answers your questions</Text>

      <Accordion variant="separated">
        <Accordion.Item className={classes.item} value="reset-password">
          <Accordion.Control>How can I reset my password?</Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="another-account">
          <Accordion.Control>Can I create more that one account?</Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="newsletter">
          <Accordion.Control>How can I subscribe to monthly newsletter?</Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="credit-card">
          <Accordion.Control>Do you store credit card information securely?</Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="payment">
          <Accordion.Control>What payment systems to you work with?</Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Box>
  );
}
