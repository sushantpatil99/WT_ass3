let url = "https://davids-restaurant.herokuapp.com/menu_items.json"

let menu_items = null;

$("document").ready(function(){
    $.get(url,function(data, status){
        if (status == "success"){
            menu_items = data.menu_items;
            for (const key in data.menu_items) {
                let opt = document.createElement("option");
                opt.textContent = data.menu_items[key].name;
                opt.value = key; 
                document.querySelector('#res_menu').appendChild(opt);
            }
        }
       
    });

    
document.querySelector("#res_menu").addEventListener("change",showdetails);

function showdetails(e){
    let index= e.target.value;
    
    if(menu_items != null){
        let x = menu_items[index];
        let pricesmall = x.price_small;
        
        if(pricesmall == null){
            pricesmall = "Not available";
        }
        let descrp = x.description;
        if(descrp == ""){
            descrp = "Description not available";
        }
        let smallpname = x.small_portion_name;
        if(smallpname == null)
        {
            smallpname = "Not Available";
        }
        let largepname = x.large_portion_name;
        if(largepname == null)
        {
            largepname = "Not Available";
        }
        document.querySelector("#menuname").textContent = x.name;
        document.querySelector("#id").textContent = x.id;
        document.querySelector("#sname").textContent = x.short_name;
        document.querySelector("#des").textContent = descrp;
        document.querySelector("#sprice").textContent = pricesmall;
        document.querySelector("#lprice").textContent = x.price_large;
        document.querySelector("#spname").textContent = smallpname;
        document.querySelector("#lpname").textContent = largepname;
    }
    document.getElementById("details").style.display = "block";
}


});
