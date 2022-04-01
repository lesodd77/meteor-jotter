import React, { memo } from 'react';
import { Box, Button, HStack, Stack, Checkbox } from '@chakra-ui/react';

export const JotterItem = memo(({ jotter, onMarkAsDone, onDelete }) => (
  <HStack mt={4}>
    <Box w="80%">
      <Checkbox
        colorScheme="green"
        isChecked={jotter.done}
        onChange={() => onMarkAsDone(jotter._id)}
      >
        {jotter.description}
      </Checkbox>
    </Box>
    <Stack w="20%" justify="flex-end" direction="row">
      <Button
        colorScheme="red"
        variant="outline"
        size="xs"
        onClick={() => onDelete(jotter._id)}
      >
        Remove
      </Button>
    </Stack>
  </HStack>
));
