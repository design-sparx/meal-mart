import {Box, Container, createStyles, Flex, Grid, Paper, Text, ThemeIcon, Title} from '@mantine/core';
import StatsData from '@/data/Stats.json';
import {MdOutlineSentimentSatisfied} from "react-icons/md";

const useStyles = createStyles((theme) => ({
  root: {
    padding: theme.spacing.xl * 1.5,
    borderRadius: theme.radius.md,
  },

  title: {
    textTransform: 'capitalize',
    fontSize: theme.fontSizes.lg,
  },

  count: {
    fontSize: 36,
    fontWeight: 900,
    width: '50%'
  },
}));

function Stats() {
  const {classes} = useStyles();
  const stats = StatsData.data.map((stat) => (
    <Grid.Col lg={4} key={stat.title}>
      <Paper withBorder p="md">
        <Flex justify="space-between" sx={{width: '100%'}}>
          <div>
            <Text className={classes.count}>{stat.stats}</Text>
            <Text className={classes.title}>{stat.title}</Text>
          </div>
          <ThemeIcon size={64} variant="light">
            <MdOutlineSentimentSatisfied size={36}/>
          </ThemeIcon>
        </Flex>
      </Paper>
    </Grid.Col>
  ));

  return <Container fluid my={120}>
    <Box>
      <Title align="center" size={48}>Service shows good taste.</Title>
      <div className={classes.root}>
        <Grid>{stats}</Grid>
      </div>
    </Box>
  </Container>;
}

export default Stats;
