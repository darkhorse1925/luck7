const generateBtn = document.querySelector('.generate')
const outputEl= document.querySelector('.output')
const tooltiptextDOM = document.querySelector('.tooltiptext')

const glyphSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$"
const lowercaseSet = "abcdefghijklmnopqrstuvwxyz"
const uppercaseSet= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numSet = "0123456789"
const specialSet = "!@#$"
const passLength = 12 // minimum length by default is 4
let pass = ''

generateBtn.addEventListener('click',()=>{
	passwordGenerator()
	outputEl.textContent = pass
	navigator.clipboard.writeText(pass)
	tooltiptextDOM.style.visibility = 'visible'
})


const passwordGenerator = () => {
	pass = ''
	let tempPass = []
	let manL = lowercaseSet.charAt(Math.floor(Math.random()*lowercaseSet.length))
	let manU = uppercaseSet.charAt(Math.floor(Math.random()*uppercaseSet.length))
	let manN = numSet.charAt(Math.floor(Math.random()*numSet.length))
	let manS = specialSet.charAt(Math.floor(Math.random()*specialSet.length))

	tempPass= [manL, manU, manN, manS]
	let fillerLength = passLength - 4

	for ( let i=0; i< fillerLength; i++ ) {
		tempPass.push( glyphSet.charAt(Math.floor(Math.random()*glyphSet.length)) )
	}

	let passPiece = ''

	function shuffler () {
		passPiece = (Math.floor(Math.random()*tempPass.length))
		pass += tempPass[passPiece]
		tempPass.splice(passPiece,1)
		if(tempPass.length > 0)
			shuffler()
	}
	shuffler()

	return pass
}

