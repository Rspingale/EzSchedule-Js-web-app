
document.addEventListener('DOMContentLoaded', function () {

    let btn = document.querySelector('.sbutton');
    let inpt = document.querySelector('.inputxt');
    let listt = document.querySelector('.listt');
    let del = document.querySelector('.delete');
    let btn1 = document.querySelector('.btnd');
    let btnu=document.querySelector('.btnu');
    let inptu=document.querySelector('.inptu');
    let btnu1=document.querySelector('.btnu1');
    let inptu1=document.querySelector('.inptu1');
    
    let arr = [];

    btn.addEventListener("click", function (event) {
        event.preventDefault();
        let item = document.createElement('li');
        item.innerText = inpt.value;
        arr.push(item);
        inpt.value = '';

        // Clear existing items in the listt
        listt.innerHTML = '';

        // Append all items in the array to the listt using a loop
        for (let i = 0; i < arr.length; i++) {
            listt.appendChild(arr[i]);
        }
    });

    btn1.addEventListener("click", function (event) {
        event.preventDefault();
        let delv = Number(del.value);
        del.value='';

        if (arr.length > (delv - 1) && delv > 0) {
            arr.splice(delv - 1, 1); // Remove the specified element from the array
            listt.innerHTML = '';
            
            // Append all items in the array to the listt using a loop
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] !== -1) {
                    listt.appendChild(arr[i]);
                }
            }

        } else {
            alert(`${del.value} isn't available in the list`);
        }
        

    });

    btnu.addEventListener('click',function(event){

        event.preventDefault();
        let uval= Number(inptu.value);
        

        
        
        if (arr.length > (uval - 1) && uval > 0) {
            var myElement = document.querySelector('.infoU');
            myElement.style.display = 'block';

            btnu1.addEventListener('click',function(event){
                event.preventDefault();
                arr[uval-1].innerText=inptu1.value;
                inptu1.value='';
                inptu.value='';
                document.querySelector('.infoU').style.display = 'none';
            });
            listt.innerHTML = '';
            // Append all items in the array to the listt using a loop
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] !== -1) {
                    listt.appendChild(arr[i]);
                }
            }
        } else {
            alert(`${del.value} isn't available in the list`);
        }
    })
    

});
