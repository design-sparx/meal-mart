import React from 'react';
import {
  ActionIcon,
  Box,
  Button,
  Flex,
  Group,
  Paper,
  Progress,
  Rating,
  Stack,
  Text,
  Title,
  useMantineTheme
} from "@mantine/core";
import Image from "next/image"
import {MdOutlineMoreVert, MdOutlineReply, MdThumbDown, MdThumbUp} from "react-icons/md";
import Link from "next/link";

function RestaurantReviews() {
  const theme = useMantineTheme();

  return (
    <Box>
      <Title size={48} mb="xl" align="center">Ratings & Reviews</Title>
      <Flex mb="xl" gap="lg" align="center">
        <Paper withBorder p="lg">
          <Stack align="center" spacing="sm">
            <Text size={32} weight={600}>8.2</Text>
            <Rating defaultValue={4.2}/>
            <Text size="sm">Based on 231 reviews</Text>
          </Stack>
        </Paper>
        <Paper>
          <Stack spacing={1}>
            <Flex align="center" gap="md">
              <Text>5</Text>
              <Progress value={87} sx={{width: 300}}/>
            </Flex>
            <Flex align="center" gap="md">
              <Text>4</Text>
              <Progress value={21} sx={{width: 300}}/>
            </Flex>
            <Flex align="center" gap="md">
              <Text>3</Text>
              <Progress value={5} sx={{width: 300}}/>
            </Flex>
            <Flex align="center" gap="md">
              <Text>2</Text>
              <Progress value={14} sx={{width: 300}}/>
            </Flex>
            <Flex align="center" gap="md">
              <Text>1</Text>
              <Progress value={4.3} sx={{width: 300}}/>
            </Flex>
          </Stack>
        </Paper>
      </Flex>
      <Stack spacing="xl">
        {Array.from({length: 5}).map((_, idx) => (
          <Paper key={`review-item-${idx}`} p="md" shadow="md">
            <Flex justify="space-between" mb="md">
              <Group>
                <Image
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt="reviewer image"
                  height={42} width={42}
                  style={{borderRadius: theme.radius.sm}}/>
                <Text component={Link} href="#" weight={500}>John Doe</Text>
              </Group>
              <ActionIcon>
                <MdOutlineMoreVert/>
              </ActionIcon>
            </Flex>
            <Flex mb="md" align="center" gap="sm">
              <Rating defaultValue={4.5}/>
              <Text>February, 12 2023</Text>
            </Flex>
            <Text mb="md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.</Text>
            <Text size="xs" mb="md">124 people found this review helpful</Text>
            <Flex align="center" justify="space-between">
              <Group>
                <Text size="sm">Did you find this helpful?</Text>
                <Button leftIcon={<MdThumbUp/>} variant="light" size="xs">Yes</Button>
                <Button leftIcon={<MdThumbDown/>} variant="light" size="xs">No</Button>
              </Group>
              <Button leftIcon={<MdOutlineReply/>} variant="light">Reply</Button>
            </Flex>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
}

export default RestaurantReviews;
