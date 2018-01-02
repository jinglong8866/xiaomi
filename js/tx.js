{
	let list = document.querySelectorAll(".zhoubiandahezi .neirongxiamiankuai")
	list.forEach(function(ele) {
		xxk(ele)
	})

	function xxk(lky) {
		let inner = lky.querySelector(".tx-box")
		let prev = lky.querySelector(".prev")
		let next = lky.querySelector(".next")
		let item = lky.querySelectorAll(".txhz")
		let pages = lky.querySelectorAll(".xyd-sg")
		let items = item.length
		let n = 0;
		next.onclick = function() {
			n++
			if(n >= items) {
				n = items - 1
				return
			}
			inner.style.marginLeft = -n * 296 + "px"
			for(let i = 0; i < pages.length; i++) {
				pages[i].classList.remove("active")
			}
			pages[n].classList.add("active")
		}
		prev.onclick = function() {
			n--
			if(n < 0) {
				n = 0
				return
			}
			inner.style.marginLeft = -n * 296 + "px"
			for(let i = 0; i < pages.length; i++) {
				pages[i].classList.remove("active")
			}
			pages[n].classList.add("active")
		}
		pages.forEach(function(ele, index) {
			let m = index
			ele.onclick = function() {
				for(let i = 0; i < pages.length; i++) {
					pages[i].classList.remove("active")
				}
				ele.classList.add("active")
				inner.style.marginLeft = -m * 296 + "px"
				n = index
			}
		})
	}
}
