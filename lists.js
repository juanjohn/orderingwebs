var state_cat=1;

function createList()
{
var catalog=[["chinese"],["japanese"],["mongolian"],["northi indian"],["sount indian"],["west india"],["drinks"]];
var catalogList=document.getElementById("list");
    for(var i=0;i<catalog.length;i++){
	var li=document.createElement("li");
	catalogList.appendChild(li);

	var div1=document.createElement("div");
	div1.id=i;
	div1.style.width=window.innerWidth/16+"px";
	div1.style.marginLeft="11px";
	div1.style.marginTop="50px";
	div1.setAttribute("onclick","menuPopulate(this.id)");
	li.appendChild(div1);
	
	var img=document.createElement("img");
	img.src="./image.png";
	img.className="liImg";
	img.alt=catalog[i][0];
	div1.appendChild(img);

	var divInfo=document.createElement("div");
	divInfo.className="liInfo";
	divInfo.innerHTML=catalog[i][0];
	div1.appendChild(divInfo);
    }
}

function menuPopulate(categoryId){
	state_cat=categoryId;
	
    var submenu=menu[0].HKB[categoryId].category_content;
    var menuList=document.getElementById("menu");
    menuList.innerHTML="";
	for(var i=0;i<submenu.length;i++){
	li=document.createElement("li");
	li.className="items";
	menuList.appendChild(li);

	div1=document.createElement("div");
	var id_name=submenu[i];
	div1.setAttribute("onclick","shift('"+id_name+"')");
	div1.className="innerDivLi";
	div1.id=id_name+"up";
	div1.innerHTML=jack[submenu[i]].name+"<br/>rs "+jack[submenu[i]].cost;
	li.appendChild(div1);

	input=document.createElement("input");
	input.setAttribute("onblur","shiftback('"+id_name+"')");
	input.className="quantity";
	if(list[id_name]!=undefined)input.value=list[id_name];
	input.type="text";
	input.id=id_name;
	li.appendChild(input);

    }
}
