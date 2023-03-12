import {Carousel} from '@mantine/carousel';
import {Box, Flex, Image, Paper, Stack, Text, Title} from "@mantine/core";
import React from "react";
import {useMediaQuery} from "@mantine/hooks";

export default function Testimonials() {
  const mediumScreen = useMediaQuery('(max-width: 769px)');
  const smallScreen = useMediaQuery('(max-width: 426px)');

  return (
    <Box>
      <Title align="center" size={smallScreen ? 28 : 42} mb="xl">Testimonials</Title>
      <Carousel
        slideSize="100%"
        slideGap="md"
        loop
        align="start"
        controlSize={36}
        styles={{
          control: {
            '&[data-inactive]': {
              opacity: 0,
              cursor: 'default',
            },
          },
        }}>
        {Array.from({length: 3}).map((_, idx) => (
          <Carousel.Slide key={`testimonial-${idx}`}>
            <Paper sx={{textAlign: smallScreen ? 'center' : 'left'}}>
              <Flex align="center" gap="md" direction={smallScreen ? 'column-reverse' : 'row'}>
                <Stack>
                  <Title order={2}>Unlock new growth</Title>
                  <Text>A pellentesque sit amet porttitor. Viverra maecenas accumsan lacus vel facilisis volutpat est.
                    Tellus pellentesque eu tincidunt tortor. Ornare quam viverra orci sagittis eu volutpat. Nunc non
                    blandit massa enim. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing.
                  </Text>
                </Stack>
                <Image
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="testimonial image"
                  radius="md"
                  height={smallScreen ? 200 : mediumScreen ? 300 : 400}
                  fit="cover"/>
              </Flex>
            </Paper>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  );
}
