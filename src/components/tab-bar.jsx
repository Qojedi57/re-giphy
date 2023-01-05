import {HStack, Box} from "@chakra-ui/react";
import { NavLink} from "react-router-dom";

function Tabs(){
    return (
        <HStack>
        <NavLink to="/trending">
          {({ isActive }) => (
            <Box
              padding="2"
              borderBottomWidth="thick"
              borderBottomColor={isActive ? "blue.700" : "blue.50"}
            >
              Trending
            </Box>
          )}
        </NavLink>

        <NavLink to="/search">
          {({ isActive }) => (
            <Box
              padding="2"
              borderBottomWidth="thick"
              borderBottomColor={isActive ? "blue.700" : "blue.50"}
            >
              Search
            </Box>
          )}
        </NavLink>
        
        <NavLink to="/random">
          {({ isActive }) => (
            <Box
              padding="2"
              borderBottomWidth="thick"
              borderBottomColor={isActive ? "blue.700" : "blue.50"}
            >
              Random
            </Box>
          )}
        </NavLink>

      </HStack>
    )
}

export default Tabs