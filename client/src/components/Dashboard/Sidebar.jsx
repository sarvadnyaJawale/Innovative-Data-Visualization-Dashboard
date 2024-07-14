import React from "react";
import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  IconButton,
  useDisclosure,
  Divider,
  Text,
  Flex,
  Heading,
  Avatar,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronRightIcon, SettingsIcon } from "@chakra-ui/icons";
import {
  MdDashboard,
  MdAssignment,
  MdSettings,
  MdExitToApp,
  MdPeople,
  MdCalendarToday,
  MdInsertDriveFile,
  MdAnalytics,
} from "react-icons/md";
import profileImage from './profile-pic.png'; // Import the profile image

const AdminDashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  // Call useColorModeValue at the top level of the component
  const bgDrawerContent = useColorModeValue("gray.50", "gray.900");
  const colorDrawerContent = useColorModeValue("gray.800", "white");
  const bgDrawerHeader = useColorModeValue("gray.100", "gray.800");
  const colorDrawerHeader = "teal.600";
  const borderColorAvatar = useColorModeValue("gray.300", "gray.600");
  const hoverBg = useColorModeValue("gray.200", "gray.700");
  const borderColorDivider = useColorModeValue("gray.300", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Container>
      <IconButton
        icon={<ChevronRightIcon />}
        onClick={onOpen}
        position="fixed"
        top="50%"
        left={0}
        transform="translateY(-50%)"
        zIndex={1}
        colorScheme="teal"
        variant="outline"
        borderRadius="full"
        boxShadow="0 0 8px rgba(0, 0, 0, 0.2)"
      />

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg={bgDrawerContent} color={colorDrawerContent}>
          <DrawerHeader
            borderBottomWidth="1px"
            fontSize="xl"
            fontWeight="bold"
            color={colorDrawerHeader}
            display="flex"
            alignItems="center"
            bg={bgDrawerHeader}
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
          >
            <SettingsIcon mr={2} /> Admin Dashboard
          </DrawerHeader>
          <DrawerBody>
            <Text fontSize="lg" mb={2} fontWeight="bold">
              Menu
            </Text>
            <Divider mb={4} borderColor={borderColorDivider} />

            <List spacing={3}>
              {[
                { icon: MdDashboard, label: "Dashboard" },
                { icon: MdAssignment, label: "Tasks" },
                { icon: MdPeople, label: "Users" },
                { icon: MdCalendarToday, label: "Calendar" },
                { icon: MdInsertDriveFile, label: "Files" },
                { icon: MdAnalytics, label: "Analytics" },
                { icon: MdSettings, label: "Settings" },
                { icon: MdExitToApp, label: "Logout", onClick: onClose }
              ].map(({ icon, label, onClick }) => (
                <ListItem
                  key={label}
                  cursor="pointer"
                  _hover={{ bg: hoverBg }}
                  p={2}
                  borderRadius="md"
                  onClick={onClick}
                >
                  <ListIcon as={icon} fontSize="xl" />
                  {label}
                </ListItem>
              ))}
            </List>

            <Flex alignItems="center" mt={10}>
              <Avatar
                size="lg"
                src={profileImage} // Use the imported image
                mr={4}
                borderWidth={2}
                borderColor={borderColorAvatar}
              />
              <Box>
                <Heading size="md">Sarvadnya Jawle</Heading>
                <Text fontSize="sm" color={textColor}>
                  Web Developer
                </Text>
              </Box>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Container>
  );
};

export default AdminDashboard;
