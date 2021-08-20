import { Box, Center, Flex, Wrap, WrapItem } from "@chakra-ui/layout";

export function Links() {
  return (
    <Wrap p={{ base: 4, md: 10 }} align="center">
      <WrapItem
        w={{ base: "100%", md: "49%" }}
        h="130px"
        bg="white"
        borderRadius="10px"
        borderWidth="2px"
        shadow="2xl"
        p={4}
        m={12}
      >
        <h2 className="mb-4 text-2xl">Documentation &rarr;</h2>
        <p className="m-0 text-xl ">111</p>
      </WrapItem>
      <WrapItem
        w={{ base: "100%", md: "49%" }}
        h="130px"
        bg="white"
        borderRadius="10px"
        borderWidth="2px"
        shadow="2xl"
        p={4}
        m={8}
      >
        <h2 className="mb-4 text-2xl">Learn &rarr;</h2>
        <p className="m-0 text-xl ">222</p>
      </WrapItem>
      <WrapItem
        w={{ base: "100%", md: "49%" }}
        h="130px"
        bg="white"
        borderRadius="10px"
        borderWidth="2px"
        shadow="2xl"
        p={4}
        m={8}
      >
        <h2 className="mb-4 text-2xl">Examples &rarr;</h2>
        <p className="m-0 text-xl ">3333</p>
      </WrapItem>

      <WrapItem
        w={{ base: "100%", md: "49%" }}
        h="130px"
        bg="white"
        borderRadius="10px"
        borderWidth="2px"
        shadow="2xl"
        p={4}
        m={8}
      >
        <h2 className="mb-4 text-2xl">Deploy &rarr;</h2>
        <p className="m-0 text-xl ">44444</p>
      </WrapItem>
    </Wrap>
  );
}
