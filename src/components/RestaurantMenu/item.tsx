import React from 'react';
import {Flex, Paper, Stack, Text, Title} from "@mantine/core";
import Image from "next/image";

interface IProps {
  title: string
  description: string
  price: number
  imageUrl: string
}

function MenuItem({title, description, price, imageUrl}: IProps) {
  return (
    <Paper>
      <Flex>
        <Stack>
          <Title>{title}</Title>
          <Text>{description}</Text>
          <Text>{price}</Text>
        </Stack>
        <Image src={imageUrl} alt="menu item" height={72} width={72}/>
      </Flex>
    </Paper>
  );
}

export default MenuItem;
