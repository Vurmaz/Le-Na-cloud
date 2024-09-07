import { NextResponse } from "next/server";
import services from '@/data.json'
export async function GET(request, context) {

  const { params } = context

  const data = services.filter((service) => service.name == params.serviceName)

  if(!params.serviceName) {
    return NextResponse.json({ message:"Failed to find service" }, { status:500 })
  }
  return NextResponse.json({ data }, { status: 200 })

} 