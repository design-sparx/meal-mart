import {Box, Container, createStyles, Flex, Grid, Paper, Text, ThemeIcon, Title} from '@mantine/core';
import StatsData from '@/data/Stats.json';
import {MdOutlineSentimentSatisfied} from "react-icons/md";

const useStyles = createStyles((theme) => ({
  root: {
    padding: theme.spacing.xl * 1.5,
  },

  title: {
    textTransform: 'capitalize',
    fontSize: theme.fontSizes.md,
  },

  count: {
    fontSize: 28,
    fontWeight: 700,
    width: '50%'
  },
}));

function Stats() {
  const {classes} = useStyles();
  const stats = StatsData.data.map((stat) => (
    <Grid.Col lg={4} key={stat.title}>
      <Paper p="md" shadow="md">
        <Flex justify="space-between" sx={{width: '100%'}}>
          <div>
            <Text className={classes.count}>{stat.stats}</Text>
            <Text className={classes.title}>{stat.title}</Text>
          </div>
          <ThemeIcon size={56} variant="light" radius="sm">
            <MdOutlineSentimentSatisfied size={32}/>
          </ThemeIcon>
        </Flex>
      </Paper>
    </Grid.Col>
  ));

  return <Container pt={80} pb={120}>
    <Box>
      <Title align="center" size={48}>Service shows good taste.</Title>
      <div className={classes.root}>
        <Grid gutterXs="md" gutterMd="xl" gutterXl={48}>{stats}</Grid>
      </div>
    </Box>
  </Container>;
}

export default Stats;
