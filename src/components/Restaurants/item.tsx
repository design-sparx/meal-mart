import React from 'react';
import {Badge, Group, Image, Paper, Stack, Text} from "@mantine/core";
import Link from "next/link";
import {MdOutlineLocalFireDepartment, MdOutlineStar, MdOutlineStarHalf} from "react-icons/md";

interface IProps {
  link: string
  imageUrl: string[]
  type: string
  avgPrice: number
  ratings: string
  title: string
  location: string
}

function RestaurantCard({avgPrice, ratings, type, imageUrl, link, title, location}: IProps) {
  return (
    <Paper component={Link} href={`/${link}`}>
      <Group>
        <Image src={imageUrl[0]} alt={`photo of ${title}`} height={150} width={200}/>
        <Stack>
          <Group>
            <Text>{type}</Text>
            <Text><MdOutlineStarHalf/> {ratings}</Text>
          </Group>
          <Text>{title}</Text>
          <Text>{location}</Text>
          <Group>
            <Badge><MdOutlineLocalFireDepartment/> -30%</Badge>
            <Text>Average price ${avgPrice}</Text>
          </Group>
        </Stack>
      </Group>
    </Paper>
  );
}

export default RestaurantCard;
