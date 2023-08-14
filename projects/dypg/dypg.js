dyPaginate = (options) => 
{
	$(document).ready(function () 
	{
		// Pagination options
		let count = ('count' in options) ? options.count : 1
		let pages = ('pages' in options) ? options.pages : 2
		let first = 1
		let current = ('current' in options) ? options.current : first
		let next = current+1
		let prev = current
		let last = count

		// Text
		let first_text = ('first_text' in options) ? options.first_text : 'First'
		let last_text = ('last_text' in options) ? options.last_text : 'Last'
		let next_text = ('next_text' in options) ? options.next_text : 'Next'
		let prev_text = ('prev_text' in options) ? options.prev_text : 'Prev'

		// Pagination content
		let id = ('id' in options) ? options.id : 'dypg'

		// Pagination array
		let paginate = []

		// Check current value
		if (current < 1 || current > count) {
			current = 1
		}

		// Set previous value if current page bigger than 1
		if (current > 1) {
			prev = current-1
		}

		// Set next value if current equal pages count
		if (current == count) {
			next = current
		}

		if (count > 1) 
		{
			$('#'+id).append(`<li class='dypg-list-page' value='${first}'>${first_text}</li>`)
			$('#'+id).append(`<li class='dypg-list-page' value='${prev}'>${prev_text}</li>`)

			if (current > 1) {
				$('#'+id).append(`<li class='dypg-disable'>...</li>`)
			}

			for (let pi = current; pi <= count; pi++) 
			{
				if (pi == current) {
					$('#'+id).append(`<li class='dypg-list-page dypg-list-current' value='${pi}'>${pi}</li>`)
				} else {
					$('#'+id).append(`<li class='dypg-list-page' value='${pi}'>${pi}</li>`)
				}	
				
				paginate.push(pi) // push data to paginate array

				if (paginate.length >= pages) {
					break
				}
			}

			if (paginate[paginate.length-1] !== count) {
				$('#'+id).append(`<li class='dypg-disable'>...</li>`)
			}

			$('#'+id).append(`<li class='dypg-list-page' value='${next}'>${next_text}</li>`)
			$('#'+id).append(`<li class='dypg-list-page' value='${last}'>${last_text}</li>`)

			$('#'+id).append(`<div class='dypg-info'>Page ${current} of ${count}</div>`)

			// Set current page attribute
			$('#'+id).attr('data-current', current)

			$('body').on('click', '.dypg-list-page', function () 
			{
				// get the current page value
				let paginate_first_page = paginate[0]
				let paginate_last_page = paginate[paginate.length-1]
				current = $(this).val()
				next = current+1
				prev = current-1

				if (current == 1) {
					prev = 1
				}

				if (current == count) {
					next = count
				}

				// Add new pages if current page equal last page in array
				if (paginate_last_page !== count)
				{
					if (current == paginate_last_page || current == paginate_last_page+1) 
					{
						let new_pages = []
						
						for (let cp = paginate_last_page; cp <= count; cp++) {

							new_pages.push(cp)

							if (new_pages.length >= pages || cp <= 1) {
								break
							}
						}

						paginate = new_pages
					}
				}
				
				// Add new pages if current page equal first page in array
				if (paginate_first_page !== 1)
				{
					if (current == paginate_first_page || current == paginate_first_page-1)
					{
						let new_pages2 = []

						for (let cp2 = paginate_first_page; cp2 <= count; cp2--) {

							new_pages2.push(cp2)

							if (new_pages2.length >= pages || cp2 <= 1) {
								break
							}
						}

						paginate = new_pages2.reverse()
					}
				}

				// Add new pages if current page equal first
				if (current == 1) 
				{
					let new_pages3 = []

					for (let fp = 1; fp <= count; fp++) {
						new_pages3.push(fp)

						if (new_pages3.length >= pages) {
							break
						}
					}

					paginate = new_pages3
				}

				// Add new pages if current page equal last
				if (current == count) 
				{
					let new_pages4 = []

					for (let lp = count; lp >= 1; lp--) {

						new_pages4.push(lp)

						if (new_pages4.length >= pages) {
							break
						}
					}

					paginate = new_pages4.reverse()
				}

				// Append new pages
				$('#'+id).html('')

				$('#'+id).append(`<li class='dypg-list-page' value='${first}'>${first_text}</li>`)
				$('#'+id).append(`<li class='dypg-list-page' value='${prev}'>${prev_text}</li>`)

				if (paginate[0] !== 1) {
					$('#'+id).append(`<li class='dypg-disable'>...</li>`)
				}
				
				for (let li = 0; li < paginate.length; li++) 
				{
					if (paginate[li] == current) {
						$('#'+id).append(`<li class='dypg-list-page dypg-list-current' value='${paginate[li]}'>${paginate[li]}</li>`)
					} else {
						$('#'+id).append(`<li class='dypg-list-page' value='${paginate[li]}'>${paginate[li]}</li>`)
					}	
				}

				if (paginate[paginate.length-1] !== count) {
					$('#'+id).append(`<li class='dypg-disable'>...</li>`)
				}

				$('#'+id).append(`<li class='dypg-list-page' value='${next}'>${next_text}</li>`)
				$('#'+id).append(`<li class='dypg-list-page' value='${last}'>${last_text}</li>`)

				// Append informations
				$('#'+id).append(`<div class='dypg-info'>Page ${current} of ${count}</div>`)

				// Set current page attribute
				$('#'+id).attr('data-current', current)
			})
		}

	})
}

dypgLastArray = (arr) => 
{
	let last

	for (let ar = 0; ar <= arr.length-1; ar++) {
		last = arr[ar]
	}

	return last
}