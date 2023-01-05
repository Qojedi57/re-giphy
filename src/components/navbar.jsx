import { Box, Flex, HStack } from "@chakra-ui/react";
import {NavLink} from "react-router-dom"
function Navbar(){
    return (
        <Box>
        <Flex
          w="100%"
          px="6"
          py="5"
          align="center"
          justify="space-between"
        >
        

          <HStack>
           <NavLink to="/trending">Home</NavLink>
          </HStack>
          
        </Flex>
      </Box>   
    )
}

export default Navbar