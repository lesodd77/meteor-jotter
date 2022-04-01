import {
  Box,
  Button,
  HStack,
  Spinner,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
// eslint-disable-next-line import/no-unresolved
import { JotterItem } from './JotterItem';
import { toggleJotterDone } from '../../jotters/ToggleJotterDone';
import { removeJotter } from '../../jotters/RemoveJotter';
import React from 'react';

export const JotterItems = ({
  jotters,
  pendingCount,
  hideDone,
  setHideDone,
  isLoading,
}) => (
  <Box
    mt={8}
    py={{ base: 2 }}
    px={{ base: 4 }}
    pb={{ base: 4 }}
    border={1}
    borderStyle="solid"
    borderRadius="md"
    borderColor={useColorModeValue('gray.200', 'gray.700')}
  >
    <HStack mt={2}>
      <Box w="70%">
        <Text
          as="span"
          color={useColorModeValue('gray.500', 'gray.400')}
          fontSize="xs"
        >
          You have {jotters.length} {jotters.length === +1 ? 'jotters' : 'jotters'}
          and {pendingCount || 0} pending.
        </Text>
      </Box>
      <Stack w="30%" justify="flex-end" direction="row">
        <Button
          colorScheme="teal"
          size="xs"
          onClick={() => setHideDone(!hideDone)}
        >
          {hideDone ? 'Show All Jotters' : 'Show Pending'}
        </Button>
      </Stack>
    </HStack>
    {isLoading() ? (
      <Spinner />
    ) : (
      <>
        {jotters.map(jotter => (
          <JotterItem
            key={jotter._id}
            jotter={jotter}
            onMarkAsDone={jotterId => toggleJotterDone.call({ jotterId })}
            onDelete={jotterId => removeJotter.call({ jotterId })}
          />
        ))}
      </>
    )}
  </Box>
);
