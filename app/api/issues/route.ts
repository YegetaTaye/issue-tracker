import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import {z} from 'zod'
import {issueSchema} from '@/app/validationSchemas'



export async function POST(request: NextRequest) {

    const body = await request.json()
    const validate = issueSchema.safeParse(body);

    if(!validate.success){
        return NextResponse.json(validate.error.format(), {status: 400})
    }

    const newIssue = await prisma.issue.create({
        data: {
            title: body.title,
            description: body.description
        }
    })

    return NextResponse.json(newIssue, {status: 201})

}