var body =document.getElementById('body')
var cont =document.createElement('div') 
cont.setAttribute('id','cont')
var p1_pos =0
var p2_pos =0

function start(){

    for(let i=1;i<=101;i++){

    if(i%10==1){

        var div_innr =document.createElement('div')
        div_innr.style.clear='both'
        cont.append(div_innr)

        if(i==101){
            break
        }
    }


    var box =document.createElement('div')
    box.setAttribute('class','box')
    box.setAttribute('id','id'+i)
   
    box.textContent=i  


    //Setting up ladder
    var box_no = Number(box.textContent)

    if(box_no>20 && box_no<60 && box_no%11==2){
        box.style.backgroundColor='#2979FF'
    }
    if(box_no>20 && box_no<80 && box_no%10==9){
        box.style.backgroundColor='#2979FF'
    }

    //setting up snake
    if(box_no>50 && box_no<90 && box_no%10==2){
        box.style.backgroundColor='#F44336'
    }
    if(box_no>20 && box_no<100 && box_no%11==0){
        box.style.backgroundColor='#F44336'
    }

    //button rolldice p1
    var btn1 =document.createElement('button')
    btn1.textContent="Roll Dice P-1"
    btn1.addEventListener('click',rolldice1)
    btn1.setAttribute('id','roll1')

    //button rolldice p2
    var btn2 =document.createElement('button')
    btn2.textContent="Roll Dice P-2"
    btn2.addEventListener('click',rolldice2)
    btn2.setAttribute('id','roll2')

    event.target.remove()
    cont.append(box)
    }
    var brk = document.createElement('div')
    brk.style.clear='both'

    body.append(cont,brk)
    body.append(btn1,btn2)
}


//roll dice and player movements...............


function rolldice1(){
    //Update previous position
    if(p1_pos!=0)
    {   
        if(document.getElementById('player1')!=null){

            var prev =document.getElementById('player1')
            prev.setAttribute('id','id'+p1_pos)
        }
        else{
            var prev =document.getElementById('both')
            prev.setAttribute('id','player2')
        }
    }
    if(p2_pos==100){
        win_p2()
        return
    }

    var x =Math.floor(Math.random() * 6) + 1;
    
    p1_pos += x
    
    if(p1_pos>100){
       p1_pos -=x
    }
    //---------------------------    
        //checking if in snakes mouth
        if(p1_pos==82){
            p1_pos=51
        }
        else if(p1_pos==99){
            p1_pos=21
        }

        //checking if at ladder starting
        if(p1_pos==24){
         p1_pos=58
        }
        else if(p1_pos==29){
            p1_pos=79
        }
   //-----------------------------

        if(p1_pos!=p2_pos){
            var pos= document.getElementById('id'+p1_pos)
            pos.setAttribute('id','player1')
        }
        else{
            var pos= document.getElementById('player2')
            pos.setAttribute('id','both')
        }      

}




function rolldice2(){

    //Updating previous position
    if(p2_pos!=0){
         
        if(document.getElementById('player2')!=null){

            var prev =document.getElementById('player2')
            prev.setAttribute('id','id'+p2_pos)
        }
        else{
            var prev =document.getElementById('both')
            prev.setAttribute('id','player1')
        }
    }
    if(p1_pos==100){
        win_p1()
        return
    }
    var x =Math.floor(Math.random() * 6) + 1;
    p2_pos += x

    if(p2_pos>100){
        p2_pos -=x
     }
     //checking if in snakes mouth
     if(p2_pos==82){
        p2_pos=51
    }
    else if(p2_pos==99){
        p2_pos=21
    }

    //checking if at ladder starting
    if(p2_pos==24){
        p2_pos=58
    }
    else if(p2_pos==29){
        p2_pos=79
    }
   //-----------------------------
   
    if(p1_pos!=p2_pos){
        var pos= document.getElementById('id'+p2_pos)
        pos.setAttribute('id','player2')
    }
    else{
        var pos= document.getElementById('player1')
        pos.setAttribute('id','both')
    }
}

function win_p1(){
    body.innerHTML =''
    var head1 =document.createElement('h1')
    head1.textContent='Player 1 WON!'
    head1.setAttribute('class','winTxt')
    body.setAttribute('id','bodyp1')
    body.append(head1)
   

}
function win_p2(){
    body.innerHTML=''
    var head2 =document.createElement('h1')
    head2.textContent='Player 2 WON!'
    head2.setAttribute('class','winTxt')
    body.setAttribute('id','bodyp2')
    body.append(head2)

}


//==============doubt------why using this the roll2 button was not getting deleted?
//function win_p2(){
  //  var bdy =document.getElementById('body')
  //  var chld =bdy.children
  //  for(var i=0;i<chld.length;i++){
   // console.log(chld[i])
   // chld[i].remove() 
//} 


//function win_p1(){
  //  var bdy =document.getElementById('body')
  //  var chld =body.children
   // console.log(chld.length+" len")
  //  for(var i=0;i<chld.length;i++){
   // console.log(chld[i])
   // chld[i].remove()
//}
//}