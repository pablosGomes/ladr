var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["12cd3ff4-ffd8-46e5-98fe-b03f90fa2158","f6425183-9ab8-46ca-9563-358b7906c7fa"],"propsByKey":{"12cd3ff4-ffd8-46e5-98fe-b03f90fa2158":{"name":"diamante","sourceUrl":"assets/api/v1/animation-library/gamelab/dmHXimVUN6NkkgGu6Ojoow2mldVDI2ai/category_video_games/gameplay_purplediamond.png","frameSize":{"x":400,"y":383},"frameCount":1,"looping":true,"frameDelay":2,"version":"dmHXimVUN6NkkgGu6Ojoow2mldVDI2ai","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":383},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dmHXimVUN6NkkgGu6Ojoow2mldVDI2ai/category_video_games/gameplay_purplediamond.png"},"f6425183-9ab8-46ca-9563-358b7906c7fa":{"name":"ladrao","sourceUrl":null,"frameSize":{"x":640,"y":640},"frameCount":1,"looping":true,"frameDelay":12,"version":"dm0yzBra.8HbvJPkpFrXgUFQEVbkngPw","loadedFromSource":true,"saved":true,"sourceSize":{"x":640,"y":640},"rootRelativePath":"assets/f6425183-9ab8-46ca-9563-358b7906c7fa.png"}}};
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



var diamante = createSprite(370, 15);
diamante.setAnimation("diamante");
diamante.scale = 0.1;

var ladrao = createSprite(40, 380);
ladrao.setAnimation("ladrao");

var laser1 = createSprite(0, 328,400,10);
laser1.velocityY=-2;
ladrao.scale = 0.1;

var laser2 = createSprite(400, 65,400,10);
laser2.velocityY=2;

laser1.shapeColor="red";
laser2.shapeColor="red";


 createEdgeSprites();
 

function draw() {
background("white");

 drawSprites();


laser1.bounceOff(topEdge);
laser1.bounceOff(bottomEdge);
laser2.bounceOff(topEdge);
laser2.bounceOff(bottomEdge);
ladrao.bounceOff(edges);



 
 if (keyIsDown(RIGHT_ARROW)) {
   ladrao.velocityX=3;
   ladrao.velocityY=0;
   
 }
  
  if (keyIsDown(LEFT_ARROW)) {
   ladrao.velocityX=-2;
   ladrao.velocityY=0;
   
 }
  
  if (keyIsDown(UP_ARROW)) {
   ladrao.velocityX=0;
   ladrao.velocityY=-2;
   
 }
  
  if (keyIsDown(DOWN_ARROW)) {
   ladrao.velocityX=0;
   ladrao.velocityY=2;
   
 }


  if (laser1.isTouching(ladrao)||laser2.isTouching(ladrao)) {
    stroke(0)
  fill(0)
  textSize(24);
    text("ladrão capturado",120,200);
    laser1.setVelocity(0,0);
    laser2.setVelocity(0,0);
    ladrao.setVelocity(0,0);
  
    
  }
  
  if (ladrao.isTouching(diamante)) {
    stroke(0)
  fill(0)
  textSize(24);
    text("missão comprida",120,200);
    laser1.setVelocity(0,0);
    laser2.setVelocity(0,0);
    ladrao.setVelocity(0,0);
    
  }
  
  
  
  
  
  
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
