import React from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

function App() {
  $(document).ready(function(){
    $('#piedra, #papel, #tijera').click(function(){
      var selection = $(this).attr("id");
      var res = $(this).attr("id");
      var win = $(this).attr("id");
      var lost = $(this).attr("id");
      $('#selection').html(selection);

      var pc = Math.floor(Math.random()*3);

      if(pc == 0) {
        pc = 'piedra';
      }
      else if (pc == 1) {
        pc = 'papel';
      }
      else if (pc == 2) {
        pc = 'tijera';
      }
      $('#pc').html(pc);

      if(selection == 'piedra'){
        if(pc == 'papel'){
          res = 'Perdiste :c';
        }
        else if(pc == 'tijera'){
          res = 'Ganaste :D';
        }
        else if(pc == 'piedra'){
          res = 'Empataste :/';
        }
      }
      if(selection == 'papel'){
        if(pc == 'tijera'){
          res = 'Perdiste :c';
        }
        else if(pc == 'piedra'){
          res = 'Ganaste :D';
        }
        else if(pc == 'papel'){
          res = 'Empataste :/';
        }
      }
      if(selection == 'tijera'){
        if(pc == 'piedra'){
          res = 'Perdiste :c';
        }
        else if(pc == 'papel'){
          res = 'Ganaste :D';
        }
        else if(pc == 'tijera'){
          res = 'Empataste :/';
        }
      }
      $('#res').html(res);

      if(res == 'Ganaste :D'){
        win = '1';
      }
      if(res == 'Perdiste :c'){
        win = '0';
      }
      if(res == 'Empataste :/'){
        win = '0';
      }
      $('#win').html(win);

      if(res == 'Ganaste :D'){
        lost = '0';
      }
      if(res == 'Perdiste :c'){
        lost = '1';
      }
      if(res == 'Empataste :/'){
        lost = '0';
      }
      $('#lost').html(lost);
    })
  })

  return (
    <div className="back">
      <div className="container">
        <div className="content">
          <h1 className="title">Let's play rock, paper, scissors!</h1>
          <div className="score">
            <p>Score</p>
            <div className="point">
              <p className="space">Tú: </p><p id="win">0 </p>
            </div>
            <div className="point">
              <p className="space">PC: </p><p id="lost">0 </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <p className="select">Elige tu jugada</p>
      </div>
      <div className="container">
        <div id="piedra">Piedra</div>
        <div id="papel">Papel</div>
        <div id="tijera">Tijera</div>
      </div>
      <div className="container">
        <div className="w">
          <div className="row">
            <h1 className="space">Elegiste: </h1><h1 id="selection"> </h1>
          </div>
          <div className="row">
            <h1 className="space2">La PC elegió: </h1><h1 id="pc"> </h1>
          </div>
          <div className="row">
            <h1 id="res"> </h1>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
