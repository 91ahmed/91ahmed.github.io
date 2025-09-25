const posts = [
	{
		id: 1,
		title: ' تمثيل الاعداد في لغة الجافاسكريبت (Octal, Hex, Binary)',
		category: 'javascript',
		path: 'post/js/js_01.html',
		thumb: 'post/js/1.jpg',
		time: 'Oct 16, 2021',
		created_year: '2021',
		created_month: 'Oct',
		created_day: '16',
		author: 'Ahmed Hassan'
	},	
	{
		id: 2,
		title: 'الفرق بين Static Polymorphism و Dynamic Polymorphism',
		category: 'object oriented',
		path: 'post/oop/oop_01.html',
		thumb: 'post/oop/1.jpg',
		time: 'Oct 21, 2021',
		created_year: '2021',
		created_month: 'Oct',
		created_day: '21',
		author: 'Ahmed Hassan'
	}
]

let currentUrl = window.location.href
currentUrl = currentUrl.split('/')

let urlTitle = currentUrl[currentUrl.length-1]

for (let p of posts) {
	let postTitle = p.path.split('/')
	postTitle = postTitle[postTitle.length-1]
	
	if (postTitle === urlTitle) {
		document.getElementsByTagName('title')[0].innerHTML = p.title
		document.getElementById('printTitle').innerHTML = p.title
		document.getElementById('printAuthor').innerHTML = p.author
		document.getElementById('printDate').innerHTML = p.time
		document.getElementById('printCategory').innerHTML = p.category
		break
	}
}