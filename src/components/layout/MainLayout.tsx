"use client";
import React, { ReactNode, useState } from "react";
import Dropback from "../ui/Dropback";
import Sidemenu from "../ui/Sidemenu";
import Nav from "../ui/Nav";
import Footer from "../ui/Footer";
import { useZoomContext } from "@/context/ZoomContext";
import Overlay from "../ui/Overlay";
import { AnimatePresence } from "framer-motion";

interface MainLayoutProps {
  children: ReactNode;
  color:string
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, color }) => {
  const [open, setOpen] = useState(false);

  const { selectImage } = useZoomContext();

  return (
    <>
      <Dropback open={open} setOpen={setOpen} />
      <Sidemenu open={open} setOpen={setOpen} />
      <Nav open={open} setOpen={setOpen} color={color} />
 
      <AnimatePresence>{selectImage.open && <Overlay />}</AnimatePresence>

      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
