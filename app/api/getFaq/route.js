import { NextResponse } from 'next/server';

export async function GET(request) {
   
    const data = [
        {
        "id":"1",
        "question": "Salesforce Nedir?",
        "answer": "Salesforce, bulut tabanlı bir müşteri ilişkileri yönetimi (CRM) platformudur. Şirketlerin müşteri ilişkilerini, satış süreçlerini, pazarlama kampanyalarını, hizmet operasyonlarını ve daha fazlasını yönetmelerine yardımcı olan geniş bir çözüm yelpazesi sunar."
        },
        {
        "id":"2",
        "question": "CRM Nedir?",
        "answer": "CRM (Customer Relationship Management - Müşteri İlişkileri Yönetimi), işletmelerin mevcut ve potansiyel müşterileriyle olan etkileşimlerini ve ilişkilerini yönetmelerini sağlayan bir strateji ve teknoloji sistemidir. CRM, satış, pazarlama, müşteri hizmetleri ve destek süreçlerini birleştirerek müşteri memnuniyetini artırmayı ve iş süreçlerini iyileştirmeyi hedefler."
        },    
        {
        "id":"3",
        "question": "Salesforce’un fiyatlandırması nasıldır?",
        "answer": "Salesforce, kullanıcı başına abonelik modeli ile çalışır. Fiyatlandırma, seçilen ürünlere ve kullanıcı sayısına bağlı olarak değişiklik gösterir. Başlangıç seviyesinden enterprise seviyesine kadar farklı fiyat planları sunulmaktadır."
        },
        {
        "id":"4",
        "question": "Salesforce ile güvenlik nasıl sağlanır?",
        "answer": "Salesforce, veri güvenliği konusunda en üst standartları benimser. Şifreleme, kullanıcı doğrulama ve güvenlik denetimleri gibi protokoller kullanarak veri güvenliği sağlanır. İki faktörlü kimlik doğrulama ve kullanıcı rol yönetimi gibi ek güvenlik özellikleri mevcuttur."
        },
    ]

     return NextResponse.json({ data }, { status: 200 })
}