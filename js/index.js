
{
	let imgs=document.querySelectorAll(".lunbokais li");
	let pagers=document.querySelectorAll(".xiaodian li");
	let lbhz=document.querySelector(".lunbodahezi");
	let left=document.querySelector(".lunbo145");
	let right=document.querySelector(".lunbo146");
	pagers.forEach(function(ele,index){
		ele.onclick=function(){
			for(let i=0;i<pagers.length;i++){
				pagers[i].classList.remove("atcive");
				imgs[i].classList.remove("atcive");
			}
			ele.classList.add("atcive");
			imgs[index].classList.add("atcive")
		}	
	})
	let n=0;
	function dt(x){
    	if(x){
    		n--;
    	}else{
    		n++;
    	}
    	if(n==-1){
    		n=pagers.length-1
    	}
    	if(n===pagers.length){
    		n=0
    	}
    	for(let i=0;i<pagers.length;i++){
			pagers[i].classList.remove("atcive");
			imgs[i].classList.remove("atcive");
		}
    	pagers[n].classList.add("atcive");
		imgs[n].classList.add("atcive");
    }
    let sp=setInterval(dt,2000)
    
    lbhz.onmouseover=function(){
    	clearInterval(sp)
    }
    
    lbhz.onmouseout=function(){
    	sp=setInterval(dt,2000);
    }
	left.onclick=function(){
		dt(1)
	}
    right.onclick=function(){
    	dt()	
    }
       
}


{	
	let jtz=document.querySelector(".zuomkuohao");
	let jty=document.querySelector(".youkuohao");
	let dkh=document.querySelector(".xiamian");
	jty.onclick=function(){
		this.classList.remove("active");
		jtz.classList.add("active");
		dkh.style.transform="translatex(-1225px)"
	}
	jtz.onclick=function(){
		this.classList.remove("active");
		jty.classList.add("active");
		dkh.style.transform="translatex(0)"
	}
	
	let n=0;
	function stay(){
		n++;
		if(n%2==0){
			jty.onclick()
		}else{
			jtz.onclick()
		}
	}
	
	let st=setInterval(stay,3000);
	dth.onmouseover=function(){
		clearInterval(st);
	}
	dth.onmouseout=function(){
		st=setInterval(stay,3000);
	}
	
}







