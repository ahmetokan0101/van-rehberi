$(document).ready(function () {

    //SETTİMEOUT İLE 1 SANİYE BEKLİYOUZ SONRA KAYBOLUYOR
    setTimeout(function () {
        $("#preloader").fadeOut(400);
        $("#preloader").remove();
    }, 1000);
    //SETTİMEOUT SONU


    // burda  floor ile sayısı tam sayı yapıyoruz sonra radnom 0 1 arası sayı üretiyor  daha sonra onu 100 k ile çarıyoz ve o bizimsayi oluyur
    var ziyaretciSayisi = Math.floor(Math.random() * 100001);
    $("#ziyaretciSayi").text(ziyaretciSayisi.toLocaleString("tr-TR"));
    //Rastgele Ziyaretci Sayisi Sonu


    //burada scroola göre mseafesine göre seçim yaptırıoyruz if else ile kaybolup geliyor 
    $(window).scroll(function () {
        var scrollMesafesi = $(window).scrollTop();
        if (scrollMesafesi > 300) {
            $('#yukariCik').fadeIn();
        } else {
            $('#yukariCik').fadeOut();
        }
    });

    $("#yukariCik").click(function () {
        $(window).scrollTop(0);
    });
    //scroll

    //burda modala tasarımı html etiketlerini ekledim  sonra  body etlettim burası  resime tıklayınca  açılan yer
    var modalHTML = '<div id="resimModali" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.85); text-align:center; padding-top:5%;">';
    modalHTML = modalHTML + '<img id="acilanResim" src="" style="max-height:80%; max-width:90%; border:5px solid white; border-radius:10px;">';
    modalHTML = modalHTML + '<br><span class="text-white mt-3" style="font-size:18px;">Kapatmak için tıklayın</span>';
    modalHTML = modalHTML + '</div>';
    $("body").append(modalHTML);

    //burda resmi seçiyoruz  üstüne gelince imleç değişiyor 
    $("img[src$='.jpg']").css("cursor", "pointer");

    //burda resme tıklanınca yolunu alıyoruz   ve modala gönderiyoruz orda gösteriyro sorna boş yere tıklayınca kapanıyor fade out ile
    $("img[src$='.jpg']").click(function () {
        var resimYolu = $(this).attr("src");
        $("#acilanResim").attr("src", resimYolu);
        $("#resimModali").fadeIn();
    });

    $("#resimModali").click(function () {
        $("#resimModali").fadeOut();
    });
    //resim modali bitti

    //burda yazi boyutunu artırıp azaltıyoruz burası  font size  özeliği  +- butonlari 
    var yaziBoyutu = 16;

    $("#yaziBuyut").click(function () {
        yaziBoyutu = yaziBoyutu + 2;
        var yeniBoyut = yaziBoyutu + "px";
        $("p.text-secondary").css("font-size", yeniBoyut);
    });

    $("#yaziKucult").click(function () {
        yaziBoyutu = yaziBoyutu - 2;
        var yeniBoyut = yaziBoyutu + "px";
        $("p.text-secondary").css("font-size", yeniBoyut);
    });
    //yazi boyutu bitti



    $("#iletisimFormu button").click(function () {
        var adSoyad = $("#adSoyad").val();
        var ePosta = $("#ePosta").val();
        var mesaj = $("#mesaj").val();

        if (adSoyad === "" || ePosta === "" || mesaj === "") {
            alert("Lütfen tüm alanları doldurunuz!");
        } else {
            alert("Ad Soyad: " + adSoyad + "\nE-Posta: " + ePosta + "\nMesaj: " + mesaj + "\n\nForm başarıyla gönderildi!");
        }
    });
    var tarihiYerler = [
        "van-kalesi", "van-akdamar-adasi", "van-hosap-kalesi", "van-muzesi",
        "van-cavustepe", "van-eski-sehir", "van-seytan-koprusu",
        "van-urartu-eserleri", "akdamar", "van-cami"
    ];
    var yemekler = [
        "van-kahvaltisi", "van-keledos", "van-otlu-peynir", "van-murtuga",
        "van-corek", "van-ayran-asi", "van-helise", "van-acem-koftesi",
        "van-kurt-koftesi", "van-balik-tandir", "van-pide", "van-sengeser"
    ];
    var dogaHayvanlar = [
        "van-kedisi", "van-inci-kefali", "van-muradiye-selalesi",
        "van-manzarasi-kis", "van-manzasi"
    ];

    // FİLTRELEME FONKSİYONU
    function filtrele(liste) {
        $(".galeri-img").each(function () {
            var src = $(this).attr("src");
            var goster = false;

            // Listedeki her bir kelimeyi kontrol et
            for (var i = 0; i < liste.length; i++) {
                if (src.includes(liste[i])) {
                    goster = true;
                    break;
                }
            }

            if (goster) {
                $(this).parent().show();
            } else {
                $(this).parent().hide();
            }
        });
    }

    // BUTON TIKLAMA OLAYLARI
    $("#filtreTarihi").click(function () {
        filtrele(tarihiYerler);
        butonAktifYap(this);
    });

    $("#filtreYemekler").click(function () {
        filtrele(yemekler);
        butonAktifYap(this);
    });

    $("#filtreDoga").click(function () {
        filtrele(dogaHayvanlar);
        butonAktifYap(this);
    });

    $("#filtreTumu").click(function () {
        $(".galeri-img").parent().fadeIn(100);
        butonAktifYap(this);
    });

    // BUTON RENK DEĞİŞTİRME FONKSİYONU
    function butonAktifYap(btn) {
        $("#galeriFiltreButonlari button")
            .removeClass("btn-primary")
            .addClass("btn-outline-primary");
        $(btn)
            .removeClass("btn-outline-primary")
            .addClass("btn-primary");
    }






    $(".emoji-oy").click(function () {
        var gelenMesaj = $(this).data("mesaj");

        $(".emoji-oy").css("opacity", "0.3");
        $(this).css("opacity", "1");

        $("#oyMesaji").removeClass("d-none");
        $("#oyMesaji").text(gelenMesaj);
        $("#oyMesaji").show();
    });

    var basilanTuslar = "";
    var surprizSes = new Audio("assets/hey-le-le.mp3");

    $(document).keyup(function (e) {
        var basilanTus = e.key.toLowerCase();
        basilanTuslar = basilanTuslar + basilanTus;

        if (basilanTuslar === "van") {
            vanKedisiSurprizi();
            basilanTuslar = "";
        }

        if (basilanTuslar.length > 10) {
            basilanTuslar = "";
        }
    });

    function vanKedisiSurprizi() {
        if ($("#vanKedisiSurpriz").length > 0) return;

        // Müziği baştan başlat ve çal
        //BUNLA HER ZMAN SIFIRLIYORUZ    surprizSes.currentTime = 0;
        surprizSes.play();

        var surprizHTML = '<div id="vanKedisiSurpriz" style="position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,123,255,0.95); z-index:10000; text-align:center; padding-top:10%;">';
        surprizHTML = surprizHTML + '<h1 style="font-size:60px; font-weight:bold; margin-bottom:20px;">🐾 İşte Tam Bir Vanlı Oldun Şimdi! 🐾</h1>';
        surprizHTML = surprizHTML + '<img src="assets/leanding-kedi.png" style="width:250px; margin:30px; border-radius:15px;">';
        surprizHTML = surprizHTML + '<h2 style="margin-bottom:20px; color:white;">Tebrikler, Van Canavarını Bulamadın Ama <br> Van Kedisinin Dostluğunu Kazandın!</h2>';
        surprizHTML = surprizHTML + '<button id="surprizKapat" class="btn btn-light btn-lg">Harika! Geri Dön</button>';
        surprizHTML = surprizHTML + '</div>';

        $("body").append(surprizHTML);
        $("#vanKedisiSurpriz").show();

        $("#surprizKapat").click(function () {
            $("#vanKedisiSurpriz").remove();
            surprizSes.pause(); // Müziği durdur
        });
    }






    butonAktifYap($("#filtreTumu"));

});
