document.getElementById('triangle-calculate').addEventListener('click', function(){
    const triangleInputField1 = document.getElementById('triangle-input-1');
    const triangleInput1String = triangleInputField1.value;
    const triangleInput1 = parseFloat(triangleInput1String);
    
    const triangleInputField2 = document.getElementById('triangle-input-2');
    const triangleInput2String = triangleInputField2.value;
    const triangleInput2 = parseFloat(triangleInput2String);
    
    const areaOfTheTriangle = 0.5 * triangleInput1 * triangleInput2;
    const finalAreaOfTheTriangle = areaOfTheTriangle.toFixed(2);
    
    triangleInputField1.value='';
    triangleInputField2.value='';
    if(isNaN(finalAreaOfTheTriangle)){
        alert('please enter a valid number');
        return;
    }
    if(triangleInput1<0 || triangleInput2<0){
        alert('please enter a positive number');
        return;
    }

    const placesUL = document.getElementById('c');
    
    const li = document.createElement('li');
    li.innerText = 'Triangle'+finalAreaOfTheTriangle+'cm';
    placesUL.appendChild(li);
  
})

document.getElementById('blog-btn').addEventListener('click',function(){
    window.location.href='blog.html';
})


