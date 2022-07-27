function remove_dot(x)
{
    return x.split('.').join("");
}

function add_comma(x)
{
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function nilai_input() {

    // DEKLARASI VARIABEL YANG DICARI
    var batas_bawah;

    // AMBIL NILAI DARI FORM INPUT
    var jaminan = document.getElementById('jaminan').value;
    var tipe = document.getElementById('tipe').value;
    var wilayah = document.getElementById('wilayah').value;
    var nilai = remove_dot(document.getElementById('nilai').value);
    var tahun = document.getElementById('tahun').value;

    // BIAYA TJH KENDARAAN
    var biaya_tjh = 0; 
    if(document.getElementById('tanggung').checked)
    {       
        if(tipe == "Kategori 1" || tipe == "Kategori 4")
        {
            biaya_tjh = nilai * 0.01;
        }

        else if (tipe == "Kategori 2" || tipe == "Kategori 3")
        {
            biaya_tjh = nilai * 0.015;
        }
    }

    // BIAYA TJH PENUMPANG
    var biaya_tjhp= 0; 
    if(document.getElementById('penumpang').checked)
    {       
         biaya_tjhp = nilai * 0.005;
    }

    // BIAYA KECELAKAAN DIRI
    var biaya_kecelakaan= 0; 
    if(document.getElementById('kecelakaan').checked)
    {       
        biaya_kecelakaan = nilai * 0.005;
    }

    // BIAYA KERUSUHAN
    var biaya_kerusuhan = 0;
    if(document.getElementById('kerusuhan').checked)
    {       
        if(jaminan == "Comperehensive")
        {
            biaya_kerusuhan = nilai * 0.0005;
        }

        else if (jaminan == "TLO")
        {
            biaya_kerusuhan = nilai * 0.00035;
        }
    }

    // BIAYA TERORISME
    var biaya_terorisme = 0;
    if(document.getElementById('terorisme').checked)
    {       
        if(jaminan == "Comperehensive")
        {
            biaya_terorisme = nilai * 0.0005;
        }

        else if (jaminan == "TLO")
        {
            biaya_terorisme = nilai * 0.00035;
        }
    }

    // BIAYA BANJIR
    var biaya_banjir = 0;
    if(document.getElementById('banjir').checked)
    {       
        if(wilayah == "Wilayah 1")
        {
            if(jaminan == 'Comperehensive')
            {
                biaya_banjir = nilai * 0.00075;
            }

            else if (jaminan == "TLO")
            {
                biaya_banjir = nilai * 0.0005;
            }
        }

        else if (wilayah == "Wilayah 2")
        {
            if(jaminan == 'Comperehensive')
            {
                biaya_banjir = nilai * 0.001;
            }

            else if (jaminan == "TLO")
            {
                biaya_banjir = nilai * 0.00075;
            }
        }

        else if (wilayah == "Wilayah 3")
        {
            if(jaminan == 'Comperehensive')
            {
                biaya_banjir = nilai * 0.00075;
            }

            else if (jaminan == "TLO")
            {
                biaya_banjir = nilai * 0.0005;
            }
        }
    }

    // BIAYA GEMPA
    var biaya_gempa = 0;
    if(document.getElementById('gempa').checked)
    {       
        if(wilayah == "Wilayah 1")
        {
            if(jaminan == 'Comperehensive')
            {
                biaya_gempa = nilai * 0.0012;
            }

            else if (jaminan == "TLO")
            {
                biaya_gempa = nilai * 0.00085;
            }
        }

        else if (wilayah == "Wilayah 2")
        {
            if(jaminan == 'Comperehensive')
            {
                biaya_gempa = nilai * 0.001;
            }

            else if (jaminan == "TLO")
            {
                biaya_gempa = nilai * 0.00075;
            }
        }

        else if (wilayah == "Wilayah 3")
        {
            if(jaminan == 'Comperehensive')
            {
                biaya_gempa = nilai * 0.00075;
            }

            else if (jaminan == "TLO")
            {
                biaya_gempa = nilai * 0.0005;
            }
        }
    }
    
    // PREMI DASAR Comperehensive
    if (jaminan == 'Comperehensive')
    {
        //NON TRUK & NON BUS
        if (tipe == 'Kategori 1')
        {
            if(wilayah == 'Wilayah 1')
            {
                if(nilai >= 0 && nilai <= 125000000)
                {
                    batas_bawah = 0.0382;
                    batas_atas = 0.0420;
                }

                else if (nilai > 125000000 && nilai <= 200000000)
                {
                    batas_bawah = 0.0267;
                    batas_atas = 0.0294;
                }

                else if (nilai > 200000000 && nilai <= 400000000)
                {
                    batas_bawah = 0.0218;
                    batas_atas = 0.0240;
                }

                else if (nilai > 400000000 && nilai <= 800000000)
                {
                    batas_bawah = 0.0120;
                    batas_atas = 0.0132;
                }

                else if (nilai > 800000000)
                {
                    batas_bawah = 0.0105;
                    batas_atas = 0.0116;
                }
            }

            else if (wilayah == 'Wilayah 2')
            {
                if(nilai >= 0 && nilai <= 125000000)
                {
                    batas_bawah = 0.0326;
                    batas_atas = 0.0359;
                }

                else if (nilai > 125000000 && nilai <= 200000000)
                {
                    batas_bawah = 0.0247;
                    batas_atas = 0.0272;
                }

                else if (nilai > 200000000 && nilai <= 400000000)
                {
                    batas_bawah = 0.0208;
                    batas_atas = 0.0229;
                }

                else if (nilai > 400000000 && nilai <= 800000000)
                {
                    batas_bawah = 0.0120;
                    batas_atas = 0.0132;
                }

                else if (nilai > 800000000)
                {
                    batas_bawah = 0.0105;
                    batas_atas = 0.0116;
                }
            }

            else if (wilayah == 'Wilayah 3')
            {
                if(nilai >= 0 && nilai <= 125000000)
                {
                    batas_bawah = 0.0253;
                    batas_atas = 0.0278;
                }

                else if (nilai > 125000000 && nilai <= 200000000)
                {
                    batas_bawah = 0.0269;
                    batas_atas = 0.0296;
                }

                else if (nilai > 200000000 && nilai <= 400000000)
                {
                    batas_bawah = 0.0179;
                    batas_atas = 0.0197;
                }

                else if (nilai > 400000000 && nilai <= 800000000)
                {
                    batas_bawah = 0.0114;
                    batas_atas = 0.0125;
                }

                else if (nilai > 800000000)
                {
                    batas_bawah = 0.0105;
                    batas_atas = 0.0116;
                }
            }
        }

        // TRUK & PICKUP
        else if (tipe == 'Kategori 2')
        {
             if(wilayah == 'Wilayah 1')
            {
                batas_bawah = 0.0242;
                batas_atas = 0.0267;
            }

            else if (wilayah == 'Wilayah 2')
            {
                batas_bawah = 0.0239;
                batas_atas = 0.0263;
            }

            else if (wilayah == 'Wilayah 3')
            {
                batas_bawah = 0.0223;
                batas_atas = 0.0246;
            }
        }

        // BUS
        else if (tipe == 'Kategori 3')
        {
            if(wilayah == 'Wilayah 1')
            {
                batas_bawah = 0.0104;
                batas_atas = 0.0114;
            }

            else if (wilayah == 'Wilayah 2')
            {
                batas_bawah = 0.0104;
                batas_atas = 0.0114;
            }

            else if (wilayah == 'Wilayah 3')
            {
                batas_bawah = 0.0088;
                batas_atas = 0.0097;
            }
        }

        // RODA DUA
        else if (tipe == 'Kategori 4')
        {
            if(wilayah == 'Wilayah 1')
            {
                batas_bawah = 0.0318;
                batas_atas = 0.0350;
            }

            else if (wilayah == 'Wilayah 2')
            {
                batas_bawah = 0.0318;
                batas_atas = 0.0350;
            }

            else if (wilayah == 'Wilayah 3')
            {
                batas_bawah = 0.0318;
                batas_atas = 0.0350;
            }
        }

    }

    // PREMI DASAR TLO
    else if (jaminan == 'TLO')
    {

        //NON TRUK & NON BUS
        if (tipe == 'Kategori 1')
        {
            if(wilayah == 'Wilayah 1')
            {
                if(nilai >= 0 && nilai <= 125000000)
                {
                    batas_bawah = 0.0047;
                    batas_atas = 0.0056;
                }

                else if (nilai > 125000000 && nilai <= 200000000)
                {
                    batas_bawah = 0.0063;
                    batas_atas = 0.0069;
                }

                else if (nilai > 200000000 && nilai <= 400000000)
                {
                    batas_bawah = 0.0041;
                    batas_atas = 0.0046;
                }

                else if (nilai > 400000000 && nilai <= 800000000)
                {
                    batas_bawah = 0.0025;
                    batas_atas = 0.0030;
                }

                else if (nilai > 800000000)
                {
                    batas_bawah = 0.0020;
                    batas_atas = 0.0024;
                }
            }

            else if (wilayah == 'Wilayah 2')
            {
                if(nilai >= 0 && nilai <= 125000000)
                {
                    batas_bawah = 0.0065;
                    batas_atas = 0.0078;
                }

                else if (nilai > 125000000 && nilai <= 200000000)
                {
                    batas_bawah = 0.0044;
                    batas_atas = 0.0053;
                }

                else if (nilai > 200000000 && nilai <= 400000000)
                {
                    batas_bawah = 0.0038;
                    batas_atas = 0.0042;
                }

                else if (nilai > 400000000 && nilai <= 800000000)
                {
                    batas_bawah = 0.0025;
                    batas_atas = 0.0030;
                }

                else if (nilai > 800000000)
                {
                    batas_bawah = 0.0020;
                    batas_atas = 0.0024;
                }
            }

            else if (wilayah == 'Wilayah 3')
            {
                if(nilai >= 0 && nilai <= 125000000)
                {
                    batas_bawah = 0.0051;
                    batas_atas = 0.0056;
                }

                else if (nilai > 125000000 && nilai <= 200000000)
                {
                    batas_bawah = 0.0044;
                    batas_atas = 0.0048;
                }

                else if (nilai > 200000000 && nilai <= 400000000)
                {
                    batas_bawah = 0.0029;
                    batas_atas = 0.0035;
                }

                else if (nilai > 400000000 && nilai <= 800000000)
                {
                    batas_bawah = 0.0023;
                    batas_atas = 0.0027;
                }

                else if (nilai > 800000000)
                {
                    batas_bawah = 0.0020;
                    batas_atas = 0.0024;
                }
            }
        }

        //TRUK & PICKUP
        else if (tipe == 'Kategori 2')
        {
             if(wilayah == 'Wilayah 1')
            {
                batas_bawah = 0.0088;
                batas_atas = 0.0107;
            }

            else if (wilayah == 'Wilayah 2')
            {
                batas_bawah = 0.0168;
                batas_atas = 0.0202;
            }

            else if (wilayah == 'Wilayah 3')
            {
                batas_bawah = 0.0081;
                batas_atas = 0.0098;
            }
        }

        //BUS
        else if (tipe == 'Kategori 3')
        {
            if(wilayah == 'Wilayah 1')
            {
                batas_bawah = 0.0023;
                batas_atas = 0.0029;
            }

            else if (wilayah == 'Wilayah 2')
            {
                batas_bawah = 0.0023;
                batas_atas = 0.0029;
            }

            else if (wilayah == 'Wilayah 3')
            {
                batas_bawah = 0.0018;
                batas_atas = 0.0022;
            }
        }

        //RODA DUA
        else if (tipe == 'Kategori 4')
        {
            if(wilayah == 'Wilayah 1')
            {
                batas_bawah = 0.0176;
                batas_atas = 0.0211;
            }

            else if (wilayah == 'Wilayah 2')
            {
                batas_bawah = 0.0180;
                batas_atas = 0.0216;
            }

            else if (wilayah == 'Wilayah 3')
            {
                batas_bawah = 0.0067;
                batas_atas = 0.0080;
            }
        }
    }

    // PREMI TAHUN
    const date = new Date();
    let tahun_sekarang = date.getFullYear();
    var tahun_kendaraan = tahun_sekarang - tahun;
    var biaya_reload = 0;

    if(tahun_kendaraan==5)
    {
        biaya_reload = nilai * 0.05;
    }
    else if(tahun_kendaraan==6)
    {
        biaya_reload = nilai * 0.1;
    }
    else if(tahun_kendaraan==7)
    {
        biaya_reload = nilai * 0.15;
    }
    else if(tahun_kendaraan==8)
    {
        biaya_reload = nilai * 0.2;
    }
    else if(tahun_kendaraan==9)
    {
        biaya_reload = nilai * 0.25;
    }
    else if(tahun_kendaraan==10)
    {
        biaya_reload = nilai * 0.3;
    }

    // HASIL AWAL
    var nilai_bawah_raw = nilai*batas_bawah;

    // PEMBULATAN
    var nilai_bawah = Math.floor(nilai_bawah_raw);

    // OUTPUT
    var output =  nilai_bawah + biaya_tjh + biaya_reload + biaya_kerusuhan + biaya_terorisme + biaya_tjhp + biaya_kecelakaan + biaya_banjir + biaya_gempa;

    // TAMPIL HASIL
    if(isNaN(output) || output==0)
    {
        document.getElementById("hasil").innerHTML= "Input Data Dengan Lengkap";
    }

    else{
        document.getElementById("hasil").innerHTML= "Rp. "+ add_comma(output);
    }

    

}