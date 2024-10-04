import IssueStatusBadge from '@/app/components/IssueStatusBadge'
import { Box, Flex, Card } from '@radix-ui/themes'
import { Skeleton } from '@/app/components';

const loading = () => {
  return (
    <Box className='max-w-xl'>
      <Skeleton />
      <Flex my={"2"} gap={"4"}>
      <Skeleton width={'5rem'}/>
      <Skeleton width={'8rem'} />
      </Flex>
      <Card className='prose'  mt='4'>
      <Skeleton count={3}/>
      </Card>
    </Box>
  )
}

export default loading
