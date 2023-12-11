import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()
export const getUsers: any = async () => {
    const users = prisma.users.findMany()
    return NextResponse.json(users);;
}