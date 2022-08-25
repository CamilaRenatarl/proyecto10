var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["6e9064b0-f3dc-4b6e-8547-6f110a4577c1","61338c10-b500-46e7-bb1d-f3798d717e2a","590fba7c-4e9a-4051-b3ff-e8f0e28456b0","ec019750-bfd6-4841-9a5d-e9fd4704e0c7","e7bf43e9-605b-46ea-8826-08f1091e7885","07b9dc99-8ec1-4e2a-85d3-85bf3b469552","1bb30bcf-7213-4745-9ede-574878ced23e","dab0b04f-5bd6-418a-a851-c713f566fb8a","8d3f3b0e-cdf1-4316-9110-cb76adca891e","d07d6ab0-8669-4cf3-be37-4581aa50d533"],"propsByKey":{"6e9064b0-f3dc-4b6e-8547-6f110a4577c1":{"name":"space_1","sourceUrl":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png"},"61338c10-b500-46e7-bb1d-f3798d717e2a":{"name":"sticker_27_1","sourceUrl":"assets/api/v1/animation-library/gamelab/wBEKDcgL5b8g5A6wxZLQFwn3w4yafsXs/category_stickers/sticker_27.png","frameSize":{"x":400,"y":242},"frameCount":1,"looping":true,"frameDelay":2,"version":"wBEKDcgL5b8g5A6wxZLQFwn3w4yafsXs","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":242},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wBEKDcgL5b8g5A6wxZLQFwn3w4yafsXs/category_stickers/sticker_27.png"},"590fba7c-4e9a-4051-b3ff-e8f0e28456b0":{"name":"sticker_03_1","sourceUrl":"assets/api/v1/animation-library/gamelab/6BQzk8lrGjoaJPX9udW5jYpFT8oPRHuH/category_stickers/sticker_03.png","frameSize":{"x":130,"y":112},"frameCount":1,"looping":true,"frameDelay":2,"version":"6BQzk8lrGjoaJPX9udW5jYpFT8oPRHuH","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":130,"y":112},"rootRelativePath":"assets/api/v1/animation-library/gamelab/6BQzk8lrGjoaJPX9udW5jYpFT8oPRHuH/category_stickers/sticker_03.png"},"ec019750-bfd6-4841-9a5d-e9fd4704e0c7":{"name":"sticker_14_1","sourceUrl":"assets/api/v1/animation-library/gamelab/1ve8xcSUavvVvLC6Vl.mojAV9PqyYTDU/category_stickers/sticker_14.png","frameSize":{"x":246,"y":192},"frameCount":1,"looping":true,"frameDelay":2,"version":"1ve8xcSUavvVvLC6Vl.mojAV9PqyYTDU","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":246,"y":192},"rootRelativePath":"assets/api/v1/animation-library/gamelab/1ve8xcSUavvVvLC6Vl.mojAV9PqyYTDU/category_stickers/sticker_14.png"},"e7bf43e9-605b-46ea-8826-08f1091e7885":{"name":"redcrystal_1","sourceUrl":"assets/api/v1/animation-library/gamelab/KcuGz0dhj9Vacw_lOQdRN7TPQqJzamn_/category_video_games/gameplay_redcrystal.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"KcuGz0dhj9Vacw_lOQdRN7TPQqJzamn_","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KcuGz0dhj9Vacw_lOQdRN7TPQqJzamn_/category_video_games/gameplay_redcrystal.png"},"07b9dc99-8ec1-4e2a-85d3-85bf3b469552":{"name":"diamond2","sourceUrl":"assets/api/v1/animation-library/gamelab/FJT6QpZscrzSwGwpDPnJZED8ABADci6Q/category_video_games/gameplay_greendiamond2.png","frameSize":{"x":281,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"FJT6QpZscrzSwGwpDPnJZED8ABADci6Q","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":281,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/FJT6QpZscrzSwGwpDPnJZED8ABADci6Q/category_video_games/gameplay_greendiamond2.png"},"1bb30bcf-7213-4745-9ede-574878ced23e":{"name":"sticker_02_1","sourceUrl":"assets/api/v1/animation-library/gamelab/GpNAydF2_T833Ll23cnvNRlCI.zixIVR/category_stickers/sticker_02.png","frameSize":{"x":112,"y":112},"frameCount":1,"looping":true,"frameDelay":2,"version":"GpNAydF2_T833Ll23cnvNRlCI.zixIVR","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":112,"y":112},"rootRelativePath":"assets/api/v1/animation-library/gamelab/GpNAydF2_T833Ll23cnvNRlCI.zixIVR/category_stickers/sticker_02.png"},"dab0b04f-5bd6-418a-a851-c713f566fb8a":{"name":"neonheart_07_1","sourceUrl":"assets/api/v1/animation-library/gamelab/5LKpOzNCR3YvRDWHr_Zh5U08w2d.3KhA/category_stickers/neonheart_07.png","frameSize":{"x":378,"y":372},"frameCount":1,"looping":true,"frameDelay":2,"version":"5LKpOzNCR3YvRDWHr_Zh5U08w2d.3KhA","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":378,"y":372},"rootRelativePath":"assets/api/v1/animation-library/gamelab/5LKpOzNCR3YvRDWHr_Zh5U08w2d.3KhA/category_stickers/neonheart_07.png"},"8d3f3b0e-cdf1-4316-9110-cb76adca891e":{"name":"diamond_1","sourceUrl":"assets/api/v1/animation-library/gamelab/dmHXimVUN6NkkgGu6Ojoow2mldVDI2ai/category_video_games/gameplay_purplediamond.png","frameSize":{"x":400,"y":383},"frameCount":1,"looping":true,"frameDelay":2,"version":"dmHXimVUN6NkkgGu6Ojoow2mldVDI2ai","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":383},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dmHXimVUN6NkkgGu6Ojoow2mldVDI2ai/category_video_games/gameplay_purplediamond.png"},"d07d6ab0-8669-4cf3-be37-4581aa50d533":{"name":"sticker_34_1","sourceUrl":"assets/api/v1/animation-library/gamelab/03rBgUkpKK_9hg1RkGHc820nxLAp_lB8/category_stickers/sticker_34.png","frameSize":{"x":244,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"03rBgUkpKK_9hg1RkGHc820nxLAp_lB8","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":244,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/03rBgUkpKK_9hg1RkGHc820nxLAp_lB8/category_stickers/sticker_34.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//variable para almacenar los estados de juego
var gamestate="serve"
//Mostrar la puntuacion en cero
var Gemas=0

//Poner un fondo al juego
var fondo = createSprite(200,200)
fondo.setAnimation("space_1")
//crear a LUNA
var luna=createSprite(30,375,20,20)
luna.setAnimation("sticker_34_1")
luna.scale=0.1
//crear las naves
var nave1=createSprite(189,76,10,10)
nave1.setAnimation("sticker_27_1")
nave1.scale=0.1
var nave2=createSprite(112,125,10,10)
nave2.setAnimation("sticker_27_1")
nave2.scale=0.1
var nave3=createSprite(90,204,10,10)
nave3.setAnimation("sticker_27_1")
nave3.scale=0.1
var nave4=createSprite(134,267,10,10)
nave4.setAnimation("sticker_27_1")
nave4.scale=0.1
var nave5=createSprite(188,290,10,10)
nave5.setAnimation("sticker_27_1")
nave5.scale=0.1
var nave6=createSprite(267,120,10,10)
nave6.setAnimation("sticker_27_1")
nave6.scale=0.1
var nave7=createSprite(300,200,10,10)
nave7.setAnimation("sticker_27_1")
nave7.scale=0.1
var nave8=createSprite(262,272,10,10)
nave8.setAnimation("sticker_27_1")
nave8.scale=0.1
//crear las 5 gemas
var gema1=createSprite(187,227,20,20)
gema1.setAnimation("sticker_03_1")
gema1.scale=0.36
var gema2=createSprite(137,177,20,20)
gema2.scale=0.08
gema2.setAnimation("redcrystal_1")
var gema3=createSprite(184,177,20,20)
gema3.scale=0.1
gema3.setAnimation("diamond_1")
var gema4=createSprite(236,177,20,20)
gema4.setAnimation("diamond2")
gema4.scale=0.09
var gema5=createSprite(182,134,20,20)
gema5.setAnimation("sticker_14_1")
gema5.scale=0.18



function draw() {
 drawSprites() 
 fill("white");
 textSize(27);
 stroke("black");
 //estado serve 
if (gamestate==="serve") {
  text("Presiona ENTER para jugar",30,50)
  text("Utiliza las flechas para jugar",30,330)
  if (keyDown("ENTER")) {
  nave1.velocityX=5
  nave2.velocityX=-6 
  nave3.velocityX=5 
  nave4.velocityX=-6 
  nave5.velocityX=5 
  nave6.velocityX=-6 
  nave7.velocityX=5 
  nave8.velocityX=-6 
   nave1.velocityY=5
  nave2.velocityY=-6 
  nave3.velocityY=5 
  nave4.velocityY=-6 
  nave5.velocityY=5
  nave6.velocityY=-6 
  nave7.velocityY=5
  nave8.velocityY=-6 
  gamestate="play"
   } 
  }
  //estado play
if (gamestate==="play") {
      text("Gemas"+Gemas,90,50);
      
      if (keyDown("up")) {
       luna.y-=3  
       }
      if (keyDown("down")) {
       luna.y+=3  
       
       }
      if (keyDown("RIGHT")) {
       luna.x+=3  
       }
      if (keyDown("LEFT")) {
       luna.y-=3  
       }
      if (luna.bounceOff(gema1)) {
      gema1.destroy() 
      Gemas = Gemas+ 1;
playSound("assets/category_collect/energy_bar_recharge_4.mp3", false);
       }
      if (luna.bounceOff(gema2)) {
      gema2.destroy() 
      Gemas = Gemas+ 1;
      playSound("assets/category_collect/energy_bar_recharge_4.mp3", false);
      }
      if (luna.bounceOff(gema3)) {
      gema3.destroy() 
      Gemas = Gemas+ 1;
      playSound("assets/category_collect/energy_bar_recharge_4.mp3", false);
      }
      if (luna.bounceOff(gema4)) {
      gema4.destroy() 
      Gemas = Gemas+ 1;
      playSound("assets/category_collect/energy_bar_recharge_4.mp3", false);
      }
      if (luna.bounceOff(gema5)) {
      gema5.destroy() 
      Gemas = Gemas+ 1;
      playSound("assets/category_collect/energy_bar_recharge_4.mp3", false);
      }
      if(
          luna.isTouching(nave1)||
          luna.isTouching(nave2)||
          luna.isTouching(nave3)||
          luna.isTouching(nave4)||
          luna.isTouching(nave5)||
          luna.isTouching(nave6)||
          luna.isTouching(nave7)||
          luna.isTouching(nave8))
         
       {
        
        
playSound("assets/category_alerts/vibrant_game_negative_bling_1.mp3", false);
       
          luna.x = 30;
          luna.y = 337;
          nave1.velocityX=0
          nave1.velocityY=0
          nave2.velocityX=0
          nave2.velocityY=0
          nave3.velocityX=0
          nave3.velocityY=0
          nave4.velocityX=0
          nave4.velocityY=0
          nave5.velocityX=0
          nave5.velocityY=0
          nave6.velocityX=0
          nave6.velocityY=0
          nave7.velocityX=0
          nave7.velocityY=0
          nave8.velocityX=0
          nave8.velocityY=0
       gamestate="end"  
       }
 if (keyDown("E")) {
     nave1.velocityX=5
  nave2.velocityX=-6 
  nave3.velocityX=5 
  nave4.velocityX=-6 
  nave5.velocityX=5 
  nave6.velocityX=-6 
  nave7.velocityX=5 
  nave8.velocityX=-6 
   nave1.velocityY=5
  nave2.velocityY=-6 
  nave3.velocityY=5 
  nave4.velocityY=-6 
  nave5.velocityY=5
  nave6.velocityY=-6 
  nave7.velocityY=5
  nave8.velocityY=-6    
       }
             
      if (Gemas===5) {
        text("¡Ganaste!",156,33) 
        gamestate="end"
      }
       
    }
    //estado end
 if (gamestate==="end") {
   text("GAME OVER",130,50) 
   fill("pink")
   text("Press E to reset",110,100)
if (keyDown("E")) {
  gamestate="play"
}

      
   }
     
        
   
  

  
   
 
 
 

    
 
 
 
 
 
 
 
 
 
 
 
 
 
 
   
 createEdgeSprites()
 luna.bounceOff(topEdge)
 luna.bounceOff(bottomEdge)
 luna.bounceOff(leftEdge)
 luna.bounceOff(rightEdge)
 nave1.bounceOff(leftEdge)
 nave1.bounceOff(rightEdge)
 nave2.bounceOff(leftEdge)
 nave2.bounceOff(rightEdge)
 nave3.bounceOff(leftEdge)
 nave3.bounceOff(rightEdge)
 nave4.bounceOff(leftEdge)
 nave4.bounceOff(rightEdge)
 nave5.bounceOff(leftEdge)
 nave5.bounceOff(rightEdge)
 nave6.bounceOff(leftEdge)
 nave6.bounceOff(rightEdge)
 nave7.bounceOff(leftEdge)
 nave7.bounceOff(rightEdge)
 nave8.bounceOff(leftEdge)
 nave8.bounceOff(rightEdge)
  nave1.bounceOff(topEdge)
 nave1.bounceOff(bottomEdge)
 nave2.bounceOff(topEdge)
 nave2.bounceOff(bottomEdge)
 nave3.bounceOff(topEdge)
 nave3.bounceOff(bottomEdge)
 nave4.bounceOff(topEdge)
 nave4.bounceOff(bottomEdge)
 nave5.bounceOff(topEdge)
 nave5.bounceOff(bottomEdge)
 nave6.bounceOff(topEdge)
 nave6.bounceOff(bottomEdge)
 nave7.bounceOff(topEdge)
 nave7.bounceOff(bottomEdge)
 nave8.bounceOff(topEdge)
 nave8.bounceOff(bottomEdge)
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
