import React from "react";
import {
  Stack,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Box,
  Text,
  Link,
  Grid,
  Image,
  Container,
  Textarea,
  Heading,
} from "@chakra-ui/core";

import { Formik, Form, Field } from "formik";
import { news } from "./news";

type Blog = {
  title: string;
  image: string;
  body: string;
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

function App() {
  const [blogs, setBlogs] = React.useState<Blog[]>([]);
  const [currentSelectedBlog, setCurrentSelectedBlog] = React.useState<Blog>();
  async function addBlog(values: Blog) {
    const timestamp = new Date();
    const newBlog: Blog = {
      ...values,
      id: uuidv4(),
      createdAt: timestamp,
      updatedAt: timestamp,
    };
    setBlogs([...blogs, newBlog]);
  }
  function _updateBlog(oldValues: Blog) {
    return async function (newValues: Blog) {
      const timestamp = new Date();
      const newBlog: Blog = {
        ...newValues,
        createdAt: oldValues.createdAt,
        updatedAt: timestamp,
      };
      setBlogs([...blogs.filter((x) => x.id !== oldValues.id), newBlog]);
    };
  }
  return (
    <Flex mx={{ md: "8", base: "2" }} flexDirection="column" align="center">
      <Stack spacing={3} textAlign="center" background="rgba(250,250,250,0.1)" borderRadius="lg" padding={4} mb={5}>
        <Heading as="h1" fontSize={{ md: "4xl", base: "xl" }} >
          React + TypeScript + GraphQL + AWS CMS
        </Heading>
        <Link
          fontWeight="bold"
          mt="4"
          color="blue.900"
          target="_blank"
          _hover={{ color: "teal.300", backgroundColor: "blue.900" }}
          href="https://github.com/sw-yx/talk-react-summit-demo-cms"
        >
          https://git.io/JUBZX
        </Link>
      </Stack>
      <Flex mx="8" flexDirection={{ md: "row", base: "column" }}>
        <Editor
          onSubmit={
            currentSelectedBlog ? _updateBlog(currentSelectedBlog) : addBlog
          }
          initVals={currentSelectedBlog}
          setCurrentSelectedBlog={setCurrentSelectedBlog}
          key={JSON.stringify(currentSelectedBlog)}
        />
        {blogs.length > 0 && (
          <Grid
            templateColumns={{ md: "200px 1fr", base: "auto" }}
            columnGap={2}
            rowGap={2}
            background="rgba(250,250,250,0.9)"
            borderRadius="lg"
            padding={8}
          >
            {blogs.map((blog, key) => {
              return (
                <BlogLine
                  {...{
                    blog,
                    key,
                    selected: currentSelectedBlog
                      ? blog.id === currentSelectedBlog.id
                      : false,
                    setCurrentSelectedBlog,
                  }}
                />
              );
            })}
          </Grid>
        )}
      </Flex>
    </Flex>
  );
}

function BlogLine({
  blog,
  selected,
  setCurrentSelectedBlog,
}: {
  blog: Blog;
  selected: boolean;
  setCurrentSelectedBlog: (blog: Blog) => void;
}) {
  return (
    <>
      {/* <Box flexShrink={0}> */}
      <Image
        borderRadius="lg"
        // mx="4"
        // width={{ md: 40 }}
        // height={20}
        objectFit="cover"
        src={blog.image}
        alt="some blog image"
      />
      {/* </Box> */}
      <Box
        my={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
        onClick={() => setCurrentSelectedBlog(blog)}
        backgroundColor={selected ? "rgba(150,150,250, 0.1)" : undefined}
      >
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="sm"
          letterSpacing="wide"
          color="teal.600"
        >
          {String(blog.updatedAt?.toDateString())}
        </Text>
        <Text
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
        >
          {String(blog.title)}
        </Text>
        <Text mt={2} color="gray.500">
          {String(blog.body.slice(0, 90))}...
        </Text>
      </Box>
    </>
  );
}

function Editor(props: {
  initVals?: Blog;
  onSubmit: (values: any) => Promise<void>;
  setCurrentSelectedBlog: (blog?: Blog) => void;
}) {
  const initVals = props.initVals || ({} as Blog);
  return (
    <Container
      bgColor="rgba(250, 250, 250,0.5)"
      // mb={{ md: "8", base: "2" }}
      mr="8"
      p="4"
      borderRadius="lg"
      maxWidth="600px"
      height="fit-content"
    >
      <Formik<Blog>
        initialValues={initVals}
        onSubmit={(values, actions) => {
          props.onSubmit(values).then(() => {
            actions.setSubmitting(false);
            actions.resetForm({
              values: {
                title: "",
                image: "",
                body: "",
              },
            });
          });
        }}
      >
        {(_props) => (
          <Form>
            <Field
              name="title"
              validate={(x: string) => x.length < 1 && "needs a title"}
            >
              {({ field, form }: any) => (
                <FormControl
                  isInvalid={form.errors.title && form.touched.title}
                >
                  <FormLabel htmlFor="title">Title</FormLabel>
                  <Input
                    {...field}
                    id="title"
                    width={{ base: "100%", md: "lg" }}
                    placeholder="title"
                    mb="8px"
                  />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field
              name="image"
              validate={(x: string) => x.length < 1 && "needs a image"}
            >
              {({ field, form }: any) => (
                <FormControl
                  isInvalid={form.errors.image && form.touched.image}
                >
                  <FormLabel htmlFor="image">Image</FormLabel>
                  <Input
                    {...field}
                    id="image"
                    placeholder="https://etc"
                    width={{ base: "100%", md: "lg" }}
                    mb="8px"
                  />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field
              name="body"
              validate={(e: string) => e.length < 1 && "needs a body"}
            >
              {({ field, form }: any) => (
                <FormControl isInvalid={form.errors.body && form.touched.body}>
                  <FormLabel htmlFor="body" mb="8px">
                    Body
                  </FormLabel>
                  <Textarea
                    {...field}
                    id="body"
                    placeholder="body"
                    width={{ base: "100%", md: "100%" }}
                    height={{ base: "100%", md: "lg" }}
                    // size="lg"
                  />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Flex
              justifyContent="space-between"
              flexDirection={{ base: "column", md: "row" }}
            >
              <Button
                mt={4}
                colorScheme="red"
                variant="ghost"
                onClick={() => {
                  _props.resetForm({
                    values: {
                      title: "",
                      image: "",
                      body: "",
                    },
                  });
                }}
              >
                Clear
              </Button>
              <div>
                <Button
                  mt={4}
                  // ml={4}
                  type="button"
                  onClick={() => {
                    const article =
                      news[Math.floor(Math.random() * news.length)];
                    props.setCurrentSelectedBlog(undefined);
                    _props.setValues({
                      title: article.title,
                      image: article.urlToImage,
                      body: article.description,
                    });
                  }}
                >
                  AutoFill
                </Button>
                <Button
                  mt={4}
                  ml={4}
                  colorScheme="teal"
                  isLoading={_props.isSubmitting}
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </Flex>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default App;

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      // eslint-disable-next-line
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
