

fetch('http://localhost:9000/product/get-product', {
            method: 'GET',
        }).then((response) => response.json())
            .then((data) => {
                console.log(data)
                var bodydata = '';
                data?.data.forEach((element, index) => {
                    bodydata += `

                    <div class="cardfour">
                        <div class="cardimgdiv">    
                        <img src="laptop.jpg" class="cardimg">
                        </div>
                             Sr.No:${++index}<br>
                            Name:${element.name}<br>
                            <i class="fa fa-star-o starcolor"" aria-hidden="true"></i>
                            <i class="fa fa-star-o starcolor" aria-hidden="true"></i>
                            <i class="fa fa-star-o starcolor" aria-hidden="true"></i>
                            <i class="fa fa-star-o starcolor" aria-hidden="true"></i>
                            <i class="fa fa-star-o starcolor" aria-hidden="true"></i><br>
                            Price:${element.price}<br>
                            </div>`
                })
                document.getElementById("box").innerHTML = bodydata;

            });



