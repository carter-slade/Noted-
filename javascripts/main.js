window.onbeforeunload = myfunction;
	window.onload = function(e){

		var stored = localStorage.getItem("notedtext");
		// console.log(stored);
		if(stored!="")
		{
			if (typeof(Storage) !== "undefined")
			{
				document.getElementById('notetext').innerHTML = stored;
			}
		}

	}
	function myfunction() {
		
		// console.log("key pressed");
		var text = document.getElementById('notetext').value;
		// console.log(text);
		if (typeof(Storage) !== "undefined")
		{
			localStorage.setItem("notedtext",text);
		}
		// body...
	}
