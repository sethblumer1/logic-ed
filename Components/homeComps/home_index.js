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
    <Stack
      minH={'100vh'}
      direction={{ base: 'column', md: 'row' }}
      marginRight={{ base: '0px', md: '150px' }}
      marginLeft={{ base: '0px', md: '150px' }}
    >
      <Flex
        p={8}
        maxH={['50vh', '100vh']}
        flex={1}
        align={'flex-start'}
        justify={'center'}
        backgroundImage="linear-gradient(180deg, #A1D3F5, #0248CD)"
        backgroundImage="#fdfdfd"
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
              // _after={{
              //   content: "''",
              //   width: 'full',
              //   height: useBreakpointValue({ base: '20%', md: '30%' }),
              //   position: 'absolute',
              //   bottom: 1,
              //   left: 0,
              //   zIndex: -1,
              // }}
              color={'#75C1F5'}
            >
              Course management,
            </Text>
            <br />{' '}
            <Text color={'#0248CD'} as={'span'}>
              made easy.
            </Text>{' '}
          </Heading>

          <Text
            fontSize={{ base: 'md', lg: 'lg' }}
            color={'black'}
            align={'flex'}
            justify={'center'}
          >
            Enable your students' futures by seamlessly providing Career
            Technical Education (CTE) level classes with our software.
          </Text>
          <Stack
            direction={{ base: 'row' }}
            spacing={4}
            display="flex"
            justifyContent="flex"
            alignItems="center"
          >
            <Link href="/signup">
              <Button
                component="a"
                // onClick={() => handleIntroClick(idx)

                bgColor={'yellow.400'}
                _hover={{ bg: 'yellow.200' }}
              >
                {'Get started'}
              </Button>
            </Link>
            <Link href="/about">
              <Button
                // onClick={() => handleIntroClick(idx)

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
      <Flex flex={1} align="flex-start">
        <Image
          alt={'Login Image'}
          objectFit={'contain'}
          src={'/education-icon.svg'}
          paddingTop={{ base: '0px', md: '60px' }}
        />
      </Flex>
    </Stack>
  );
};

export default LandingPage;
