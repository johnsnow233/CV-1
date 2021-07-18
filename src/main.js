let html = document.querySelector('#html');
let style = document.querySelector('#style');
let string = `
/*你好，我是一名前端新人
接下来我要画一个太极
首先要准备一个div*/
#div1{
    width:200px;
    height:200px;
    border: 1px solid red;
}
/*接下画一个圆*/
#div1{
    border-radius:50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
}

/*太极是一阴一阳，即一黑一白*/
#div1{
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(9,9,121,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
} 
/*加两个神奇的东西*/
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
    border-radius:50%;
}  
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
    border-radius:50%;
}                                                                                                                                 
`;

let n = 0;
let string2 = ''

let step = () => {
    setTimeout(()=>{

        if(string[n] === '\n'){
            string2 += '<br>'
        }else if(string[n] === ' '){
            string2 += '&nbsp'
        }

        else{
            string2 += string[n]
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0,n);
        window.scrollTo(0,9999);
        html.scrollTo(0,9999)
        if(n < string.length-1){
            n +=1;
            step()
        }else{
        }
    },10)
};
step();

