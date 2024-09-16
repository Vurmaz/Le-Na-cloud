import { NextResponse } from 'next/server';

export async function GET(request) {
   
    const data = [
        {
            title:"Biz Kimiz?",
            desc:`Dijital dönüşüm ve Salesforce uzmanlığıyla, işletmelerin dijital dünyada ihtiyaç duyduğu yenilikçi çözümleri sunan bir teknoloji şirketidir. Çeviklik, yalınlık ve mükemmeliyet ilkeleriyle hareket ederek, işletmelerin dijitalleşme süreçlerini hızlandırıyor, verimliliklerini artırıyor ve rekabet güçlerini maksimize ediyoruz.Dijital dönüşüm sürecinde, müşterilerimize özel çözümler sunarak, iş süreçlerini optimize ediyor ve sürdürülebilir büyüme için gerekli altyapıyı sağlıyoruz. Teknolojiyi iş stratejileriyle entegre ederek, müşterilerimizin operasyonlarını daha verimli hale getiriyor, maliyetlerini düşürüyor ve müşteri deneyimlerini iyileştiriyoruz.`            
        },
        {
            title:"Misyonumuz",
            desc:`Le-Na Cloud olarak, müşterilerimizin iş süreçlerini dijitalleştirerek, operasyonel mükemmeliyeti ve sürdürülebilir büyümeyi destekleyen yenilikçi çözümler sunuyoruz. Amacımız, işletmelerin değişen teknoloji dünyasında rekabet avantajı kazanmalarını sağlayacak çevik, esnek ve etkili dijital stratejiler geliştirmektir.`
        },
        {
            title:"Vizyonumuz",
            desc:"Dijital dönüşüm alanında lider bir güç olmak ve müşterilerimize sunduğumuz hizmetlerle sektörde referans gösterilen bir marka haline gelmek. Le-Na Cloud, müşteri odaklı yaklaşımı ve teknolojik mükemmeliyeti ile iş dünyasının dijital geleceğini şekillendirmeyi hedeflemektedir."
        }
    ]

     return NextResponse.json({ data }, { status: 200 })
}