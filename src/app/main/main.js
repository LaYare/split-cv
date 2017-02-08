function llenado() {
      var barraUno = document.getElementById("barra01");
      var barraDos = document.getElementById("barra02");
      var barraTres = document.getElementById("barra03");
      var barraCuatro = document.getElementById("barra04");
      var barraCinco = document.getElementById("barra05");
      var barraSeis = document.getElementById("barra06");
      var barraSiete = document.getElementById("barra07");
      var barraOcho = document.getElementById("barra08");
      var barraNueve = document.getElementById("barra09");

      var width = 10;
      var widthDos = 10;
      var widthTres = 10;
      var idUno = setInterval (frame, 30);
      var idDos = setInterval (frameDos, 30);
      var idTres = setInterval (frameTres, 30);
      
      function frame(){
        if (width >= 85) {
          clearInterval(idUno);
        }else{
          width++;
          barraCuatro.style.width = width + '%';
          barraSeis.style.width = width + '%';
          barraNueve.style.width = width + '%';

        }
      }

      function frameDos(){
        if (widthDos >= 75) {
          clearInterval(idDos);
        }else{
          widthDos++;
          barraDos.style.width = widthDos + '%';
          barraSiete.style.width = widthDos + '%';
        }
        
      }

      function frameTres() {
        if (widthTres >= 65) {
          clearInterval(idTres);
        }else{
          widthTres++;
          barraUno.style.width = widthTres + '%';
          barraTres.style.width = widthTres + '%';
          barraCinco.style.width = widthTres + '%';
          barraOcho.style.width = widthTres + '%';

        }
      }

    }  