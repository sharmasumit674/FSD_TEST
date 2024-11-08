    let btn = document.getElementById('btn')
    let nam = document.getElementById('name')
    let password = document.getElementById('password')
    let btn2 = document.getElementById('btn2')
    let api = `https://api.github.com/users`
    let data = document.getElementById('data')
    let p1 = document.getElementById('p1')
    let p2 = document.getElementById('p2')
    let p3 = document.getElementById('p3')
    let p4 = document.getElementById('p4')
    let p5 = document.getElementById('p5')
    let p6 = document.getElementById('p6')
    let p7 = document.getElementById('p7')
    let p8 = document.getElementById('p8')
    let p9 = document.getElementById('p9')
    let p10 = document.getElementById('p10')
    let d = document.getElementById('data')
    let btn3 = document.getElementById('btn3')
    function clickHandler(){
        if(nam.value !== password.value){
            alert("This is not valid");
        }
        else{
            window.open("index2.html", "_blank");
        }
        
    }

    function clickHandler2(){
        fetchData()
    
    }

    async function fetchData(){
        let data = await fetch(api);
        console.log(data);
        let res = await data.json();
        console.log(res)

        p1.innerHTML=res[0].login
        p2.innerHTML=res[1].login
        p3.innerHTML=res[2].login
        p4.innerHTML=res[3].login
        p5.innerHTML=res[4].login
        p6.innerHTML=res[5].login
        p7.innerHTML=res[6].login
        p8.innerHTML=res[7].login
        p9.innerHTML=res[8].login
        p10.innerHTML=res[9].login

        // for(let key inres){
        //     for(let response in key){
        //         arr.push(response.login)
        //     }
        // }
        // console.log(arr)
    
    }

    arr.sort((a, b) => a.login.localeCompare(b.login));