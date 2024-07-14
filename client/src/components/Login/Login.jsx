import React, { useState } from 'react';
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Flex,
  Text,
  Icon,
  VStack,
  HStack,
  Divider,
} from '@chakra-ui/react';
import { FaLock, FaEnvelope } from 'react-icons/fa';

const LoginPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
      window.location.href = '/dashboard';
    }, 2000);
  };

  return (
    <Box
      bgGradient="linear(to-r, teal.500, purple.500)" // Same gradient as main webpage
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      p={4}
    >
      <Container
        p={8}
        borderRadius="lg"
        boxShadow="xl"
        bg="white"
        maxW="md"
        textAlign="center"
      >
        <VStack spacing={6}>
          <Flex direction="column" align="center">
            <Icon as={FaEnvelope} boxSize={10} color="teal.500" /> {/* Match icon color */}
            <Text fontSize="2xl" fontWeight="bold" color="teal.500"> {/* Match text color */}
              Welcome Back, Ajay!
            </Text>
          </Flex>
          <Divider />
          <form onSubmit={handleLogin}>
            <VStack spacing={4}>
              <FormControl id="email">
                <FormLabel>Admin Email</FormLabel>
                <Input
                  type="email"
                  placeholder="admin@gmail.com"
                  value="admin@gmail.com"
                  isReadOnly
                  focusBorderColor="teal.500" // Match focus border color
                  _placeholder={{ color: 'gray.400' }}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value="admin"
                  isReadOnly
                  focusBorderColor="teal.500" // Match focus border color
                  _placeholder={{ color: 'gray.400' }}
                />
              </FormControl>
              <Button
                colorScheme="teal" // Match button color scheme
                type="submit"
                width="full"
                rightIcon={<Icon as={FaLock} />}
              >
                Login
              </Button>
            </VStack>
          </form>
        </VStack>
      </Container>
      <AlertDialog isOpen={isOpen} leastDestructiveRef={undefined}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Welcome Admin!
            </AlertDialogHeader>
            <AlertDialogBody>
              Redirecting to the dashboard page...
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button onClick={() => setIsOpen(false)} colorScheme="blue">
                Cancel
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
};

export default LoginPage;
