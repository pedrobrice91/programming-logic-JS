function terminanConA(arreglo){
    arreglo.forEach(element => {
        console.log(element.endsWith('a'))
    });
}

terminanConA(['manzana', 'PaolA', 'pintura']);
console.log('------------')
terminanConA(['manzana', 'arroz']);