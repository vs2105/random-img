



var imagecontainer = document.getElementById("imagecontainer");

var imgarray=[
   " https://source.unsplash.com/random/?city",
   " https://source.unsplash.com/random/?nature",
   " https://source.unsplash.com/random/?flower",
   " https://source.unsplash.com/random/?birds",
   " https://source.unsplash.com/random/?food",
   " https://source.unsplash.com/random/?ship",
   " https://source.unsplash.com/random/?computer",
   " https://source.unsplash.com/random/?hotels",
   " https://source.unsplash.com/random/?plane",
   " https://source.unsplash.com/random/?game",
   " https://source.unsplash.com/random/?drinks",
   " https://source.unsplash.com/random/?mountains",
   " https://source.unsplash.com/random/?hollywood",
   " https://source.unsplash.com/random/?web",
   " https://source.unsplash.com/random/?galaxy",
   " https://source.unsplash.com/random/?radio",
   " https://source.unsplash.com/random/?cars",
   " https://source.unsplash.com/random/?Parachute"

]

 
 result="";
imgarray.forEach(function(img){
	result+=`
	    <div class="col-sm-4 mb-3">
		  <div class="card">
		    <div class="card-body">
			  <img src="${img}" class="img-fluid">
			</div>
		  </div>
		</div>
	`
})

imagecontainer.innerHTML=result;



