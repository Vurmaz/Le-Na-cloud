import { NextResponse } from 'next/server';
import data from '../../../data/projects.json'

export async function GET() {
    if(!data) {
        return NextResponse.json({ data: 'Server error'}, { status:500 })
    }
    return NextResponse.json({ data }, { status: 200 })
}

export async function POST(request) {
    const { id }  = await request.json()
    const project = data.filter((item)=> item.id == id)
    
    return NextResponse.json({ data:project }, { status:200 })
}