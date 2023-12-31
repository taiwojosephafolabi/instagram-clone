import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

const PostHeader = () => {
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'} mb={2}>
      <Flex alignItems={'center'} gap={2}>
        <Avatar src='../public/img1.png' alt='user profile pic' size={'sm'} />
        <Flex fontSize={12} fontWeight={'bold'} gap={2}>allthingsjta
        <Box color={'gray.500'}>• 1w
          </Box></Flex>
      </Flex>
      <Box cursor={'pointer'}>
        <Text fontSize={12} color={'blue.500'} fontWeight={'bold'} _hover={{color: 'white'}} transition={'0.2s ease-in-out'}>Unfollow</Text>
        
      </Box>
    </Flex>
  );
};

export default PostHeader;
