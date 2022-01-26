import {
  Stack,
  Flex,
  Button,
  Image,
  Heading,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

import Link from 'next/link';
import { useDisclosure } from '@chakra-ui/hooks';
import { useState } from 'react';

const LandingPage = () => {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex
        p={8}
        maxH={['50vh', '100vh']}
        flex={1}
        align={'center'}
        justify={'center'}
        backgroundImage="linear-gradient(180deg, #A1D3F5, #0248CD)"
      >
        <Stack
          spacing={6}
          w={'full'}
          maxW={'lg'}
          align={'flex'}
          justify={'center'}
        >
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                zIndex: -1,
              }}
              color={'white'}
            >
              Course management
            </Text>
            <br />{' '}
            <Text color={'black'} as={'span'}>
              made easy.
            </Text>{' '}
          </Heading>

          <Text
            fontSize={{ base: 'md', lg: 'lg' }}
            color={'white'}
            align={'flex'}
            justify={'center'}
          >
            Enable your students' futures by seamlessly providing Career
            Technical Education (CTE) level classes with our software.
          </Text>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            display="flex"
            justifyContent="flex"
            alignItems="center"
          >
            <Link href="/login">
              <Button
                component="a"
                // onClick={() => handleIntroClick(idx)
                // m={2}
                bgColor={'yellow.400'}
                _hover={{ bg: 'yellow.200' }}
              >
                {'Get started'}
              </Button>
            </Link>
            <Link href="/about">
              <Button
                // onClick={() => handleIntroClick(idx)
                // m={2}
                color={'white'}
                bgColor={'black'}
                _hover={{ bg: 'gray.700' }}
              >
                {'Learn more'}
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'contain'}
          src={'https://i.ibb.co/6bF8HZJ/Logic-Ed-logo-color-1.png'}
        />
      </Flex>
    </Stack>
  );
};

export default LandingPage;
