const data = [
    {
        "id": crypto.randomUUID(),
        "cover": "https://img.kitapyurdu.com/v1/getImage/fn:253839/wh:true/wi:800",
        "title": "Beyaz Kale",
        "author": "Orhan Pamuk",
        "description": "Osmanlı döneminde geçen ve bir Venedikli kölenin hikayesini anlatan roman.",
        "genre": "Tarihi Roman",
        "rating": 4,
        "price": 75,
        "createdAt": "2024-06-07"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://images-na.ssl-images-amazon.com/images/I/71Q1Iu4suSL.jpg",
        "title": "İnce Memed",
        "author": "Yaşar Kemal",
        "description": "Anadolu'nun eşkıya hikayelerini konu alan klasik bir Türk romanı.",
        "genre": "Roman",
        "rating": 5,
        "price": 85,
        "createdAt": "2024-05-14"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://img.kitapyurdu.com/v1/getImage/fn:11462655/wh:true/wi:220",
        "title": "Tutunamayanlar",
        "author": "Oğuz Atay",
        "description": "Modern Türk edebiyatının en önemli eserlerinden biri.",
        "genre": "Roman",
        "rating": 5,
        "price": 95,
        "createdAt": "2024-05-30"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg",
        "title": "Serenad",
        "author": "Zülfü Livaneli",
        "description": "Aşk, tarih ve dram dolu bir hikaye.",
        "genre": "Roman",
        "rating": 4,
        "price": 100,
        "createdAt": "2024-06-10"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://img.kitapyurdu.com/v1/getImage/fn:5192424/wh:true/wi:220",
        "title": "Kafamda Bir Tuhaflık",
        "author": "Orhan Pamuk",
        "description": "İstanbul'un değişen yüzünü ve insanların hayatlarını konu alan bir roman.",
        "genre": "Roman",
        "rating": 4,
        "price": 110,
        "createdAt": "2024-05-19"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://img.kitapyurdu.com/v1/getImage/fn:53812/wh:true/wi:220",
        "title": "Masumiyet Müzesi",
        "author": "Orhan Pamuk",
        "description": "Aşk ve hatıralar üzerine dokunaklı bir hikaye.",
        "genre": "Roman",
        "rating": 5,
        "price": 120,
        "createdAt": "2024-04-19",
        "upcoming": true
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://img.kitapyurdu.com/v1/getImage/fn:11866950/wh:true/wi:220",
        "title": "Saatleri Ayarlama Enstitüsü",
        "author": "Ahmet Hamdi Tanpınar",
        "description": "Modernleşen Türkiye’nin değişimini hicveden bir roman.",
        "genre": "Gülmece",
        "rating": 5,
        "price": 80,
        "createdAt": "2024-03-22"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://img.kitapyurdu.com/v1/getImage/fn:1124996/wh:true/wi:220",
        "title": "Huzur",
        "author": "Ahmet Hamdi Tanpınar",
        "description": "İkinci Dünya Savaşı öncesi İstanbul’da geçen bir aşk hikayesi.",
        "genre": "Roman",
        "rating": 4,
        "price": 90,
        "createdAt": "2024-04-10"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://img.kitapyurdu.com/v1/getImage/fn:7428919/wh:true/wi:220",
        "title": "Çalıkuşu",
        "author": "Reşat Nuri Güntekin",
        "description": "Bir öğretmenin Anadolu’da yaşadığı zorluklar ve aşk hikayesi.",
        "genre": "Aşk",
        "rating": 5,
        "price": 75,
        "createdAt": "2024-05-05"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://img.kitapyurdu.com/v1/getImage/fn:1105919/wh:true/wi:220",
        "title": "Kuyucaklı Yusuf",
        "author": "Sabahattin Ali",
        "description": "Bir yetimin Ege köylerinde yaşadığı dram ve aşk dolu hayat hikayesi.",
        "genre": "Drama",
        "rating": 5,
        "price": 70,
        "createdAt": "2024-05-25"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://img.kitapyurdu.com/v1/getImage/fn:11513182/wh:true/wi:220",
        "title": "Anayurt Oteli",
        "author": "Yusuf Atılgan",
        "description": "Bir otel sahibi olan Zebercet'in yalnızlık ve yabancılaşma hikayesi.",
        "genre": "Psikolojik Roman",
        "rating": 4,
        "price": 80,
        "createdAt": "2024-03-15"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://img.kitapyurdu.com/v1/getImage/fn:1207631/wh:true/wi:220",
        "title": "Kürk Mantolu Madonna",
        "author": "Sabahattin Ali",
        "description": "Bir aşk ve yalnızlık hikayesi.",
        "genre": "Aşk",
        "rating": 5,
        "price": 65,
        "createdAt": "2024-04-18"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://img.kitapyurdu.com/v1/getImage/fn:286363/wh:true/wi:220",
        "title": "Fatih-Harbiye",
        "author": "Peyami Safa",
        "description": "Doğu ve Batı kültürleri arasında kalmış bir genç kızın hikayesi.",
        "genre": "Roman",
        "rating": 4,
        "price": 60,
        "createdAt": "2024-06-01"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://img.kitapyurdu.com/v1/getImage/fn:11802440/wh:true/wi:220",
        "title": "Matmazel Noraliya'nın Koltuğu",
        "author": "Peyami Safa",
        "description": "Bir aşk hikayesinin yanında mistik öğeler içeren bir roman.",
        "genre": "Gizem",
        "rating": 4,
        "price": 70,
        "createdAt": "2024-06-11"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://img.kitapyurdu.com/v1/getImage/fn:11641414/wh:true/wi:220",
        "title": "Devlet Ana",
        "author": "Kemal Tahir",
        "description": "Osmanlı İmparatorluğu’nun kuruluş yıllarını anlatan bir roman.",
        "genre": "Tarihi Roman",
        "rating": 5,
        "price": 95,
        "createdAt": "2024-04-22"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://img.kitapyurdu.com/v1/getImage/fn:11641415/wh:true/wi:220",
        "title": "Esir Şehrin İnsanları",
        "author": "Kemal Tahir",
        "description": "Milli Mücadele yıllarında İstanbul’da geçen bir hikaye.",
        "genre": "Tarihi Roman",
        "rating": 4,
        "price": 85,
        "createdAt": "2024-05-12"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://img.kitapyurdu.com/v1/getImage/fn:11439037/wh:true/wi:220",
        "title": "Yaban",
        "author": "Yakup Kadri Karaosmanoğlu",
        "description": "Kurtuluş Savaşı sırasında Anadolu köylülerinin yaşamını anlatan roman.",
        "genre": "Tarihi Roman",
        "rating": 5,
        "price": 75,
        "createdAt": "2024-05-22"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://img.kitapyurdu.com/v1/getImage/fn:11764838/wh:true/wi:220",
        "title": "Çankaya",
        "author": "Falih Rıfkı Atay",
        "description": "Atatürk’ün hayatı ve Kurtuluş Savaşı’nı anlatan bir eser.",
        "genre": "Biyografi",
        "rating": 5,
        "price": 80,
        "createdAt": "2024-04-25"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://images-na.ssl-images-amazon.com/images/I/81vpsIs58WL.jpg",
        "title": "Vurun Kahpeye",
        "author": "Halide Edib Adıvar",
        "description": "Milli Mücadele dönemi Anadolu’sunda geçen bir hikaye.",
        "genre": "Tarihi Roman",
        "rating": 4,
        "price": 70,
        "createdAt": "2024-03-20"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://img.kitapyurdu.com/v1/getImage/fn:9729096/wh:true/wi:220",
        "title": "Ateşten Gömlek",
        "author": "Halide Edib Adıvar",
        "description": "Kurtuluş Savaşı’nı anlatan bir roman.",
        "genre": "Tarihi Roman",
        "rating": 5,
        "price": 85,
        "createdAt": "2024-04-05"
    }
];

function getAllBooks() {
    return data;
}

export { getAllBooks };
