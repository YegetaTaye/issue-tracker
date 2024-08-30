import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import IssueForm from "../../_components/IssueForm";

interface props{
    params: {id: string}
}

const EditIssueDetailPage = async ({params}: props) => {
    const issue = await prisma.issue.findUnique({
        where: {
            id: parseInt(params.id)
        }
    })

    if(!issue) notFound();

  return <IssueForm issue={issue}/>;
};

export default EditIssueDetailPage;
