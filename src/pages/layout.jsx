import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Tabs from "../components/tab-bar";
import Navbar from "../components/navbar";
export default function Layout(){
    return (
        <Box padding="2">
          <Navbar />
        <Tabs />
          <Outlet />
        </Box>
    );
}