
var wheight = $(window).height();   //열린 창의 세로길이를 구해서 변수에 넣는다
$('section').css('height',wheight);  //위에서 구한 세로길이로 section의 height값 설정



//각 section의 top부터의 거리를 잰다
var pos = [];  //변수pos는 배열이다

for(var i=1 ; i<7 ; i++){
  pos.push($('#section'+i).offset().top);
}
//for(초기값;조건식;증감식){ 실행 }
//배열.push(값) : 값을 배열에 집어 넣는다


$(window).scroll(function(){
  var scrollH = $(window).scrollTop();   //스크롤 된 거리를 구해준다
  $('.s_num').text(scrollH);

  //스크롤 시 리모트 버튼 색상 변화

  if(scrollH < pos[1]){
    $('#remote a').removeClass('on');
    $('#remote a').eq(0).addClass('on');
  } 
    else if( scrollH >= pos[1] && scrollH < pos[2]) {
      $('#remote a').removeClass('on');
      $('#remote a').eq(1).addClass('on'); 
  } 
  else if( scrollH >= pos[2] && scrollH < pos[3]) {
    $('#remote a').removeClass('on');
    $('#remote a').eq(2).addClass('on'); 
  }  
  else if( scrollH >= pos[3] && scrollH < pos[4]) {
    $('#remote a').removeClass('on');
    $('#remote a').eq(3).addClass('on'); 
  }  
  else if( scrollH >= pos[4] && scrollH < pos[5]) {
    $('#remote a').removeClass('on');
    $('#remote a').eq(4).addClass('on'); 
  }
  else{
    $('#remote a').removeClass('on');
    $('#remote a').eq(5).addClass('on'); 
  }
});


  //리모트버튼을 누르면 부드럽게 움직인다
  $('#remote a').on('click',function(e){
    e.preventDefault();  
    
    var ttt = this.hash; //클릭한 #(해쉬) 값을 변수에 넣는다
    console.log(ttt);
   
    $('html, body').animate({scrollTop:$(ttt).offset().top},500,'swing');
  });

/*
  //각 section안의 btn_down버튼 클릭
  $('#section1 .btnDown').on('click',function(){
    $('html, body').animate({scrollTop:pos[1]},500,'swing');
  }); 
  $('#section2 .btnDown').on('click',function(){
    $('html, body').animate({scrollTop:pos[2]},500,'swing');
  }); 
  $('#section3 .btnDown').on('click',function(){
    $('html, body').animate({scrollTop:pos[4]},500,'swing');
  }); 
  $('#section4 .btnDown').on('click',function(){
    $('html, body').animate({scrollTop:pos[5]},500,'swing');
  }); 
  $('#section5 .btnDown').on('click',function(){
    $('html, body').animate({scrollTop:pos[5]},500,'swing');
  }); 
*/

 //각 section안의 btn_down버튼 클릭-축약
  $('section .btnDown').on('click',function(){
      var aa = $(this).parents('section').index();    
      $('html, body').animate({scrollTop:pos[aa+1]},500,'swing');
  }); 




