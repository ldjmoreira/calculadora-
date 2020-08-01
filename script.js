var var11 =0;
var var12 =0;
var var21=0;
var var22=0;
var resp=0;
flag=false;
operacao =''
estado =0;

function verificar(param){
    switch(estado) {
      

    case 0:
        function gerador(param){
            var12 = param
            var11 = var11*10+var12;
            }
        if(Number.isInteger(param)){
            gerador(param)
            window.document.getElementById('telanum').innerHTML=var11.toString();

        }else{
       operacao= param;  
       estado =1;   
       window.document.getElementById('telanum').innerHTML=param;
        }
    break;
    case 1:
        function gerador2(param){
            var21= param
            var22 = var22*10+var21;
        }
        function apagar(){
            var11=0;
            var22=0;
        }
        function apagar2(){
            var22=0;
        }
        if(Number.isInteger(param)){
            gerador2(param)
            window.document.getElementById('telanum').innerHTML=var22.toString();

        }else{
            if (param == '='){
                estado =0; 
                
                switch(operacao) {
                    case '*':
                     
                        resp = var11*var22;
                        window.document.getElementById('telanum').innerHTML=resp.toString();
                        apagar()
                        break;
                    case '+':

                        resp = var11+var22;
                        window.document.getElementById('telanum').innerHTML=resp.toString();
                        apagar()
                      // code block
                        break;
                    case '-':
                        // code block
                        resp = var11-var22;
                        window.document.getElementById('telanum').innerHTML=resp.toString();
                        apagar()
                        break;
                    case '/':
                            // code block
                            resp = var11/var22;
                            window.document.getElementById('telanum').innerHTML=resp.toString();
                            apagar()
                        break;
                    default:
                          // code block
                          window.document.getElementById('telanum').innerHTML='not a number';
                }

            }else {
                estado =1; 
                switch(operacao) {
                    case '*':
                     
                        var11 = var11*var22;
                        window.document.getElementById('telanum').innerHTML=var11.toString();
                        operacao = param;
                        apagar2()
                        break;
                    case '+':

                        var11 = var11+var22;
                        window.document.getElementById('telanum').innerHTML=var11.toString();
                        operacao = param;
                        apagar2()
                      // code block
                        break;
                    case '-':
                        // code block
                        var11 = var11-var22;
                        window.document.getElementById('telanum').innerHTML=var11.toString();
                        operacao = param;
                        apagar2()
                        break;
                    case '/':
                            // code block
                            var11 = var11/var22;
                            window.document.getElementById('telanum').innerHTML=var11.toString();
                            operacao = param;
                            apagar2()
                        break;
                    default:
                          // code block
                          window.document.getElementById('telanum').innerHTML='not a number';
                }

            }
  
        }

        
    break;
}
}

