let runScripts = ()=>{
    let chart_bars = document.getElementById("chart-bars");
    let icons = document.getElementsByTagName( "i");
    let cards = document.getElementsByClassName( "card");
    console.log( chart_bars );
    console.log("Existenn elementos: i " +icons.length);
    console.log(cards);
}

let modifyText = ()=>{
    let listOfP = document.getElementsByTagName("p");
    let elementP = listOfP[3];
    elementP.innerHTML = "Dinero Actual";

    let listOfH4 = document.getElementsByTagName("h4");
    let elementH4 =  listOfH4[0];
    elementH4.innerHTML ='$301k';
}

let updateData = ()=>{
    
  let data = [
    {
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

    let listOfElements = document.getElementsByClassName('text-end pt-1') 
    let [ , second, third, fourth ] = listOfElements;
    second.innerHTML = message_users;
    third.innerHTML = message_clients;
    fourth.innerHTML = message_sales;
    
}


let updatePercentages= ()=>{
    
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
        let  porcentajeCambio = (valor_previo,valor_actual)=>{
            let porcentaje =(valor_actual - valor_previo)*100/valor_previo;
            return porcentaje.toFixed(2);
        }
        let claseCambio = (porcentaje) =>{
            let clase_cambio = (porcentaje >0)? "text-success": "text-danger";
            return clase_cambio;
        }
        let set_perc = (porcentaje)=>{
            let perc = (porcentaje>0)?"+"+porcentaje:porcentaje;
            perc+="%";
            return perc;
        }
        for(let data of cambios){
            let perc = porcentajeCambio(data.valor_previo,data.valor_actual);
            data.porcentaje_de_cambio =  set_perc(perc);
            data.clase_cambio = claseCambio(perc);
        }
        
      
        let[cambioDinero, cambioActUsr, cambioNewClie, cambioVentas] = cambios;
        let { clase_cambio: clase_dinero , porcentaje_de_cambio: perc_dinero , mensaje_tiempo:  mens_dinero} = cambioDinero;
        let { clase_cambio: clase_actusr , porcentaje_de_cambio: perc_actusr , mensaje_tiempo : mens_actusr} = cambioActUsr;
        let { clase_cambio: clase_newclient , porcentaje_de_cambio: perc_newclient ,  mensaje_tiempo: mens_newclient } = cambioNewClie;
        let { clase_cambio: clase_sales , porcentaje_de_cambio: perc_sales ,  mensaje_tiempo: mens_sales } = cambioVentas;

        let listofElement2 = document.getElementsByClassName('card-footer p-3');
        let [firstLegend, secondLegend, thirdLegend, fourthLegend]=listofElement2;
        let message_cambioDinero = `<p class="mb-0"><span class="text-sm ${clase_dinero} font-weight-bolder"> ${perc_dinero} </span> ${mens_dinero} </p>`;
        let message_cambioUsr = `<p class="mb-0"><span class="text-sm ${clase_actusr} font-weight-bolder"> ${perc_actusr} </span> ${mens_actusr} </p>`;
        let message_cambioNewClie = `<p class="mb-0"><span class="text-sm ${clase_newclient} font-weight-bolder"> ${perc_newclient} </span> ${ mens_newclient} </p>`;
        let message_cambioVentas = `<p class="mb-0"><span class="text-sm ${clase_sales} font-weight-bolder"> ${perc_sales} </span> ${mens_sales} </p>`;

        firstLegend.innerHTML = message_cambioDinero;
        secondLegend.innerHTML = message_cambioUsr;
        thirdLegend.innerHTML = message_cambioNewClie;
        fourthLegend.innerHTML =  message_cambioVentas ;
}

runScripts();
modifyText();
updateData();
updatePercentages();