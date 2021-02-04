

<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>What to Tweet?</title>
  <meta name="description" content="Test Randomiser">
  <meta name="author" content="Michelle Penny">
  <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
  <link href="style.css" rel="stylesheet">

  <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
  <script   src="https://code.jquery.com/jquery-2.2.4.min.js"></script>


</head>

<body class="antialiased h-screen font-pt font-montserrat" >


<script>



  get_random = function (list) {
  return list[Math.floor((Math.random()*list.length))];} 

  async function callingFn() {
      try {
          const response = await fetch("https://api.airtable.com/v0/appX0fjMmpOpmE6H4/Grid%20view?api_key=keyegplsZoPbLiM2X", {
              method: "get",
              headers: {
                  "Content-Type": "application/json"
              }
          });
          const json = await response.json();

          /*json.then((value) => newprompts  = value)*/
          console.log("Success:", JSON.stringify(json));
          return json["records"]
      } catch (error) {
          console.error("Error:", error);
      }
  }
/*  callingFn().then((value) => var newprompts  = value)
  var newprompts = callingFn();
  console.log(newprompts[0])*/

  (async () => {

    
    var res = await callingFn();

    async function fetch_new_prompt(results) {
    
    /*console.log(res[1]["fields"]["Prompt"])*/
    const idea1 = document.getElementById('idea1'); 
    const picked_prompt = get_random(results);
    idea1.innerHTML = picked_prompt["fields"]["Prompt"];
    /*const infotext = document.getElementById('infotext');*/
    document.getElementById("tweetimage").src = picked_prompt["fields"]["Example 1"][0]["url"];
    document.getElementById("tweetsource").href = picked_prompt["fields"]["Example 1 Link"];
    }

    fetch_new_prompt(res)

    $(document).ready(function(){fetch_new_prompt(res)});

    $(document).ready(function(){
      $('#newprompt').click(function(){
         fetch_new_prompt(res);
      });
    });

    document.body.onkeyup = function(e){
      if(e.keyCode == 32 || e.key === ' '){
          fetch_new_prompt(res);
      }
    }
  })()


  


  




  



</script>

  



<div class="flex flex-col min-h-screen">

		<div class="mb-auto  px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
		  <div class="max-w-xl sm:mx-auto lg:max-w-2xl relative">
		    <div class="flex flex-col mb-16 sm:text-center sm:mb-0 ">
		      <a target="_blank" rel="noopener" href="https://twitter.com/intent/tweet" class="mb-6 sm:mx-auto">
		        <div class="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
	          <svg class="w-10 h-10 text-black" stroke="currentColor" viewBox="0 0 52 52">
	            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
	          </svg>
	        </div>
	      </a>
	      <div class="max-w-2xl mb-4 md:mx-auto sm:text-center lg:max-w-2xl md:mb-4">
	        <div  class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
	          
	          <span id="idea1" >it's on its way....</span>
	        </div>
	        
	      </div>
	      <div id="newprompt">
	        <a
	          href="#"
	          class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-black hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
	        >
	          New Prompt
	        </a>
	      </div>
	      <div id="newprompt" class="mt-4">
	        <a
	          href="#" id="examplebutton" onclick="showhide();"
	          class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-gray-900    focus:outline-none"
	        >
	          Show Example
	        </a>
	      </div>


	     <div class="shadow-lg  mt-6 mx-auto "><a target="_blank" id="tweetsource" class="hidden p-4" href=""><img id="tweetimage" src=""></a> </div>

	     
	    </div>

	    <!-- <div  class="hidden md:block shape purple-hero "></div>
	    <div  class="hidden md:block shape red-hero "></div> -->
	    
	  </div>
	</div>


	<div class="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">

	  <div class="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
	  	<div class="w-full sm:w-3/4 mb:4 mt-4">
		    
		</div>
	    <div class="w-full sm:w-1/4 mb:4 sm:ml-8">
	    	<div class="mx-auto">
	   
	</div>
	    <div>
	  </div>
	</div>
</div>

<script>

  function showhide() {


  var aelement = document.getElementById("tweetsource");
  aelement.classList.toggle('hidden'); 

  var examplebutton =  document.getElementById("examplebutton");
  if (examplebutton.innerHTML == "Hide Example") {
      examplebutton.innerHTML = "Show Example";
  } else {
      examplebutton.innerHTML = "Hide Example";
  }
  

  
}




</script>

<script>
for (var i = 0; i < 100; i++) {
  var star =
    '<div class="star m-0" style="animation: twinkle ' +
    (Math.random() * 5 + 5) +
    's linear ' +
    (Math.random() * 1 + 1) +
    's infinite; top: ' +
    Math.random() * $(window).height() +
    'px; left: ' +
    Math.random() * $(window).width() +
    'px;"></div>';
  $('.homescreen').append(star);
}

</script>



  

</body>
</html>

