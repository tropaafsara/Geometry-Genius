function getInput1Value(inputFieldId){
    const inputField1 = document.getElementById(inputFieldId);
    const input1String = inputField1.value;
    const input1 = parseFloat(input1String);
    inputField1.value='';
    return input1;
}
function getInput2Value(inputFieldId){
    const inputField2 = document.getElementById(inputFieldId);
    const input2String = inputField2.value;
    const input2 = parseFloat(input2String);
    inputField2.value='';
    return input2;
}


document.getElementById('triangle-calculate').addEventListener('click', function(){

    const finalInput1 = getInput1Value('triangle-input-1');
    const finalInput2 = getInput2Value('triangle-input-2');
    
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
    li.innerText = 'Triangle'+finalArea+'cm';
    areaCalc.appendChild(li);
    
  
})




document.getElementById('rectangle-calculate').addEventListener('click', function(){
    const finalInput1 = getInput1Value('rectangle-input-1');
    const finalInput2 = getInput2Value('rectangle-input-2');
    const area = finalInput1 * finalInput2;
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
    li.innerText = 'Rectangle'+finalArea+'cm';
    areaCalc.appendChild(li);
})
document.getElementById('parallelogram-calculate').addEventListener('click', function(){
    const finalInput1 = getInput1Value('parallelogram-input-1');
    const finalInput2 = getInput2Value('parallelogram-input-2');
    const area = finalInput1 * finalInput2;
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
    li.innerText = 'Parallelogram'+finalArea+'cm';
    areaCalc.appendChild(li);
})

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
    li.innerText = 'Rhombus'+finalArea+'cm';
    areaCalc.appendChild(li);
    
  
})
document.getElementById('pentagon-calculate').addEventListener('click', function(){

    const finalInput1 = getInput1Value('pentagon-input-1');
    const finalInput2 = getInput2Value('pentagon-input-2');
    
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
    li.innerText = 'Pentagon'+finalArea+'cm';
    areaCalc.appendChild(li);
    
  
})

document.getElementById('ellipse-calculate').addEventListener('click', function(){

    const finalInput1 = getInput1Value('ellipse-input-1');
    const finalInput2 = getInput2Value('ellipse-input-2');
    
    const area = 3.14 * finalInput1 * finalInput2;
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
    li.innerText = 'Ellipse'+finalArea+'cm';
    areaCalc.appendChild(li);
    
  
})

document.getElementById('blog-btn').addEventListener('click',function(){
    window.location.href='blog.html';
})
