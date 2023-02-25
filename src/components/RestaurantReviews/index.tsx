import React from 'react';
import {ActionIcon, Box, Button, Flex, Paper, Progress, Rating, Stack, Text, Title} from "@mantine/core";
import Image from "next/image"
import {MdOutlineMoreVert, MdOutlineReply} from "react-icons/md";

function RestaurantReviews() {
  return (
    <Box>
      <Title>Reviews</Title>
      <Flex>
        <Paper>
          <Stack>
            <Text>8.2</Text>
            <Rating defaultValue={4.2}/>
            <Text>Based on 231 reviews</Text>
          </Stack>
        </Paper>
        <Paper>
          <Stack>
            <Flex>
              <Text>5</Text>
              <Progress value={87} sx={{width: 300}}/>
            </Flex>
            <Flex>
              <Text>4</Text>
              <Progress value={21} sx={{width: 300}}/>
            </Flex>
            <Flex>
              <Text>3</Text>
              <Progress value={5} sx={{width: 300}}/>
            </Flex>
            <Flex>
              <Text>2</Text>
              <Progress value={14} sx={{width: 300}}/>
            </Flex>
            <Flex>
              <Text>1</Text>
              <Progress value={4.3} sx={{width: 300}}/>
            </Flex>
          </Stack>
        </Paper>
      </Flex>
      {Array.from({length: 5}).map((_, idx) => (
        <Paper key={`review-item-${idx}`}>
          <Flex>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt="reviewer image"
                height={36} width={36}/>
              <Text>John Doe</Text>
            </div>
            <ActionIcon>
              <MdOutlineMoreVert/>
            </ActionIcon>
          </Flex>
          <Flex>
            <Rating defaultValue={4.5}/>
            <Text>February, 12 2023</Text>
          </Flex>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.</Text>
          <Text>124 people found this review helpful</Text>
          <Flex>
            <Text>Did you find this helpful?</Text>
            <Button>Yes</Button>
            <Button>No</Button>
            <Button leftIcon={<MdOutlineReply/>}>Reply</Button>
          </Flex>
        </Paper>
      ))}
    </Box>
  );
}

export default RestaurantReviews;
