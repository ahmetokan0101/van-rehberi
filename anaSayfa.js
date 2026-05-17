$(document).ready(function () {

    // Günün Bilgisi Kısmının Listesi bu ha burda rasthele random  ile bir tanesini seçiyor
    var bilgiListesi = [
        "M.Ö 900'lü yıllarda Van bölgesi Urartulara başkentlik yapmıştır.",
        "Dünyaca ünlü Van Kedisi'nin bir gözü mavi, diğeri kehribar rengidir.",
        "Van Otlu Peyniri içinde doğadan toplanan 20 farklı yaban otu bulunur.",
        "Güzelsu'daki Hoşap Kalesi adeta kartal yuvasını andırır.",
        "İnci Kefali dünyada sadece sodalı suya sahip olan Van Gölü'nde yaşayabilir.",
        "Van Gölü, Türkiye'nin en büyük gölüdür ve yöre halkı tarafından 'Van Denizi' olarak anılır.",
        "Akdamar Adası'ndaki tarihi kilise, dış cephesinde İncil ve Tevrat'tan alınmış sahneleri anlatan taş kabartmalarla meşhurdur.",
        "Van Gölü'nün suyu sodalı ve tuzlu olduğu için çamaşır ve bulaşıklar sabun kullanmadan köpürerek yıkanabilir.",
        "Tarihi Van Kalesi, Urartu Kralı I. Sarduri tarafından M.Ö. 840-825 yılları arasında inşa edilmiştir.",
        "Murtuğa, Van kahvaltısının vazgeçilmezlerinden olan ve un, tereyağı, yumurta üçlüsüyle yapılan efsane bir lezzettir.",
        "Van kedileri suyu çok sevmeleri ve kendi isteriyle yaz-kış yüzmeleriyle bilinen dünyadaki nadir kedi türlerindendir.",
        "Meşhur Şamran Kanalı yaklaşık 3000 yıl önce Urartular tarafından yapılmış ve günümüzde bile kısmen kullanılmaktadır.",
        "Van kahvaltısı, 2014 yılında 'Dünyanın en kalabalık kahvaltı sofrası' rekorunu kırarak Guinness Rekorlar Kitabı'na girmiştir.",
        "Her yıl ilkbahar aylarında İnci Kefali balıkları üremek için akıntının tersine doğru, adeta uçarak göç ederler.",
        "Çavuştepe Kalesi, Urartu döneminden günümüze kadar ulaşmış en muntazam ve dikkat çekici tapınakları barındırır.",
        "Dünyanın en eski otoyolu olarak kabul edilen ve Urartular tarafından yapılan 400 kilometrelik kral yolu Van'dan başlar.",
        "Van'ın Başkale ilçesinde bulunan Yavuzlar köyü, görüntüsüyle Kapadokya'daki peri bacalarını andırdığı için 'Vanadokya' olarak bilinir.",
        "Van'ın simgesi olan 'Gevaş Artos Dağı', 3537 metrelik zirvesiyle bölgenin en heybetli dağlarından biridir.",
        "Eski Van Şehri (Ortakapı), kalesinin güney eteklerinde bulunan ve I. Dünya Savaşı'na kadar yerleşimin olduğu tarihi bölgedir.",
        "Van Müzesi, bölgedeki Urartu eserleri açısından dünyanın en zengin koleksiyonlarından birine ev sahipliği yapmaktadır."
    ];
    //aha burda seöiyoruz  


    function yeniBilgiUret() {
        var rastgeleIndeks = Math.floor(Math.random() * bilgiListesi.length);
        var gosterilecekMetin = bilgiListesi[rastgeleIndeks];
        $("#gununBilgisiYazisi").hide().text(gosterilecekMetin).fadeIn(800);
    }
    // sayfa açılınca çalıoşiyor  bu işte bizim event 
    yeniBilgiUret();

    //aha burda butona tıklayınca yeni bilgi getiriyor
    $("#yeniBilgiButonu").click(function () {
        yeniBilgiUret();
    });

    // selamla fonksiyonu burası  burdsa saat dakiak falan alıyrouz o saate göre mesaj göstertiyoruz
    function selamla() {
        var saat = new Date().getHours();

        //burda ise eğer çalışmazsa mesaj var mesaj=""; yap bazen bugha giriyor düzelir
        var mesaj;
        if (saat >= 5 && saat < 12) {
            mesaj = "🌅 Günaydın! Van'da güzel bir sabah...";
        } else if (saat >= 12 && saat < 18) {
            mesaj = "☀️ Harika bir gün! Van turuna devam mı?";
        } else {
            mesaj = "🌙 İyi Akşamlar! Van'ın akşamı bir başkadır.";
        }
        var tarih = new Date().toLocaleDateString();
        var suankiSaat = new Date().toLocaleTimeString('tr-TR', {
            hour: '2-digit',
            minute: '2-digit'
        });

        $("#selamlamaMesaji").text(mesaj);
        $("#selamlamaTarihSaat").text("Takvim: " + tarih + " | Saat: " + suankiSaat);
    }
    selamla();

});
