//getting input for input field 1
function getInput1Value(inputFieldId){
    const inputField1 = document.getElementById(inputFieldId);
    const input1String = inputField1.value;
    const input1 = parseFloat(input1String);
    inputField1.value='';
    return input1;
}
//getting input for input field 2
function getInput2Value(inputFieldId){
    const inputField2 = document.getElementById(inputFieldId);
    const input2String = inputField2.value;
    const input2 = parseFloat(input2String);
    inputField2.value='';
    return input2;
}

//calculate area of triangle
document.getElementById('triangle-calculate').addEventListener('click', function(){

    const finalInput1 = getInput1Value('triangle-input-1');
    const finalInput2 = getInput2Value('triangle-input-2');
    
    const area = 0.5 * finalInput1 * finalInput2;
    const finalArea= area.toFixed(2);
    
    //validation
    if(isNaN(finalArea)){
        alert('please enter a valid number');
        return;
    }
    if(finalInput1<0 || finalInput2<0){
        alert('please enter a positive number');
        return;
    }

    const areaCalc = document.getElementById('area-calc');
    
    const li = document.createElement('li');
    li.innerText = 'Triangle'+'   '+finalArea+'cm';
    areaCalc.appendChild(li);
    
  
})

//calculate area of parallelogram
document.getElementById('rectangle-calculate').addEventListener('click', function(){
    const finalInput1 = getInput1Value('rectangle-input-1');
    const finalInput2 = getInput2Value('rectangle-input-2');
    const area = finalInput1 * finalInput2;
    const finalArea= area.toFixed(2);
    //validation
    if(isNaN(finalArea)){
        alert('please enter a valid number');
        return;
    }
    if(finalInput1<0 || finalInput2<0){
        alert('please enter a positive number');
        return;
    }
    

    const areaCalc = document.getElementById('area-calc');
    const li = document.createElement('li');
    li.innerText = 'Rectangle'+'      '+finalArea+'cm';
    areaCalc.appendChild(li);
})
//calculate area of parallelogram
document.getElementById('parallelogram-calculate').addEventListener('click', function(){
    const finalInput1 = getInput1Value('parallelogram-input-1');
    const finalInput2 = getInput2Value('parallelogram-input-2');
    const area = finalInput1 * finalInput2;
    const finalArea= area.toFixed(2);
    //validation
    if(isNaN(finalArea)){
        alert('please enter a valid number');
        return;
    }
    if(finalInput1<0 || finalInput2<0){
        alert('please enter a positive number');
        return;
    }
    

    const areaCalc = document.getElementById('area-calc');
    const li = document.createElement('li');
    li.innerText = 'Parallelogram'+'     '+finalArea+'cm';
    areaCalc.appendChild(li);
})
//calculate area of rhombus
document.getElementById('rhombus-calculate').addEventListener('click', function(){

    const finalInput1 = getInput1Value('rhombus-input-1');
    const finalInput2 = getInput2Value('rhombus-input-2');
    
    const area = 0.5 * finalInput1 * finalInput2;
    const finalArea= area.toFixed(2);
    

    if(isNaN(finalArea)){
        alert('please enter a valid number');
        return;
    }
    if(finalInput1<0 || finalInput2<0){
        alert('please enter a positive number');
        return;
    }

    const areaCalc = document.getElementById('area-calc');
    
    const li = document.createElement('li');
    li.innerText = 'Rhombus'+'       '+finalArea+'cm';
    areaCalc.appendChild(li);
    
  
})
//calculate area of pentagon
document.getElementById('pentagon-calculate').addEventListener('click', function(){

    const finalInput1 = getInput1Value('pentagon-input-1');
    const finalInput2 = getInput2Value('pentagon-input-2');
    
    const area = 0.5 * finalInput1 * finalInput2;
    const finalArea= area.toFixed(2);
    
    //validation
    if(isNaN(finalArea)){
        alert('please enter a valid number');
        return;
    }
    if(finalInput1<0 || finalInput2<0){
        alert('please enter a positive number');
        return;
    }

    const areaCalc = document.getElementById('area-calc');
    
    const li = document.createElement('li');
    li.innerText = 'Pentagon'+'        '+finalArea+'cm';
    areaCalc.appendChild(li);
    
  
})
//calculate area of ellipse
document.getElementById('ellipse-calculate').addEventListener('click', function(){

    const finalInput1 = getInput1Value('ellipse-input-1');
    const finalInput2 = getInput2Value('ellipse-input-2');
    
    const area = 3.14 * finalInput1 * finalInput2;
    const finalArea= area.toFixed(2);
    
    //validation
    if(isNaN(finalArea)){
        alert('please enter a valid number');
        return;
    }
    if(finalInput1<0 || finalInput2<0){
        alert('please enter a positive number');
        return;
    }
    
    const areaCalc = document.getElementById('area-calc');
    const li = document.createElement('li');
    li.innerText = 'Ellipse'+'            '+finalArea+'cm';
    areaCalc.appendChild(li);
    
    
    
  
})
//shifting from blog button to blog.html page
document.getElementById('blog-btn').addEventListener('click',function(){
    window.location.href='blog.html';
})


//random color
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 
  

function color(id){
    let element = document.getElementById(id);
    element.addEventListener('mouseenter', function(){
        element.style.backgroundColor = randomColor();   
      });
      element.addEventListener('mouseleave', function(){
        element.style.backgroundColor = '#FFFFFF';   
      });
}
color('tri');
color('rec');
color('para');
color('rho');
color('penta');
color('el');


  
  
 
