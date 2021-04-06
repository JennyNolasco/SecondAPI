(async function(){
	const listaCompras = { 
		batata: 13, 
		sabao: 3,
		abobrinha: 5, 
		toalha: 1,
		cenoura: 8, 
		balas: 10,
		xuxu: 0 
	} 

console.log('------------> Desafio 1 <---------------')

const sleep = ms => {
	return new Promise(resolve => setTimeout(resolve, ms))
}

const pegarQtdItem = async (item) => { 
	await sleep(5000);
	return listaCompras[item] 
} 

const looping = async _ => {
	try {
		console.log('Começou')
		for (const key of Object.keys(listaCompras)) {
			const qtdItem = await pegarQtdItem(key)
			console.log(key, qtdItem);
		}
		console.log('Terminou')
	} catch( error) {
		console.log()
	}
}

looping()
})()