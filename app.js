document.querySelector('.getjokes').addEventListener('click', getJokes)

function getJokes(e){
   
    const num = document.querySelector('#jokenumber').value;
    console.log(num);

    const xhr = new XMLHttpRequest();

    xhr.open('GET',`http://api.icndb.com/jokes/random/${num}`, true);

    xhr.onload = function(){
        
        if(this.status === 200){

            const val = JSON.parse(xhr.responseText);
            
            let output;
            if(val.type === "success"){
                val.value.forEach(function(ele){
                    output += `
                       
                            <div class="col s12">
                               <div>
                               <h4>Joke Number : ${ele.id} </h4>
                               <p>${ele.joke}</p>
                               </div>
                            </div>
                       
                    `;
                })
            }
            else{
                output = `Something is not right`
            }
            document.querySelector('#jokes').childNodes[1].innerHTML = output;
        }
    }
    xhr.send();
    e.preventDefault();
}

