import { NextResponse } from 'next/server';

export async function GET(request) {
   
    const data = [
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
            name:"Mükemmeliyetçilik",
            icon:"CiStar",
            desc:"En iyi hizmeti alabilmeniz için mükemelliyetçi bir anlayışla çalışıyoruz"            
        },
        {
            name:"İletişim",
            icon:"FaComments",
            desc:"Sürekli iletişim kurarak aklınızdaki fikri uygulamaya çalışıyoruz"            
        },        

    ]

     return NextResponse.json({ data }, { status: 200 })
}