import IssueStatusBadge from '@/app/components/IssueStatusBadge'
import { Issue } from '@prisma/client';
import { Heading, Flex, Card, Text } from '@radix-ui/themes'
import ReactMarkDown from "react-markdown";

const IssueDetail = ({issue}: {issue: Issue}) => {
  return (
    <>
    <Heading>{issue.title}</Heading>
        <Flex my={"2"} gap={"4"}>
          <IssueStatusBadge status={issue.status} />
          <Text>{issue.createdAt.toDateString()}</Text>
        </Flex>
        <Card className="prose" mt="4">
          <ReactMarkDown>{issue.description}</ReactMarkDown>
        </Card>
    </>
  )
}

export default IssueDetail
