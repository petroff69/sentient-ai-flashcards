
import * as React from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import StayUpdated from "./ui/StayUpdated";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white/75 backdrop-blur-lg dark:bg-gray-900 dark:border-gray-700 py-4 z-10">
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-between sm:flex-row space-y-4 sm:space-y-0">
          {/* Copyright Text */}
          <span className="text-lg text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} @sentient ai. All rights reserved.
          </span>

          {/* Social Media Icons */}
          <div className="flex items-center gap-10">
          <div className="flex space-x-4">
            <Link href="https://github.com/petroff69" className={buttonVariants({ variant: "ghost", size: "icon" })}>
              <Github className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://x.com/petrov14439" className={buttonVariants({ variant: "ghost", size: "icon" })}>
              <Twitter className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://zlatimir-petroff-portfolio.vercel.app/" className={buttonVariants({ variant: "ghost", size: "icon" })}>
              <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span className="sr-only">Portfolio</span>
            </Link>
          </div>
          <StayUpdated />
          </div>
        </div>
        
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
