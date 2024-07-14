import React from "react";
import {
  Box,
  Flex,
  Container,
  Input,
  IconButton,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Badge,
  useColorMode,
  useToast,
  HStack,
} from "@chakra-ui/react";
import { ChevronDownIcon, BellIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import profileImage from './profile-pic.png'; 

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();

  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });

    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };

  return (
    <Box
      py={4}
      bg="white" // Navbar background
      position="sticky"
      top={0}
      zIndex={100}
      boxShadow="lg" // Add shadow for a lifted effect
      borderRadius="md" // Rounded corners
      mx={4} // Margin to ensure it does not touch the edges
    >
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          <Box w="70%">
            <Input
              type="text"
              placeholder="Search..."
              size="md"
              borderRadius="full"
              bgGradient="linear(to-r, teal.500, purple.500)" // Gradient background
              px={6}
              py={3}
              color="white" // Text color for contrast
              _placeholder={{
                color: "white",
              }}
              _focus={{ outline: "none", boxShadow: "outline" }}
            />
          </Box>
          <HStack spacing={4}>
            <IconButton
              aria-label="Toggle Theme"
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              bgGradient="linear(to-r, teal.500, purple.500)" // Match gradient
              color="white" // Text color
              _hover={{ bgGradient: "linear(to-r, teal.600, purple.600)" }} // Darker gradient on hover
            />
            <Box position="relative">
              <IconButton
                aria-label="Notifications"
                icon={<BellIcon boxSize={6} />}
                bgGradient="linear(to-r, teal.500, purple.500)" // Match gradient
                color="white" // Text color
                _hover={{ bgGradient: "linear(to-r, teal.600, purple.600)" }} // Darker gradient on hover
              />
              <Badge
                position="absolute"
                top="-1"
                right="-1"
                colorScheme="red"
                borderRadius="full"
                px={2}
                py={1}
                fontSize="xs"
              >
                3
              </Badge>
            </Box>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<ChevronDownIcon boxSize={6} />}
                variant="unstyled"
                bgGradient="linear(to-r, teal.500, purple.500)" // Match gradient
                color="white" // Text color
                _hover={{ bgGradient: "linear(to-r, teal.600, purple.600)" }} // Darker gradient on hover
              />
              <MenuList
                bgGradient="linear(to-r, teal.500, purple.500)" // Match the main webpage background
                color="black" // Default text color
                borderColor="gray.700" // Optional: border color to match theme
              >
                <MenuItem
                  _hover={{ 
                    bgGradient: "linear(to-r, teal.500, purple.500)", // Match the main webpage background
                    color: "white" // Text color on hover
                  }}
                >
                  Profile
                </MenuItem>
                <MenuItem
                  _hover={{ 
                    bgGradient: "linear(to-r, teal.500, purple.500)", // Match the main webpage background
                    color: "white" // Text color on hover
                  }}
                >
                  Settings
                </MenuItem>
                <MenuItem
                  _hover={{ 
                    bgGradient: "linear(to-r, teal.500, purple.500)", // Match the main webpage background
                    color: "white" // Text color on hover
                  }}
                  onClick={handleLogout}
                >
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
            <Avatar
              size="lg"
              src={profileImage} // Use the imported image
              mr={4}
              borderWidth={2}
              borderColor={colorMode === "light" ? "gray.300" : "gray.600"}
            />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
