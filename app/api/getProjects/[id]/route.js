import { NextResponse } from "next/server"
import data from '../../../../data/projects.json'

export async function GET(request, { params }) {
    const id = params.id
    const response = data.filter((project) => project.id == id)
    if(!response) {
        return NextResponse.json({ data:'Server error' }, { status:500 })
    }
    return NextResponse.json({ data: response }, { status:200 })
}