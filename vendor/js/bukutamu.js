var bukutamu = new function() {
    this.el = document.getElementById('entryPost');

    this.avapic = ['aset/gambar/1.jpg', 'aset/gambar/2.jpg', 'aset/gambar/3.jpg'];
    this.penulis = ['Yudhi', 'Iqbal', 'Alif'];
    this.tanggal = ['Sabtu, 30 Maret 2018 1:43 PM', 'Sabtu, 30 Maret 2018 10:23 AM', 'Sabtu, 30 Maret 2018 3:41 PM'];
    this.entext = ['Anjay anjay apaan pos nya gak guna njir.', 'Yo wassup, blog lo aneh cuyy dasar lo gila.', 'Gak ngerti aku apa yang diomonginnya. Bahasa apa itu cok, alien? wkwkwkwkwkwk'];

    this.DapatkanSemuaData = function() {
        var data = '';

        if (this.penulis.length > 0) {
            for (i = 0; i < this.penulis.length; i++) {
                data += '<div class="entry mb-2">';
                    data += '<div class="row m-2">';
                        data += '<div class="col-md-5">';
                            data += '<img class="img-fluid d-block rounded-circle mx-auto text-center" src="'+this.avapic[i]+'" id="ava">';
                            data += '<div class="d-flex align-items-center justify-content-between my-2">';
                                data += '<a href="">';
                                    data += '<i class="d-block fab fa-facebook fa-lg text-muted p-3"></i>';
                                data += '</a>';
                                data += '<a href="">';
                                    data += '<i class="d-block fab fa-instagram fa-lg text-muted p-3"></i>';
                                data += '</a>';
                                data += '<a href="">';
                                    data += '<i class="d-block fab fa-twitter fa-lg text-muted p-3"></i>';
                                data += '</a>';
                            data += '</div>';
                        data += '</div>';
                        data += '<div class="col-md-7 pt-2">';
                            data += '<h2 class="penulis" id="penulis">' + this.penulis[i] + '</h2>';
                            data += '<p class="text-small tanggal" id="tanggal">' + this.tanggal[i] + '</p>';
                            data += '<div class="entry-text">';
                                data += '<p id="entext">' + this.entext[i] + '</p>';
                            data += '</div>';
                        data += '</div>';
                    data += '</div>';
                data += '</div>';
                data += '<hr>';
            }
        }

        return this.el.innerHTML = data;
    };

    this.Tambah = function() {
        // Mendapatkan value/isinya (Get the value)
        elForm = document.getElementById('formbukutamu');
        var elAva = 'aset/gambar/1.jpg';
        elNama = document.getElementById('nama').value;
        elPesan = document.getElementById('pesan').value;

        // Mendapatkan waktu dan tanggal sekarang dalam UTC
        var date = new Date();
        var Tgl = date.toUTCString();

        if (elPesan) {
            // Tambah nilai baru
            this.avapic.unshift(elAva.trim());
            this.tanggal.unshift(Tgl.trim());
            this.penulis.unshift(elNama.trim());
            this.entext.unshift(elPesan.trim());

            // Reset form
            elForm = '';

            // Tampilkan entri yg baru
            this.DapatkanSemuaData();
        }
    };
}

bukutamu.DapatkanSemuaData();