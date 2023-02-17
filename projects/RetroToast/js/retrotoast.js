class RetroToast 
{
	/**
	 *	The construct will store the properties and options of RetroToast and will execute it.
	 *
	 *	@param object, options (client options)
	 *	@return void
	 */
	constructor (options = {}) 
	{
		// Store default options
		this.default = {
			contentText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
			contentHeader: 'Warning',
			contentClose: '×',
			background: '#FFF', // White
			color: '#012D2D', // Black
			openDelay: 1000, // 1 Second
			closeDelay: 7000, // 7 Seconds
			animate: 'slideBottomRight',
			transition: '0.5s', // Css transition
			style: null,
			fixed: false
		}

		// Store client options
		this.options = options

		// Store RetroToast components (HTML elements)
		this.retroToastContainer
		this.retroToastMain
		this.retroToastHeader
		this.retroToastClose

		// Store available animations
		this.animation = [
			'slideBottomLeft', 'slideBottomRight', 'slideTopLeft', 'slideTopRight',
			'slideLeftTop', 'slideLeftBottom', 'slideRightTop', 'slideRightBottom',
			'fadeBottomLeft', 'fadeBottomRight', 'fadeTopLeft', 'fadeTopRight'
		]

		// Store available style
		this.style = ['blue', 'red', 'black', 'green', 'yellow', 'sky', 'gray']

		// Execute RetroToast
		this.retroToastExecute()
	}

	/**
	 *	Execute RetroToast
	 *
	 *	@return void
	 */
	retroToastExecute ()
	{
		this.retroToastAnimation()
		this.retroToastStyle()
	}

	/**
	 *	Get options from default and options object.
	 *
	 *	@param string, key (option key)
	 *	@return string
	 */
	retroToastGetOption (key)
	{
		let result

		// if client add options
		if (Object.hasOwn(this.options, key)) {
			// ture
			// get option from this.options
			result = this.options[key]
		} else {
			// fasle
			// get option from this.default
			result = this.default[key]
		}

		return result
	}

	/**
	 *	Create new RetroToast element (components) in the HTML document.
	 *
	 *	@return void
	 */
	retroToastCreate ()
	{
		// Create components
		this.retroToastContainer = document.createElement('div')
		this.retroToastMain = document.createElement('div')
		this.retroToastHeader = document.createElement('div')
		this.retroToastContent = document.createElement('div')
		this.retroToastClose = document.createElement('div')

		// Set class attribute to components
		this.retroToastContainer.setAttribute('class', 'retro-toast-container')
		this.retroToastMain.setAttribute('class', 'retro-toast-main')
		this.retroToastHeader.setAttribute('class', 'retro-toast-header')
		this.retroToastContent.setAttribute('class', 'retro-toast-content')
		this.retroToastClose.setAttribute('class', 'retro-toast-close')

		// Append components to the HTML body
		document.body.appendChild(this.retroToastContainer)	
		this.retroToastContainer.appendChild(this.retroToastMain)
		this.retroToastMain.appendChild(this.retroToastHeader)
		this.retroToastMain.appendChild(this.retroToastContent)
		this.retroToastMain.appendChild(this.retroToastClose)

		// Add HTML content inside components
		this.retroToastHeader.innerHTML = this.retroToastGetOption('contentHeader')
		this.retroToastContent.innerHTML = this.retroToastGetOption('contentText')
		this.retroToastClose.innerHTML = this.retroToastGetOption('contentClose')
	}

	/**
	 *	Execute animation.
	 *
	 *	@return void
	 */
	retroToastAnimation ()
	{
		// Check if the animate value is in the animation array
		if (this.animation.includes(this.retroToastGetOption('animate'))) {
			// ture
			// set selected animation
			this.retroToastSetAnimation()
		} else {
			// false
			// set default animation
			this.retroToastDefaultAnimation()
		}
	}

	/**
	 *	Set RetroToast animation.
	 *
	 *	@return void
	 */
	retroToastSetAnimation ()
	{
		let open_delay = this.retroToastGetOption('openDelay') // open
		let close_delay = open_delay+this.retroToastGetOption('closeDelay') // open+close
		let remove_delay = open_delay+close_delay+2000 // open+close+2000

		let animate = this.retroToastGetOption('animate')

		// Create RetroToast
		this.retroToastCreate()
		this.retroToastContainer.classList.add("retro-"+animate+"-ready") // add ready class
		this.retroToastContainer.style.transition = this.retroToastGetOption('transition') // add transition

		// Open RetroToast
		setTimeout(() => {
			this.retroToastContainer.classList.add("retro-"+animate+"-open")
		}, open_delay)

		// Close RetroToast by Time
		setTimeout(() => {
			if (this.retroToastGetOption('fixed') == false) {
				this.retroToastContainer.classList.add("retro-"+animate+"-close")
			}
		}, close_delay)

		// Close RetroToast by Click
		this.retroToastClose.addEventListener('click', () => {
			this.retroToastContainer.classList.add("retro-"+animate+"-close")
			// Remove RetroToast
			setTimeout(() => {
				this.retroToastContainer.remove()
			}, 1200)
		})

		// Remove RetroToast
		setTimeout(() => {
			if (this.retroToastGetOption('fixed') == false) {
				this.retroToastContainer.remove()
			}
		}, remove_delay)
	}

	/**
	 *	Set static animation. 
	 *	This will execute if the client does not specify an animation.
	 *
	 *	@return void
	 */
	retroToastDefaultAnimation ()
	{
		// Create RetroToast
		this.retroToastCreate()

		// Close RetroToast on click
		this.retroToastClose.addEventListener('click', () => {
			this.retroToastContainer.remove()
		})
	}

	/**
	 *	Execute style.
	 *
	 *	@return void
	 */
	retroToastStyle ()
	{
		// Check if the style value is in the style array
		if (this.style.includes(this.retroToastGetOption('style'))) {
			// ture
			// set selected style
			this.retroToastSetStyle()
		}
	}

	/**
	 *	Set style. 
	 *
	 *	@return void
	 */
	retroToastSetStyle ()
	{
		let style = this.retroToastGetOption('style')
		this.retroToastMain.classList.add("retro-"+style)
	}
}