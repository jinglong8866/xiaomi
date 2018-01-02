{
	let pagers=document.querySelectorAll('.remeng .ziti1');
	console.log(pagers);
	let imgs=document.querySelectorAll('.youmian1 .qiheyi')
	pagers.forEach(function(ele,index){
		ele.onmouseover=function(){
			for(let i=0;i<imgs.length;i++){
				pagers[i].classList.remove('active');
				imgs[i].classList.remove('active')
				
			}
			this.classList.add('active');
			imgs[index].classList.add('active')
			n=index
		}
	})
}