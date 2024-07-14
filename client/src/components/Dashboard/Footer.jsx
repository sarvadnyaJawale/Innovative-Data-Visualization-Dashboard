import React from "react";
import { Box, Text, Link, Flex, useColorModeValue, Icon, HStack } from "@chakra-ui/react";
import { RiFacebookBoxFill, RiTwitterFill, RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const footerBgColor = useColorModeValue("gray.100", "gray.900");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const iconColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Box bg={footerBgColor} py={6}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        maxW="container.lg"
        mx="auto"
        px={4}
      >
        <Text fontSize="sm" color={textColor} mb={{ base: 4, md: 0 }}>
          &copy; 2024 Sarvadnya Jawle. All rights reserved.
        </Text>
        <HStack spacing={4} alignItems="center">
          <Link fontSize="sm" color={textColor} _hover={{ textDecoration: "underline" }}>
            Privacy Policy
          </Link>
          <Link fontSize="sm" color={textColor} _hover={{ textDecoration: "underline" }}>
            Terms of Service
          </Link>
          <Icon as={RiFacebookBoxFill} boxSize={6} color={iconColor} _hover={{ color: "blue.500" }} />
          <Icon as={RiTwitterFill} boxSize={6} color={iconColor} _hover={{ color: "blue.400" }} />
          <Icon as={RiInstagramFill} boxSize={6} color={iconColor} _hover={{ color: "pink.400" }} />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Footer;
