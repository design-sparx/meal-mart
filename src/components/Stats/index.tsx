import {Box, createStyles, Flex, Paper, SimpleGrid, Text, Title} from '@mantine/core';
import StatsData from '@/data/Stats.json';

const useStyles = createStyles((theme) => ({
  root: {
    display: 'flex',
    padding: theme.spacing.xl * 1.5,
    borderRadius: theme.radius.md,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  title: {
    textTransform: 'capitalize',
    fontSize: theme.fontSizes.md,
    width: '50%',
    textAlign: 'end'
  },

  count: {
    fontSize: 36,
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    color: theme.primaryColor,
    width: '50%'
  },

  stat: {
    flex: 1,

    '& + &': {
      paddingLeft: theme.spacing.xl,
      marginLeft: theme.spacing.xl,

      [theme.fn.smallerThan('sm')]: {
        paddingLeft: 0,
        marginLeft: 0,
        borderLeft: 0,
        paddingTop: theme.spacing.xl,
        marginTop: theme.spacing.xl,
      },
    },
  },
}));

function Stats() {
  const {classes} = useStyles();
  const stats = StatsData.data.map((stat) => (
    <Paper key={stat.title} className={classes.stat} withBorder p="lg">
      <Flex align="center" justify="space-between">
        <Text className={classes.count}>{stat.stats}</Text>
        <Text className={classes.title}>{stat.title}</Text>
      </Flex>
    </Paper>
  ));
  return <Box>
    <Flex align="center" justify="space-between">
      <Title>Service shows good taste.</Title>
      <div className={classes.root}>
        <SimpleGrid cols={3} spacing="xl" breakpoints={[{maxWidth: 'md', cols: 1}]}>
          {stats}
        </SimpleGrid>
      </div>
    </Flex>
  </Box>;
}

export default Stats;
