import { NextResponse } from 'next/server';

export async function GET(request) {
   
    const principles = [
        {
            name:"Globallik",
            icon:"IoMdGlobe",
            desc:"Dünya çapındaki müşteri ağımızla en iyi hizmeti sunuyoruz"
        },
        {
            name:"Takım Çalışması",
            icon:"RiTeamLine",
            desc:"Bilgili ekipimizle size en iyi çözümleri sunmak için çalışıyoruz"            
        },
        {
            name:"Mükemelliyetçilik",
            icon:"CiStar",
            desc:"En iyi hizmeti alabilmeniz için mükemelliyetçi bir anlayışla çalışıyoruz"            
        },
        {
            name:"İtetişim",
            icon:"FaComments",
            desc:"Sürekli iletişim kurarak aklınızdaki fikri uygulamaya çalııyoruz"            
        },        

    ]

     return NextResponse.json({ principles }, { status: 200 })
}