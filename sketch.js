let img, nav, avi, bus, ver, fal, adr, fit, tro, arc, can, xad, car, bol, pra, mil, cen, mar, din, fot, mao, cab, cav, cha, sol, not, cel, bll, dot, egg, lap, pla, tbm, sax, vio, ban, bic, bok, sob, pll, flo, lan, doc, cap, axe;
var alt, tela, vf, pont, reco, tim, quest, rep, cat, fol, inv;
tela = 1
pont = 0
reco = 0
quest = 0
rep = 0

function preload() {
  img = loadImage('pro.jpg');
  nav = loadImage('navio.png');
  avi = loadImage('aviao.png');
  bus = loadImage('bus.png');
  fal = loadImage('error.png');
  ver = loadImage('ok.png');
  adr = loadImage('adr.jpeg');
  fit = loadImage('fita.png');
  tro = loadImage('trophy.png');
  arc = loadImage('arco.png');
  can = loadImage('canhao.png');
  xad = loadImage('xadrez.png');
  car = loadImage('carro.png');
  bol = loadImage('bola.png');
  pra = loadImage('praia.png');
  inv = loadImage('inver.png');
  cat = loadImage('catapul.png');
  fol = loadImage('flore.png');
  mil = loadImage('milho.png');
  cen = loadImage('cenoura.png');
  mar = loadImage('martelo.png');
  din = loadImage('dino.png');
  fot = loadImage('pe.png');
  mao = loadImage('mao.png');
  cab = loadImage('cabeca.png');
  cav = loadImage('cavalo.png');
  cha = loadImage('chave.png');
  sol = loadImage('sol.png');
  not = loadImage('note.png');
  cel = loadImage('cell.png');
  bll = loadImage('bll.png');
  dot = loadImage('dot.png');
  egg = loadImage('egg.png');
  lap = loadImage('lamp.png');
  pla = loadImage('pla.png');
  tbm = loadImage('tbm.png');
  sax = loadImage('sax.png');
  vio = loadImage('vio.png');
  ban = loadImage('ban.png');
  bic = loadImage('bici.png');
  bok = loadImage('bok.png');
  sob = loadImage('sob.png');
  pll = loadImage('pll.png');
  flo = loadImage('flo.png');
  lan = loadImage('lan.png');
  doc = loadImage('doc.png');
  cap = loadImage('cap.png');
  axe = loadImage('axe.png');
}

function setup() {
  createCanvas(712, 400);
}

function draw() {
  background(173, 216, 230);
    
    //Calendário (plano de fundo)
    
    //Cabeçalho
    var mx14 = 35
    var mx24 = 385
    var my4 = 105
    textStyle(BOLD);
    textSize(40);
    fill(150);
    strokeWeight(0);
    text("April", 130, 60);
    text("May", 490, 60);
    textSize(25);
    for(cont = 1; cont <= 2; cont++){
      text("S", mx14, my4);
      text("M", mx14 + 45, my4);
      text("T", mx14 + 90, my4);
      text("W", mx14 + 135, my4);
      text("T", mx14 + 180, my4);
      text("F", mx14 + 225, my4);
      text("S", mx14 + 270, my4);
      mx14 = mx14 + 350
    }
    
    //Grade
    var mm = 0
    var my1 = 95
    var al = 40
    var la = 40
    var cr = 10
    stroke(150)
    strokeWeight(1);
    for(cot = 1; cot <= 2; cot++){
      mm = mm + 30
      for(cont1 = 0; cont1 < 6; cont1 ++){
        var mx11 = mm
        my1 = my1 + 45
        for(cont2 = 1; cont2 <= 7; cont2 ++){
          noFill();
          rect(mx11 - 5, my1 - 30, al, la, cr);
          mx11 = mx11 + 45
        }
      }
      mm = 350
      my1 = 95
    }
    
    //Abril

    //Dias
    var day = -3
    for(cont1 = 0; cont1 < 6; cont1 ++){
      var mx21 = 30
      my1 = my1 + 45
      fill(150);
      if(day < 31 && cont1 > 0){
        if(day < 10){
          text("0" + day, mx21, my1);
        }
        else{
          text(day, mx21, my1);
        }
      }
      for(cont2 = 1; cont2 <= 7; cont2 ++){
        mx21 = mx21 + 45
        day ++
        if(cont2 < 7 && cont1 > 0 && day < 31){
          if(day < 10){
            text("0" + day, mx21, my1);
          }
          else{
            text(day, mx21, my1);
          }
        }
      }
    }
    
    //Dias anteriores
    noFill();
    var mx12 = 30
    var my2 = 140
    var day1 = 28
    while(day1 <= 31){
      text(day1, mx12, my2);
      mx12 = mx12 + 45
      day1 ++
    }
    
    //Dias posteriores
    var mx13 = 30
    var my3 = 320
    var day2 = 1
    while(day2 <= 8){
      if(day2 == 1){
        text("01", mx13 + 270, my3);
        my3 = my3 + 45
      }
      else{
        text("0" + day2, mx13, my3);
        mx13 = mx13 + 45
      }
      day2 ++
    }
    
    
    //Feriados
    var mx15 = 35
    var my5 = 245
    fill(150);
    text("01", mx15 + 175, my2);
    text("03", mx15 + 265, my2);
    fill(255, 105, 97);
    rect(mx15 + 215, my5 - 135, al, la, cr);
    rect(mx15 - 10, my5 - 90, al, la, cr);
    rect(mx15 + 125, my5, al, la, cr);
    fill(150);
    rect(mx15 + 35, my5, al, la, cr);
    rect(mx15 + 170, my5, al, la, cr);
    fill(200);
    text("02", mx15 + 220, my2);
    text("04", mx15 - 5, my2 + 45);
    text("19", mx15 + 40, my5 + 30);
    text("21", mx15 + 130, my5 + 30);
    text("22", mx15 + 175, my5 + 30);
    
    //Maio
    
    //Dias
    var my6 = 95
    var day3 = -5
    stroke(150)
    for(cont3 = 0; cont3 < 6; cont3 ++){
      var mx31 = 380
      my6 = my6 + 45
      fill(150);
      if(day3 <= 31 && day3 > 0){
        if(day3 < 10){
          text("0" + day3, mx31, my6);
        }
        else{
          text(day3, mx31, my6);
        }
      }
      for(cont4 = 1; cont4 <= 7; cont4 ++){
        mx31 = mx31 + 45
        day3 ++
        if(cont4 < 7 && day3 <= 31 && day3 > 0){
          if(day3 < 10){
            text("0" + day3, mx31, my6);
          }
          else{
            text(day3, mx31, my6);
          }
        }
      }
    }
    
    //Dias anteriores
    noFill();
    var mx22 = 380
    var day4 = 25
    while(day4 < 31){
      text(day4, mx22, my2);
      mx22 = mx22 + 45
      day4 ++
    }
    
    //Dias posteriores
    var mx23 = 470
    var day5 = 1
    while(day5 <= 5){
      text("0" + day5, mx23, my3);
      mx23 = mx23 + 45
      day5 ++
    }
    
    //Feriados
    textSize(25);
    noFill();
    fill(255, 105, 97);
    rect(mx24 + 260, my5 - 135, al, la, cr);
    rect(mx24 - 10, my5 - 45, al, la, cr);
    fill(200);
    text("01", mx24 + 265, my5 - 105);
    text("09", mx24 - 5, my5 - 15);
  
  if(tela == 1){
    tim = 3660
    
    //Menu
    fill(100);
    stroke(0);
    strokeWeight(4);
    stroke(255);
    strokeWeight(4);
    fill(0);
    textSize(70);
    text("Menu", 265, 80);
    textSize(30);
    image(fit, 20, 340);
    text(pont, 60, 368);
    image(tro, 140, 340);
    text(reco, 180, 368);
    
    //Seleção
    var altu = 60
    var lar = 250
    var x1 = 231
    var y1 = 110
    var y2 = 195
    var y3 = 280
    if(mouseX > x1 && mouseX < x1 + lar){
      noFill();
      stroke(0);
      strokeWeight(4);
      if(mouseY > y1 && mouseY < y1 + altu){
        rect(x1, y1, lar, altu, 30);
        if(mouseIsPressed){
          tela = 2
          pont = 0
        }
      }
      if(mouseY > y2 && mouseY < y2 + altu){
        rect(x1, y2, lar, altu, 30);
        if(mouseIsPressed){
          tela = 3
        }
      }
      if(mouseY > y3 && mouseY < y3 + 55){
        rect(x1, y3, lar, altu, 30);
        if(mouseIsPressed){
          tela = 4
        }
      }
    }
    
    //Opções
    stroke(255);
    fill(0);
    textSize(40);
    text("Jogar", 300, 150);
    text("Instruções", 255, 240);
    text("Créditos", 275, 325);
  }
  if(tela == 2){
    //Barra de pontuação
    var time
    vf = false
    alt = 0
    time = int(tim/60);
    if(time > 0){
      tim --
    }
    if(time == 0){
      quest ++
      tela = 5
    }
    fill(0);
    stroke(255);
    strokeWeight(4);
    textSize(30);
    image(fit, 215, 20);
    text(pont, 255, 48);
    image(tro, 335, 20);
    text(reco, 375, 48);
    if(time <= 30){
      fill(255, 105, 97);
    }
    text(time, 520, 48);
    
    //Botão voltar
    noFill();
    stroke(0);
    if(mouseX > 620 && mouseX < 700 && mouseY > 10 && mouseY < 40){
      rect(620, 10, 80, 30, 15);
      if(mouseIsPressed){
        tela = 1
      }
    }
    
    textStyle(BOLD);
    textSize(15);
    stroke(255);
    strokeWeight(3);
    fill(0);
    text("⏎ Voltar", 630, 30);
    
    //Questões
    
    textSize(20);
    stroke(255);
    
    if(quest == 5){
      quest = 0
      rep ++
    }
    if(rep == 3){
      rep = 0
    }
    if(rep == 0 && quest == 0){
      text("01. Qual o principal meio de defesa que os índios utilizam?", 60, 100, 592, 300);
      image(can, 80, 175, 125, 125);
      image(arc, 294, 175, 125, 125);
      image(cat, 507, 175, 125, 125);
    }
    if(rep == 0 && quest == 1){
      text("02. Qual cor é utilizada no ano novo e frequentemente é associada a paz?", 60, 90, 592, 300);
      noStroke();
      fill(255, 255, 0);
      square(80, 175, 125);
      fill(255, 0, 0);
      square(294, 175, 125);
      fill(255);
      square(507, 175, 125);
    }
    if(rep == 0 && quest == 2){
      text("03. Onde está localizada a fábrica do Papai Noel?", 60, 100, 592, 300);
      image(pra, 80, 175, 125, 125);
      image(fol, 294, 175, 125, 125);
      image(inv, 507, 175, 125, 125);
    }
    if(rep == 0 && quest == 3){
      text("04. Qual brincadeira se pode brincar sozinho?", 60, 100, 592, 300);
      image(xad, 80, 175, 125, 125);
      image(car, 294, 175, 125, 125);
      image(bol, 507, 175, 125, 125);
    }
    if(rep == 0 && quest == 4){
      text("05. Qual foi o meio de transporte utilizado pelos portugueses quando chegaram ao Brasil?", 60, 90, 592, 300);
      image(nav, 80, 175, 125, 125);
      image(bus, 294, 175, 125, 125);
      image(avi, 507, 175, 125, 125);
    }
    if(rep == 1 && quest == 0){
      text("01. De que é feito a maioria das comidas típicas do período junino?", 60, 100, 592, 300);
      image(cen, 80, 175, 125, 125);
      image(mil, 294, 175, 125, 125);
      image(ban, 507, 175, 125, 125);
    }
    if(rep == 1 && quest == 1){
      text("02. Que instrumento pode ser utilizado para tocar o ritmo de samba?", 60, 90, 592, 300);
      image(sax, 80, 175, 125, 125);
      image(vio, 294, 175, 125, 125);
      image(tbm, 507, 175, 125, 125);
    }
    if(rep == 1 && quest == 2){
      text("03. Qual o presente ideal para se dar a mamãe?", 60, 100, 592, 300);
      image(flo, 80, 175, 125, 125);
      image(mar, 294, 175, 125, 125);
      image(din, 507, 175, 125, 125);
    }
    if(rep == 1 && quest == 3){
      text("04. Qual parte do corpo o curupira tem virada para trás?", 60, 100, 592, 300);
      image(fot, 80, 175, 125, 125);
      image(cab, 294, 175, 125, 125);
      image(mao, 507, 175, 125, 125);
    }
    if(rep == 1 && quest == 4){
      text("05. Que chapéu os soldados utilizam na cabeça?", 60, 100, 592, 300);
      image(sob, 80, 175, 125, 125);
      image(cap, 294, 175, 125, 125);
      image(pll, 507, 175, 125, 125);
    }
    if(rep == 2 && quest == 0){
      text("01. Qual ferramenta o papai pode utilizar para apertar um parafuso?", 60, 90, 592, 300);
      image(pla, 80, 175, 125, 125);
      image(axe, 294, 175, 125, 125);
      image(cha, 507, 175, 125, 125);
    }
    if(rep == 2 && quest == 1){
      text("02. De qual tipo de luz as plantas necessitam para sobreviver?", 60, 90, 592, 300);
      image(sol, 80, 175, 125, 125);
      image(lap, 294, 175, 125, 125);
      image(lan, 507, 175, 125, 125);
    }
    if(rep == 2 && quest == 2){
      text("03. Que tipo de doce é o mais preferido na época da páscoa?", 60, 100, 592, 300);
      image(dot, 80, 175, 125, 125);
      image(egg, 294, 175, 125, 125);
      image(doc, 507, 175, 125, 125);
    }
    if(rep == 2 && quest == 3){
      text("04. Qual objeto podemos levar a escola para aprendermos?", 60, 100, 592, 300);
      image(not, 80, 175, 125, 125);
      image(cel, 294, 175, 125, 125);
      image(bok, 507, 175, 125, 125);
    }
    if(rep == 2 && quest == 4){
      text("05. Qual o meio de transporte que Dom Pedro I utilizou no dia que declarou a independência do Brasil?", 60, 90, 592, 300);
      image(cav, 80, 175, 125, 125);
      image(bll, 294, 175, 125, 125);
      image(bic, 507, 175, 125, 125);
    }
    
    //Seleção
    var at = 135
    var lg = 135
    var y21 = 170
    var x21 = 75
    var x22 = 289
    var x23 = 502
    if(mouseY > y21 && mouseY < y21 + lg){
      noFill();
      stroke(0);
      strokeWeight(4);
      if(mouseX > x21 && mouseX < x21 + at){
        rect(x21, y21, lg, at, 5);
        if(mouseIsPressed){
          alt = 1
          quest ++
          tela = 5
        }
      }
      if(mouseX > x22 && mouseX < x22 + at){
        rect(x22, y21, lg, at, 5);
        if(mouseIsPressed){
          alt = 2
          quest ++
          tela = 5
        }
      }
      if(mouseX > x23 && mouseX < x23 + at){
        rect(x23, y21, lg, at, 5);
        if(mouseIsPressed){
          alt = 3
          quest ++
          tela = 5
        }
      }
    }
    
    //pontuação
    if(alt == 2 && rep == 0 && quest == 1){
      vf = true
      if(time > 30){
        pont = pont + 250
      }
      else{
        pont = pont + 125
      }
      if(pont > reco){
        reco = pont
      }
    }
    if(alt == 3 && rep == 0 && quest == 2){
      vf = true
      if(time > 30){
        pont = pont + 250
      }
      else{
        pont = pont + 125
      }
      if(pont > reco){
        reco = pont
      }
    }
    if(alt == 3 && rep == 0 && quest == 3){
      vf = true
      if(time > 30){
        pont = pont + 250
      }
      else{
        pont = pont + 125
      }
      if(pont > reco){
        reco = pont
      }
    }
    if(alt == 2 && rep == 0 && quest == 4){
      vf = true
      if(time > 30){
        pont = pont + 250
      }
      else{
        pont = pont + 125
      }
      if(pont > reco){
        reco = pont
      }
    }
    if(alt == 1 && rep == 0 && quest == 5){
      vf = true
      if(time > 30){
        pont = pont + 250
      }
      else{
        pont = pont + 125
      }
      if(pont > reco){
        reco = pont
      }
    }
    if(alt == 2 && rep == 1 && quest == 1){
      vf = true
      if(time > 30){
        pont = pont + 250
      }
      else{
        pont = pont + 125
      }
      if(pont > reco){
        reco = pont
      }
    }
    if(alt == 3 && rep == 1 && quest == 2){
      vf = true
      if(time > 30){
        pont = pont + 250
      }
      else{
        pont = pont + 125
      }
      if(pont > reco){
        reco = pont
      }
    }
    if(alt == 1 && rep == 1 && quest == 3){
      vf = true
      if(time > 30){
        pont = pont + 250
      }
      else{
        pont = pont + 125
      }
      if(pont > reco){
        reco = pont
      }
    }
    if(alt == 1 && rep == 1 && quest == 4){
      vf = true
      if(time > 30){
        pont = pont + 250
      }
      else{
        pont = pont + 125
      }
      if(pont > reco){
        reco = pont
      }
    }
    if(alt == 2 && rep == 1 && quest == 5){
      vf = true
      if(time > 30){
        pont = pont + 250
      }
      else{
        pont = pont + 125
      }
      if(pont > reco){
        reco = pont
      }
    }
    if(alt == 3 && rep == 2 && quest == 1){
      vf = true
      if(time > 30){
        pont = pont + 250
      }
      else{
        pont = pont + 125
      }
      if(pont > reco){
        reco = pont
      }
    }
    if(alt == 1 && rep == 2 && quest == 2){
      vf = true
      if(time > 30){
        pont = pont + 250
      }
      else{
        pont = pont + 125
      }
      if(pont > reco){
        reco = pont
      }
    }
    if(alt == 2 && rep == 2 && quest == 3){
      vf = true
      if(time > 30){
        pont = pont + 250
      }
      else{
        pont = pont + 125
      }
      if(pont > reco){
        reco = pont
      }
    }
    if(alt == 3 && rep == 2 && quest == 4){
      vf = true
      if(time > 30){
        pont = pont + 250
      }
      else{
        pont = pont + 125
      }
      if(pont > reco){
        reco = pont
      }
    }
    if(alt == 1 && rep == 2 && quest == 5){
      vf = true
      if(time > 30){
        pont = pont + 250
      }
      else{
        pont = pont + 125
      }
      if(pont > reco){
        reco = pont
      }
    }
  }
  if(tela == 3){
    //Botão voltar
    noFill();
    stroke(0);
    strokeWeight(4);
    if(mouseX > 620 && mouseX < 700 && mouseY > 10 && mouseY < 40){
      rect(620, 10, 80, 30, 15);
      if(mouseIsPressed){
        tela = 1
      }
    }
    
    textStyle(BOLD);
    textSize(15);
    stroke(255);
    strokeWeight(3);
    fill(0);
    text("⏎ Voltar", 630, 30);
    
    //Texto
    textSize(30);
    strokeWeight(4);
    text("Instruções", 275, 40);
    textSize(20);
    text("Quiz - Datas Comemorativas", 220, 70);
    textSize(15);
    strokeWeight(3);
    textAlign(LEFT);
    text("1º ano do ensino fundamental \nHistória - (EFOIH108) Reconhecer o significado das comemorações e festas escolares, diferenciando-as das datas festivas comemoradas no âmbito familiar \nou da comunidade. \n\nCOMO JOGAR: O jogo necessita apenas do mouse para ser jogado, o seu objetivo é testar os conhecimentos do jogador em relação as comemorações e festas escolares. O jogo seguirá o formato de quiz, onde se é apresentado uma pergunta ao jogador e logo abaixo aparecerá imagens variadas associadas a pergunta, mas apenas uma imagens corresponde a resposta correta. Ao acertar a pergunta nos primeiros 30 segundos a pontuação será dobrada, se a resposta for errada ou a pergunta não for respondida o jogador não pontua. Independente da resposta, se abrirá uma caixa com a descrição da data comemorativa antes da próxima pergunta.", 60, 110, 595, 300); 
  }
  if(tela == 4){
    //Botão voltar
    noFill();
    stroke(0);
    strokeWeight(4);
    if(mouseX > 620 && mouseX < 700 && mouseY > 10 && mouseY < 40){
      rect(620, 10, 80, 30, 15);
      if(mouseIsPressed){
        tela = 1
      }
    }
    
    textStyle(BOLD);
    textSize(15);
    stroke(255);
    strokeWeight(3);
    fill(0);
    text("⏎ Voltar", 630, 30);
    
    //Texto
    textSize(30);
    strokeWeight(4);
    text("Créditos", 295, 40);
    
    image(img, 150, 75, 90, 120);
    textSize(20);
    text("Lucas Venâncio - Programador", 275, 175);
    
    image(adr, 150, 225, 90, 120);
    text("Adriana Félix - Orientadora", 275, 325);
  }
  if(tela == 5){
    tim = 3660
    
    fill(0);
    stroke(255);
    strokeWeight(4);
    textSize(30);
    image(fit, 215, 20);
    text(pont, 255, 48);
    image(tro, 335, 20);
    text(reco, 375, 48);
    
    //Botão voltar
    noFill();
    stroke(0);
    if(mouseX > 620 && mouseX < 700 && mouseY > 10 && mouseY < 40){
      rect(620, 10, 80, 30, 15);
      if(mouseIsPressed){
        tela = 1
      }
    }
    
    textStyle(BOLD);
    textSize(15);
    stroke(255);
    strokeWeight(3);
    fill(0);
    text("⏎ Voltar", 630, 30);
    
    //Botão próxima
    textSize(20);
    text("Próxima ➥", 560, 360)
    noFill();
    stroke(0);
    if(mouseX > 550 && mouseX < 675 && mouseY > 335 && mouseY < 370){
      rect(550, 335, 125, 35, 15);
      if(mouseIsPressed){
        if(quest == 5){
          tela = 6
        }
        else{
          tela = 2
        }
      }
    }
    
    fill(0);
    stroke(255);
    if(vf == false){
      image(fal, 60, 20, 30, 30);
      text("Incorreto", 100, 40);
    }
    if(vf == true){
      image(ver, 60, 20, 30, 30);
      text("Correto", 100, 40);
    }
    
    if(rep == 0 && quest == 1){
      text("19/04 - Dia do Índio", 60, 100);
      text("Em 19 de abril de 1940 ocorreu o Primeiro Congresso Indigenista Interamericano, tendo como finalidade zelar e garantir os direitos dos povos indígenas, os primeiros habitantes da América. A data foi proposta para todos os países do continente americano, entretanto, no Brasil só foi oficializada em 1943.", 60, 140, 610, 350);
    }
    if(rep == 0 && quest == 2){
      text("01/01 - Ano Novo", 60, 100);
      text("O primeiro dia do ano é comemorado em todo o mundo e por diversas culturas, em algumas delas em períodos diferentes, como os chineses que comemoram entre janeiro e fevereiro e os judeus entre setembro e outubro. É uma data atribuída ao recomeço, por isso é cercada de muitas superstições, como a cor que se deve vestir nesse dia, fazer metas, etc.", 60, 140, 610, 350);
    }
    if(rep == 0 && quest == 3){
      text("25/12 - Natal", 60, 100);
      text("No dia 25 de dezembro comemoramos o Natal, data que para o cristianismo corresponde ao nascimento de Jesus Cristo. Neste dia, famílias se reunem para confraternizar e lembrar de seus princípios cristãos. Embora seja uma data voltada para religião, é marcada também pelo incentivo ao consumo, se utilizando de símbolos e personagens como o Papai Noel.", 60, 140, 610, 350);
    }
    if(rep == 0 && quest == 4){
      text("12/10 - Dia das Crianças", 60, 100);
      text("12 de outubro é o dia dedicado as crianças no Brasil, a data é destinada a relembrar sobre os direitos das crianças e adolescentes. A data coincide com o dia de Nossa Senhora Aparecida (padroeira do Brasil), por isso é feriado. Comemorada desde 1924, só em 1959 teve um dia reconhecido pela ONU como Dia Internacional das Crianças, que é 20 de novembro.", 60, 140, 610, 350);
    }
    if(rep == 0 && quest == 5){
      text("22/04 - Dia do Descobrimento do Brasil", 60, 100);
      text("Em março de 1500 uma expedição liderada por Pedro Álvares Cabral partiu de Portugal com destino a Índia, até que no dia 22 de abril avistou terras desconhecidas. Inicialmente os portugueses pensaram ter encontrado uma ilha e a batizaram de Ilha de Vera Cruz, posteriormente Terra de Santa Cruz. Mesmo havendo habitantes nativos na terra encontrada, o acontecimento ficou popularmente conhecido como descobrimento do Brasil.", 60, 140, 610, 350);
    }
    if(rep == 1 && quest == 1){
      text("24/06 - São João", 60, 100);
      text("No dia 24 de junho se comemora o dia do nascimento de São João Batista, santo que é primo de Jesus e o batizou. No mês de junho é um dos santos homenageados e o mais lembrado nas festas juninas, período caracterizado principalmente pelas tradições nordestinas como as quadrilhas, música e comidas típicas.", 60, 140, 610, 350);
    }
    if(rep == 1 && quest == 2){
      text("Móvel - Carnaval", 60, 100);
      text("O Carnaval não possui um dia fixo, mas sempre antecede 40 dias antes da Páscoa, a palavra tem origem no latim e signifca ''retirar a carne'', costume praticado pelos cristãos no período da Quaresma. A data e suas práticas pela igreja foram adotadas em oposição a festejos pagãos da cultura babilônica, romana e grega, entretanto, as comemorações mundanas e seculares são mais difundidas do que a religiosa.", 60, 140, 610, 350);
    }
    if(rep == 1 && quest == 3){
      text("2º Domingo de Maio - Dia das Mães", 60, 100);
      text("O Dia das Mães não possui um dia fixo, mas sempre é comemorado no 2º domingo do mês de maio, a data está presente em diversas parte do mundo com dias e significados diferentes. No Brasil foi comemorada pela primeira vez em 1918, através de um movimento cristão e foi oficializada no país em 1932.", 60, 140, 610, 350);
    }
    if(rep == 1 && quest == 4){
      text("22/08 - Dia do Folclore", 60, 100);
      text("O dia do Folclore retoma ao dia em que o termo foi utilizado pela primeira vez, formado pela junção da palavra ''folk'' que significa povo e ''lore'' que significa conhecimento, foi criado pelo britânico William John Thoms em 1846. No Brasil teve como principais estudiosos Mário de Andrade e Câmara Cascudo. Além dos costumes e tradições, também são lembrados diversos personagens de lendas como o Curupira e o Saci.", 60, 140, 610, 350);
    }
    if(rep == 1 && quest == 5){
      text("25/08 - Dia do Soldado", 60, 100);
      text("O Dia do Soldado é comemorado no dia do aniversário de Luis Alves de Lima e Silva (Duque de Caxias). O Duque de Caxias foi um militar com uma carreira excepcional, ingressou no exército muito jovem, obteve vitórias nas mais importantes batalhas de sua época e chegou aos postos mais altos de comando. Hoje é o patrono do exército brasileiro.", 60, 140, 610, 350);
    }
    if(rep == 2 && quest == 1){
      text("2º Domingo de Agosto - Dia dos Pais", 60, 100);
      text("O dia dos pais não possui dia fixo como o dia das mães, outra semelhança é que se comemora no 2º domingo de agosto. É uma data que existe em diversas partes do mundo em dias diferentes, no Brasil foi criada pelo publicitário Sylvio Bhering com o  intuito principalmente de estimular o comércio, foi comemorada pela primeira vez em 1953.", 60, 140, 610, 350);
    }
    if(rep == 2 && quest == 2){
      text("21/09 - Dia da Árvore", 60, 100);
      text("O dia da Árvore teve sua data escolhida em função do início da primavera no hemisfério sul, que acontece entre os dia 21 e 23 de setembro. Sua principal finalidade é a conscientização sobre a impotância das árvores para o meio ambiente. Na região nordeste a data foi trocada para última semana de março, por causa do período da seca no mês de setembro.", 60, 140, 610, 350);
    }
    if(rep == 2 && quest == 3){
      text("Móvel - Páscoa", 60, 100);
      text("A Páscoa não possui um dia fixo, mas acontece entre os dias 22 de março e 25 de abril. O período da páscoa possui dois grandes significados, o povo judeu celebra a libertação do povo hebreu da escravidão no Egito e a tradição cristã trata da morte e ressureição de Jesus cristo. No Brasil popularmente se comemora a Páscoa cristã, e como os demais feriados religiosos também é uma data comercial, onde doces, principalmente chocolates são dados de presente.", 60, 140, 610, 350);
    }
    if(rep == 2 && quest == 4){
      text("15/10 - Dia do Professor", 60, 100);
      text("O dia do professor foi oficializado em 1963 com o intuito de homenagear a profissão que tem o ofício de ensinar todas as outras profissões. A data foi escolhida porque em 15 de outubro dm 1927, Dom Pedro I, decretou uma lei responsável pela criação do ensino básico no Brasil. A data é um feriado apenas escolar.", 60, 140, 610, 350);
    }
    if(rep == 2 && quest == 5){
      text("07/09 - Independência do Brasil", 60, 100);
      text("Em 7 de setembro de 1822, as margens do Rio Ipiranga, o então príncipe regente Dom pedro proclamou a independência do Brasil. O fato ocorreu após Portugal decidir transformar o Brasil em colônia novamente, o que ocasionaria um retrocesso econômico no país. Fortalecido com a opnião do povo e principalmente da elite, o príncipe declarou indepedência e se tornou o primeiro imperador do Brasil.", 60, 140, 610, 350);
    }
  }
  if(tela == 6){
    //Placar
    fill(0);
    stroke(255);
    strokeWeight(5);
    textStyle(BOLD);
    textSize(45);
    text("Pontuação:", 230, 65);
    textSize(40);
    image(fit, 270, 100, 50, 50);
    text(pont, 340, 140);
    image(tro, 270, 180, 50, 50);
    text(reco, 340, 220);
    textSize(30);
    if(pont == reco){
      text("Novo recorde!", 255, 290);
      text("★                        ★", 230, 215);
    }
    else{
      text("Fim de Jogo", 265, 290);
    }
    
    //Botão sair
    text("➥ ➥ ➥", 300, 360)
    noFill();
    stroke(0);
    if(mouseX > 291 && mouseX < 421 && mouseY > 335 && mouseY < 370){
      rect(291, 330, 130, 40, 20);
      if(mouseIsPressed){
        tela = 1
      }
    }
  }
}