import { NextResponse } from 'next/server';
import data from '../../../data/principles.json'

export async function GET(request) {
    
     return NextResponse.json({ data }, { status: 200 })
}