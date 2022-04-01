import { Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
// eslint-disable-next-line import/no-unresolved
import { RoutePaths } from '../common/MainRoutes';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const SignedIn = () => {
  const navigate = useNavigate();
  return (
    <Flex align="center" justify="center">
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Stack align="center">
          <Heading
            fontSize="4xl"
            bgGradient="linear(to-l, #675AAA,#4399E1)"
            bgClip="text"
          >
            You are already signed in
          </Heading>
          <Text fontSize="lg" color="gray.600">
            to start jotting your simple jot
          </Text>
        </Stack>
        <Stack spacing={10}>
          <Button
            onClick={() => navigate(RoutePaths.JOTTERS)}
            bg="blue.400"
            color="white"
            _hover={{
              bg: 'blue.500',
            }}
          >
            Go to your jots
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};
