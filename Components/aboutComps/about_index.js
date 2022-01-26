import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  FcMultipleDevices,
  FcMoneyTransfer,
  FcSupport,
  FcWorkflow,
  FcAssistant,
} from 'react-icons/fc';
import { ReactElement } from 'react';

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}
          >
            Our Mission
          </Text>
          <Heading>Improve education to facilitate job creation</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            We seek to present teachers with a simple but effective tool to
            teach Career Technical Education (CTE) courses.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }
          >
            <Feature
              icon={
                <Icon as={FcMoneyTransfer} color={'green.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Cost Efficient'}
            />
            <Feature
              icon={<Icon as={FcAssistant} color={'purple.500'} w={5} h={5} />}
              iconBg={useColorModeValue('red.100', 'gray.900')}
              text={'Supported Integration'}
            />
            <Feature
              icon={<Icon as={FcWorkflow} color={'yellow.500'} w={5} h={5} />}
              iconBg={useColorModeValue('teal.100', 'blue.900')}
              text={'User Friendly'}
            />
          </Stack>
        </Stack>
        <Flex align={'center'}>
          <Image
            rounded={'md'}
            alt={'feature image'}
            // src={
            //   'https://lh3.googleusercontent.com/YDpfN5xH3aA5NEORXsNX5hSQJOtnhba40gnanNSSU0Hg31aSwDe9LgLHUSpbY9Kq3CxnwCHVkJWoNpITs0r8_O0TWT2ovFGds63JhQ=w1024-e365'
            // }
            src={
              'https://img2.storyblok.com//f/90801/2000x1106/41bc9bbb40/blog-technology-background.jpg'
            }
            objectFit={'contain'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
