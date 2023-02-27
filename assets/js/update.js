let runScripts =() =>
{
    let chart_bars = document.getElementById("chart-bars");
    let icons = document.getElementsByTagName("i");
    let cards = document.getElementsByClassName("card");
    let listOfP = document.getElementsByTagName("p")
    
    let elementP = listOfP[3];

    elementP.innerHTML="Dinero Actual..";
    let listOfH4=document.getElementsByTagName("h4");
    let elementH4=listOfH4[0];
    elementH4.innerHTML='$301k';



    let pageData = {
      root: 'Principal',
      title: 'Panel de control',
      color: 'text-dark',
      version: '3.2.0'
    }
    
    let { root, color, title, ...others } = pageData;
    
    let message = `
    <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
        <li class="breadcrumb-item text-sm"><a class="opacity-5 ${color}">${root}</a></li>
        <li class="breadcrumb-item text-sm ${color} active" aria-current="page">${title}</li>
    </ol>
    <h6 class="font-weight-bolder mb-0">${title}</h6>`; 
    
    let listOfNavs = document.getElementsByTagName('nav');
    let navElement = listOfNavs[1];
    navElement.innerHTML = message;  
    
    let data = [{
      title: 'Usuarios actuales',
      value: '3,200'
    },
    {
      title: 'Nuevos clientes',
      value: '4,215'
    },
    {
      title: 'Ventas',
      value: '$121,520'
    }]; 
    let [ users, clients, sales ] = data;
    let { title: title_users , value: value_users } = users;
    let { title: title_clients , value: value_clients } = clients;
    let { title: title_sales , value: value_sales } = sales;
    let message_users = `<p class="text-sm mb-0 text-capitalize">${title_users}</p><h4 class="mb-0">${value_users}</h4>`;
    let message_clients = `<p class="text-sm mb-0 text-capitalize">${title_clients}</p><h4 class="mb-0">${value_clients}</h4>`;
    let message_sales = `<p class="text-sm mb-0 text-capitalize">${title_sales}</p><h4 class="mb-0">${value_sales}</h4>`;             

    let listOfElements = document.getElementsByClassName('text-end pt-1');
    let [ , second, third, fourth ] = listOfElements;
    second.innerHTML = message_users;
    third.innerHTML = message_clients;
    fourth.innerHTML = message_sales; 
//
    let cambios = [
      {
        valor_previo: 250,
        valor_actual: 301,
        mensaje_tiempo: 'que la semana anterior'
      },
      {
        valor_previo: 3510,
        valor_actual: 3200,
        mensaje_tiempo: 'que la semana anterior'
      },
      {
        valor_previo: 3920,
        valor_actual: 4215,
        mensaje_tiempo: 'que ayer'
      },
      {
        valor_previo: 110200,
        valor_actual: 121520,
        mensaje_tiempo: 'que ayer'
      }
    ];
    let listOfValues = document.getElementsByClassName('card-footer p-3');
    let c=0;
    for(let cambio of cambios)
    {
      let { valor_previo: valor_previo , valor_actual: valor_actual, mensaje_tiempo:mensaje_tiempo } = cambio;
      let porcentaje_de_cambio = (valor_actual - valor_previo)*100/valor_previo;
      let clase_cambio=porcentaje_de_cambio>0?"text-success":"text-danger";     
      let message=`<p class="mb-0"><span class="text-sm ${clase_cambio} font-weight-bolder"> ${porcentaje_de_cambio.toFixed(2)}% </span> ${mensaje_tiempo} </p>`;
      debugger;
      listOfValues[c].innerHTML=message;      
      console.log(message);
      c=c+1;
    }
    /*
    let [ valor1, valor2, valor3, valor4 ] = cambios;
    let { valor_previo: valor_previo1 , valor_actual: valor_actual1, mensaje_tiempo:mensaje_tiempo1 } = valor1;
    let { valor_previo: valor_previo2 , valor_actual: valor_actual2, mensaje_tiempo:mensaje_tiempo2 } = valor2;
    let { valor_previo: valor_previo3 , valor_actual: valor_actual3, mensaje_tiempo:mensaje_tiempo3 } = valor3;
    let { valor_previo: valor_previo4 , valor_actual: valor_actual4, mensaje_tiempo:mensaje_tiempo4 } = valor4;
    let porcentaje_de_cambio1 = (valor_actual1 - valor_previo1)*100/valor_previo1;
    let porcentaje_de_cambio2 = (valor_actual2 - valor_previo2)*100/valor_previo2;
    let porcentaje_de_cambio3 = (valor_actual3 - valor_previo3)*100/valor_previo3;
    let porcentaje_de_cambio4 = (valor_actual4 - valor_previo4)*100/valor_previo4;

    let clase_cambio1=porcentaje_de_cambio1>0?"text-success":"text-danger";     
    let clase_cambio2=porcentaje_de_cambio2>0?"text-success":"text-danger";     
    let clase_cambio3=porcentaje_de_cambio3>0?"text-success":"text-danger";     
    let clase_cambio4=porcentaje_de_cambio4>0?"text-success":"text-danger";     

    let message_1=`<p class="mb-0"><span class="text-sm ${clase_cambio1} font-weight-bolder"> ${porcentaje_de_cambio1.toFixed(2)} </span> ${mensaje_tiempo1} </p>`;
    let message_2=`<p class="mb-0"><span class="text-sm ${clase_cambio2} font-weight-bolder"> ${porcentaje_de_cambio2.toFixed(2)} </span> ${mensaje_tiempo2} </p>`;
    let message_3=`<p class="mb-0"><span class="text-sm ${clase_cambio3} font-weight-bolder"> ${porcentaje_de_cambio3.toFixed(2)} </span> ${mensaje_tiempo3} </p>`;
    let message_4=`<p class="mb-0"><span class="text-sm ${clase_cambio4} font-weight-bolder"> ${porcentaje_de_cambio4.toFixed(2)} </span> ${mensaje_tiempo4} </p>`;


    debugger;
    let [obj1,obj2,obj3,obj4]=listOfValues;
    obj1.innerHTML = message_1;
    obj2.innerHTML = message_2;
    obj3.innerHTML = message_3; 
    obj4.innerHTML = message_4; 
*/

}
runScripts();