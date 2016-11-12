function backreturnlev1(){
  var guess1 = $('input[name=guess1]').val();
  var guess2 = $('input[name=guess2]').val();
  var guess3 = $('input[name=guess3]').val();
  var guess4 = $('input[name=guess4]').val();
  var guess5 = $('input[name=guess5]').val();
  var guess6 = $('input[name=guess6]').val();
  var guess7 = $('input[name=guess7]').val();
  var guess8 = $('input[name=guess8]').val();
  var guess9 = $('input[name=guess9]').val();
  var guess10 = $('input[name=guess10]').val();
  var guess11 = $('input[name=guess11]').val();
  var guess12 = $('input[name=guess12]').val();
  var guesscheck = $('input[name=mode]').val();
  if(guess1 == 'tile1' && guess2 == 'tile2' && guess3 == 'tile3' && guess4 == 'tile4' && guess5 == 'tile5'
  && guess6 == 'tile6' && guess7 == 'tile7' && guess8 == 'tile8' && guess9 == 'tile9' && guess10 == 'tile10'
  && guess11 == 'tile11' && guess12 == 'tile12')
  {
    alert('ผ่าน')
    if(guesscheck == 'lev1'){
      setTimeout(function(){
        window.location.href="level1_2.html";
      }, 1000)
    }else if (guesscheck == 'lev2') {
      setTimeout(function(){
        window.location.href="level1_3.html";
      }, 1000)
    }else if (guesscheck == 'lev3') {
      $( "#dialog" ).dialog();
    }
  }else{
    alert('ไม่สามารถกดเปลี่ยนด่านได้ เพราะคุณยังต่อภาพได้ไม่เสร็จดีพอ');
  }
}

function backreturnlev2(){
  var guess1 = $('input[name=guess1]').val();
  var guess2 = $('input[name=guess2]').val();
  var guess3 = $('input[name=guess3]').val();
  var guess4 = $('input[name=guess4]').val();
  var guess5 = $('input[name=guess5]').val();
  var guess6 = $('input[name=guess6]').val();
  var guess7 = $('input[name=guess7]').val();
  var guess8 = $('input[name=guess8]').val();
  var guess9 = $('input[name=guess9]').val();
  var guess10 = $('input[name=guess10]').val();
  var guess11 = $('input[name=guess11]').val();
  var guess12 = $('input[name=guess12]').val();
  var guess13 = $('input[name=guess13]').val();
  var guess14 = $('input[name=guess14]').val();
  var guess15 = $('input[name=guess15]').val();
  var guess16 = $('input[name=guess16]').val();
  var guess17 = $('input[name=guess17]').val();
  var guess18 = $('input[name=guess18]').val();
  var guess19 = $('input[name=guess19]').val();
  var guess20 = $('input[name=guess20]').val();
  var guesscheck = $('input[name=mode]').val();
  if(guess1 == 'tile1' && guess2 == 'tile2' && guess3 == 'tile3' && guess4 == 'tile4' && guess5 == 'tile5'
  && guess6 == 'tile6' && guess7 == 'tile7' && guess8 == 'tile8' && guess9 == 'tile9' && guess10 == 'tile10'
  && guess11 == 'tile11' && guess12 == 'tile12' && guess13 == 'tile13' && guess14 == 'tile14' && guess15 == 'tile15'
  && guess16 == 'tile16' && guess17 == 'tile17' && guess18 == 'tile18' && guess19 == 'tile19' && guess20 == 'tile20')
  {
    alert('ผ่าน')
    if(guesscheck == 'lev1'){
      setTimeout(function(){
        window.location.href="level2_2.html";
      }, 1000)
    }else if (guesscheck == 'lev2') {
      setTimeout(function(){
        window.location.href="level2_3.html";
      }, 1000)
    }else if (guesscheck == 'lev3') {
      $( "#dialog" ).dialog();
    }
  }else{
    alert('ไม่สามารถกดเปลี่ยนด่านได้ เพราะคุณยังต่อภาพได้ไม่เสร็จดีพอ');
  }
}
