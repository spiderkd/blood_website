// Import necessary Chakra UI components
import { Box, Flex, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

// Your Navbar component
const Navbarr = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      bg="teal.500"
      color="white"
    >
      {/* Your brand/logo */}
      <Box>
        <strong>Logo</strong>
      </Box>

      {/* Hamburger icon for mobile view */}
      <IconButton
        display={{ base: 'block', md: 'none' }}
        icon={<HamburgerIcon />}
        onClick={onOpen}
      />

      {/* Drawer for mobile view */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Menu</DrawerHeader>
          <DrawerBody>
            {/* Your navigation links */}
            <Box>
              <strong>Link 1</strong>
            </Box>
            <Box>
              <strong>Link 2</strong>
            </Box>
            {/* Add more links as needed */}
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Your regular navigation links for larger screens */}
      <Flex
        display={{ base: 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
      >
        <Box>
          <strong>Link 1</strong>
        </Box>
        <Box>
          <strong>Link 2</strong>
        </Box>
        {/* Add more links as needed */}
      </Flex>
    </Flex>
  );
};

export default Navbarr;
