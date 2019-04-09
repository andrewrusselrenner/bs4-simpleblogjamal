// Ini untuk ngubah class aktif ketika user pincit tombol nav sidebar yg di kliknya
$( '#sidebar .navbar a' ).on( 'click', function () {
    $( '#sidebar .navbar' ).find( 'a.aktif' ).removeClass( 'tampilkan aktif' );
    $( this ).parent( 'a' ).addClass( 'tampikan aktif' );
});

// load html postingan
function load_rumah() {
    $("#isi").load("halaman/rumah.html");
}

// load html tentang
function load_tentang() {
    $("#isi").load("halaman/tentang.html");
}

// load html buku tamu
function load_bukutamu() {
    $("#isi").load("halaman/bukutamu.html");
}