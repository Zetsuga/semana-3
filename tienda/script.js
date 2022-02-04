// var myModal = document.getElementById('myModal')
// var myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus()
// });

jQuery(()=>{

    let carrito =[];
    let total = 0;

    $("#corazon1").on("click",()=>{
        if($("#corazon1").attr('class') == "far fa-heart fa-lg"){
            $("#corazon1").removeClass('far fa-heart fa-lg').addClass('fas fa-heart fa-lg');
        }else{
            $("#corazon1").removeClass('fas fa-heart fa-lg').addClass('far fa-heart fa-lg');
        }
        
    });

    $("#corazon2").on("click",()=>{
        if($("#corazon2").attr('class') == "far fa-heart fa-lg"){
            $("#corazon2").removeClass('far fa-heart fa-lg').addClass('fas fa-heart fa-lg');
        }else{
            $("#corazon2").removeClass('fas fa-heart fa-lg').addClass('far fa-heart fa-lg');
        }
        
    });

    $("#corazon3").on("click",()=>{
        if($("#corazon3").attr('class') == "far fa-heart fa-lg"){
            $("#corazon3").removeClass('far fa-heart fa-lg').addClass('fas fa-heart fa-lg');
        }else{
            $("#corazon3").removeClass('fas fa-heart fa-lg').addClass('far fa-heart fa-lg');
        }
        
    });

    $("#corazon4").on("click",()=>{
        if($("#corazon4").attr('class') == "far fa-heart fa-lg"){
            $("#corazon4").removeClass('far fa-heart fa-lg').addClass('fas fa-heart fa-lg');
        }else{
            $("#corazon4").removeClass('fas fa-heart fa-lg').addClass('far fa-heart fa-lg');
        }
        
    });

    $("#corazon5").on("click",()=>{
        if($("#corazon5").attr('class') == "far fa-heart fa-lg"){
            $("#corazon5").removeClass('far fa-heart fa-lg').addClass('fas fa-heart fa-lg');
        }else{
            $("#corazon5").removeClass('fas fa-heart fa-lg').addClass('far fa-heart fa-lg');
        }
        
    });

    $("#corazon6").on("click",()=>{
        if($("#corazon6").attr('class') == "far fa-heart fa-lg"){
            $("#corazon6").removeClass('far fa-heart fa-lg').addClass('fas fa-heart fa-lg');
        }else{
            $("#corazon6").removeClass('fas fa-heart fa-lg').addClass('far fa-heart fa-lg');
        }
        
    });

    $("#corazon7").on("click",()=>{
        if($("#corazon7").attr('class') == "far fa-heart fa-lg"){
            $("#corazon7").removeClass('far fa-heart fa-lg').addClass('fas fa-heart fa-lg');
        }else{
            $("#corazon7").removeClass('fas fa-heart fa-lg').addClass('far fa-heart fa-lg');
        }
        
    });

    $("#corazon8").on("click",()=>{
        if($("#corazon8").attr('class') == "far fa-heart fa-lg"){
            $("#corazon8").removeClass('far fa-heart fa-lg').addClass('fas fa-heart fa-lg');
        }else{
            $("#corazon8").removeClass('fas fa-heart fa-lg').addClass('far fa-heart fa-lg');
        }
        
    });

    $("#prenda1").on("click",()=>{
        carrito.push("#prenda1");
        total += parseFloat($("#prenda1Precio").text(),10);
        alert("Producto añadido");
    });

    $("#prenda2").on("click",()=>{
        carrito.push("#prenda2");
        total += parseFloat($("#prenda2Precio").text(),10);
        alert("Producto añadido");
    });

    $("#prenda3").on("click",()=>{
        carrito.push("#prenda3");
        total += parseFloat($("#prenda3Precio").text(),10);
        alert("Producto añadido");
    });

    $("#prenda4").on("click",()=>{
        carrito.push("#prenda4");
        console.log(carrito);
        total += parseFloat($("#prenda4Precio").text(),10);
        alert("Producto añadido");
    });

    $("#prenda5").on("click",()=>{
        carrito.push("#prenda5");
        total += parseFloat($("#prenda5Precio").text(),10);
        alert("Producto añadido");
    });

    $("#prenda6").on("click",()=>{
        carrito.push("#prenda6");
        total += parseFloat($("#prenda6Precio").text(),10);
        alert("Producto añadido");
    });

    $("#prenda7").on("click",()=>{
        carrito.push("#prenda7");
        total += parseFloat($("#prenda7Precio").text(),10);
        alert("Producto añadido");
    });

    $("#prenda8").on("click",()=>{
        carrito.push("#prenda8");
        console.log(carrito);
        total += parseFloat($("#prenda8Precio").text(),10);
        alert("Producto añadido");
    });

    $("#carrito").on("click",() => {
        let texto = "";
        let articulosComprados = $("#articulosComprados");
        if(carrito.length>0){
            texto+="<table class='carritoPrenda'>"
            for(prenda in carrito){
                let titulo = $((carrito[prenda]+"Titulo")).text();
                let precio = $((carrito[prenda]+"Precio")).text();
                texto += "<tr><td class='tablaTitulo'>"+titulo + "</td><td class='tablaPrecio'>" + precio + "</td></tr>"; 
            }
            texto+="</table>";

            texto +="<br><h4 class='totalCarrito'>Total del carrito <span class='totalPrecio'>"+ total.toFixed(2) + "€</span></h4>";
        }else{
            texto += "Tu carrito está vacio";
        }
        articulosComprados.html(texto);
        $("#carritoModal").modal("show");
    });
})


