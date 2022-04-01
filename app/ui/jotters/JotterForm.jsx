import React from 'react';
import {
  FormControl,
  Input,
  Button,
  FormErrorMessage,
  Box,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { object, string } from 'yup';
import { useFormik } from 'formik';
// eslint-disable-next-line import/no-unresolved
import { ErrorStatus } from '../common/ErrorStatus';
import { insertJotter } from '../../jotters/InsertJotter';

export const JotterForm = () => {
  const validationSchema = object({
    description: string('Enter jot description').required(
      'Jots description is required'
    ),
  });

  const onSubmit = (values, actions) => {
    const description = values.description.trim();
    insertJotter.call({ description }, error => {
      if (error) {
        const errorMessage = error?.reason || 'Sorry, please try again.';
        actions.setStatus(errorMessage);
      } else {
        actions.resetForm();
      }
      actions.setSubmitting(false);
    });
  };

  const formik = useFormik({
    initialValues: { description: '' },
    initialStatus: null,
    validationSchema,
    onSubmit,
  });

  return (
    <Box>
      <ErrorStatus status={formik.status} />
      <form onSubmit={formik.handleSubmit}>
        <InputGroup size="md">
          <FormControl
            isInvalid={formik.errors.description && formik.touched.description}
          >
            <Input
              h="2.6rem"
              pr="6rem"
              name="description"
              onChange={formik.handleChange}
              value={formik.values.description}
              placeholder="Type to add new jot"
            />
            <FormErrorMessage>{formik.errors.description}</FormErrorMessage>
          </FormControl>
          <InputRightElement width="6rem">
            <Button
              h="2.5rem"
              size="sm"
              type="submit"
              isLoading={formik.isSubmitting}
              color="white"
              bgGradient="linear(to-l, #675AAA,#4399E1)"
              _hover={{ bg: 'pink.500', color: ' white' }}
            >
             Add Jotting
            </Button>
          </InputRightElement>
        </InputGroup>
      </form>
    </Box>
  );
};
