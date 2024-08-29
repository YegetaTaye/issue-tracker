import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import React from 'react'

interface props{
    params: {id: string}
}

const IssueDetailPage = async ({params}:props) => {


    const issue = await prisma.issue.findUnique({
        where: {
            id: parseInt(params.id)
        }
    })

    if(!issue)
        notFound();

  return (
    <div>
        <p>{issue.title}</p>
        <p>{issue.description}</p>
        <p>{issue.createdAt.toDateString()}</p>
    </div>
  )
}

export default IssueDetailPage
