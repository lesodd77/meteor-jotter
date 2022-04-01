import {
    Box,
    Stack,
    Text,
    ButtonGroup,
    IconButton,
    Divider,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { FaHeart } from 'react-icons/fa';
  import React from 'react';
  import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
  import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
  import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';

  export const Footer = () => (
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      py="12"
      px={{
        base: '4',
        md: '8',
      }}
    >
      <Stack>
        <Divider my="5" borderColor={useColorModeValue('gray.200', 'gray.700')} />
        <Stack direction="row" spacing="2" align="center" justify="space-between">
          <ButtonGroup variant="ghost" color="gray.600">
            <IconButton
              as="a"
              target="_blank"
              href="https://github.com/lesodd77"
              aria-label="GitHub"
              icon={<FaGithub fontSize="20px" />}
              _hover={{ bg: 'pink.500', color: ' white' }}
            />
            <IconButton
              as="a"
              target="_blank"
              href="https://twitter.com/SimonAgbey3"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="20px" />}
              _hover={{ bg: 'pink.500', color: ' white' }}
            />
            <IconButton
              as="a"
              target="_blank"
              href="https://github.com/lesodd77"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="20px" />}
              _hover={{ bg: 'pink.500', color: ' white' }}
            />
          </ButtonGroup>
        </Stack>
        <Text
          fontSize="xs"
          alignSelf={{
            base: 'center',
            sm: 'start',
          }}
        >
          &copy; {new Date().getFullYear()} &nbsp;Jotter {' '}
          <a href="https://twitter.com/SimonAgbey3" target="_blank">
          &nbsp;  Created &nbsp;
          </a>
          with &nbsp; love &nbsp; <FaHeart
           bg="red"/> by
          <a href="https://twitter.com/SimonAgbey3" target="_blank">
            @Lesod
          </a>
          .
        </Text>
      </Stack>
    </Box>
  );
