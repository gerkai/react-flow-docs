import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Box, Heading, Flex, Text, Button, SimpleGrid } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

import HeroFlow from '../components/HeroFlow';
import ExampleFlow from '../components/ExampleFlow';
import ExampleFlowA from '../components/ExampleFlow/A';
import ExampleFlowB from '../components/ExampleFlow/B';
import ExampleFlowC from '../components/ExampleFlow/C';

import Stats from '../components/Stats';
import Showcase from '../components/Showcase';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="Home" description={siteConfig.customFields.description}>
      <Box height={['80vh', null, null, 580]} position="relative">
        <HeroFlow />
      </Box>

      <Box color="white" bgColor="silver.800">
        <Box maxWidth="container.xl" mx="auto" px={3} py={8}>
          <SimpleGrid columns={[1, null, 2]}>
            <Stats />
            <Box>
              <Text fontSize="lg">
                React Flow is a MIT-licensed open source library. You can help us to ensure the
                further development and maintanance by subscribing to one of our pro plans.
              </Text>
              <Button
                rightIcon={<ArrowForwardIcon fontSize={19} />}
                variant="link"
                as="a"
                href="https://pro.reactflow.dev"
                _hover={{ color: 'white' }}
              >
                React Flow Pro
              </Button>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>

      <ExampleFlow
        title="Feature-rich"
        text="React Flow comes with seamless zooming & panning, customizable node and edge types, single and multi-selection, several event handlers and more."
        Flow={ExampleFlowA}
        color="purple"
      />

      <ExampleFlow
        title="Nested Graphs"
        text="React Flow has built-in support for rendering sub graphs and nested nodes."
        Flow={ExampleFlowB}
        rtl
        color="yellow"
        dark
      />

      <ExampleFlow
        title="Additional Components"
        text="React Flow includes a MiniMap, Controls, Background and a FlowProvider you can use to access internal state outside the ReactFlow component."
        Flow={ExampleFlowC}
        color="red"
      />

      <Box bgColor="silver.800" px={3} py={24}>
        <Box textAlign="center" m="0 auto" maxWidth="container.md">
          <Heading mb={5} fontFamily="body" fontWeight="black" size="2xl" color="white">
            Showcase
          </Heading>
          <Text mb={20} fontFamily="body" fontSize="xl" mx="auto" color="gray.300">
            React Flow can be used for a wide range of applications: Music Synthesizers, Machine
            Learning Modeling, Conversational UIs.
          </Text>
        </Box>
        <Showcase />
      </Box>
    </Layout>
  );
}
