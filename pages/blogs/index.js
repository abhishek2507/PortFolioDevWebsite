/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import {
  Box,
  Image,
  Text,
  Flex,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import Seo from "../../components/Seo";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BaseLayout from "../../components/Wrapper/BaseLayout";
import BaseText from "../../components/Wrapper/BaseText";

const Blog = ({ frontmatter }) => {
  return (
    <React.Fragment>
      <Box>
        <Seo title="Blogs" />
        <Box>
          <header>
            <Header />
          </header>
        </Box>
        <main>
          <BaseLayout>
            <BaseText
              firstTitle="Blogs"
              secondTitle="Content"
              textIcon="./images/abhishekIndexBlog.png"
              topSpacing="2"
            />
            <Flex
              mt="24"
              justify="space-evenly"
              flexWrap="wrap"
              alignItems="start"
              rowGap="20"
              gap="10"
            >
              {frontmatter.map((item, index) => {
                return (
                  <Box
                    key={index}
                    borderRadius="base"
                    w="375px"
                    h={{
                      base: "440px",
                      lg: "440px",
                      md: "440px",
                      sm: "440px",
                      xs: "480px",
                    }}
                    overflow="hidden"
                    bgColor={useColorModeValue("gray.50", "gray.700")}
                    boxShadow="outline"
                    transition="ease-in-out"
                    transitionDuration="0.5s"
                    _hover={{ boxShadow: "2xl" }}
                  >
                    <Link key={index} href={item.href} passHref>
                      <Image
                        src={item.cover_image}
                        alt={item.title}
                        h="250px"
                        w="full"
                        borderRadius="base"
                        transition="ease-in-out"
                        transitionDuration="0.5s"
                        _hover={{
                          transform: "scale(1.1)",
                          cursor: "pointer",
                          transition: "ease-in-out",
                          transitionDuration: "0.3s",
                        }}
                      />
                    </Link>
                    <Box mt="4" p="4">
                      <Link key={index} href={item.href} passHref>
                        <Heading fontSize="2xl" cursor="pointer">
                          {item.title}
                        </Heading>
                      </Link>
                      <Text my="2">{item.date}</Text>
                      <Text my="2" fontWeight="600">
                        {item.subtitle}
                      </Text>
                    </Box>
                  </Box>
                );
              })}
            </Flex>
          </BaseLayout>
        </main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </React.Fragment>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("data", "blogs"));

  let frontmatter = [];

  files.forEach((filename) => {
    const markdown = fs.readFileSync(
      path.join("data", "blogs", filename),
      "utf-8"
    );
    const matterResult = matter(markdown);
    frontmatter.push(matterResult.data);
  });

  // Sort frontmatter array by date in descending order
  frontmatter.sort((a, b) => new Date(b.date) - new Date(a.date));

  return {
    props: {
      frontmatter,
    },
  };
}

export default Blog;
