
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
    var submenu=menu[0].HKB[categoryId].category_content;
    var menuList=document.getElementById("menu");
    for(var i=0;i<submenu.length;i++){
	alert(submenu[i].name);
	
    }
}
