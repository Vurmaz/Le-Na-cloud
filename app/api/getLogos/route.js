import { NextResponse } from 'next/server';

export async function GET(request) {
    const services = [
        { id:1, name:'Sales cloud',  Icon:'FaChartLine', color:'sales', desc:'Dijital dünyanın 1 numaralı satış platformuyla daha hızlı müşteri, fırsat ve pipeline yönetimi.'},
        { id:2, name:'Service cloud', Icon:'FaHeart' ,color:'service', desc:'Müşteri destek süreçlerinizi tüm dijital kanallardan aynı deneyimi sunarak yönetin.'},
        { id:3, name:'Marketing cloud', Icon:'MdOutlinePersonSearch', color:'marketing', desc:'Doğru zamanda doğru mesajlarla müşterilerle doğru dijital pazarlama kanallarıyla etkileşim kurun.'},
        { id:4, name:'Commerce cloud', Icon:'FaShoppingCart', color:'commerce', desc:'Çevrimiçi satın almadan her yerden teslim almaya kadar B2B ve B2C müşterileriyle bağlantı kurun.'},
        { id:5, name:'Einstein AI', Icon:'GiMaterialsScience', color:'einstein', desc:'Salesforce Customer 360 Platform genelinde Yapay Zeka kullanarak daha hızlı kararlar alın, daha üretken çalışanlara ve daha mutlu müşterilere sahip olun.' },
        { id:6, name:'Tableau', Icon:'BsFillBarChartFill', color:'tableau', desc:'Verileri görselleştirerek daha kolay anlaşılabilir hale getiren ve iş zekasını güçlendiren bir araçtır.'},
        { id:7, name:'MuleSoft', Icon:'TbHexagonLetterMFilled', color:'mulesoft', desc:`MuleSoft, Salesforce'un API yönetimi ve entegrasyon platformu olup, sistemleri hızlıca bağlar.`},
        { id:8, name:'Slack', Icon:'FaSlack', color:'slack', desc:'Slack, ekiplerin işbirliğini hızlandıran, entegre iletişim ve otomasyon aracıdır.' },
        { id:9, name:'Data cloud', Icon:'FaSlack', color:'data', desc:'Data Cloud, tüm verileri birleştirip analiz eden, gerçek zamanlı müşteri verisi platformudur.' }
    ]    

     return NextResponse.json({ data: services }, { status: 200 })
}
