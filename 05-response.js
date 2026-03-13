function terminanConA(arreglo){
  let todos = true;
  
  arreglo.forEach(element => {
        if(!(element.toLowerCase().endsWith('a'))){
         todos = false; 
        }
  });
      
  if(todos){
    console.log(true)
  }else
    console.log(false)

}

terminanConA(['manzana', 'PaolA', 'pintura']);
console.log('------------')
terminanConA(['manzana', 'arroz']);
