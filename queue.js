function Queue() {
	"use strict"
	
	var first, last, item;

	function Item(fn) {
		this.fn = fn;
		this.next = void 0;
	}


	return {
		add : function(fn) {
			 item = new Item(fn);
			 
			 if(last) {
			 	last.next = item; 
			 }

			 else {
			 	first = item;
			 }

			 last = item;
			 item = void 0;


		},	

		drain : function() {
			var f = first;  

			while(f) {
				f.fn();
				f = f.next;
			}

			first = last = item = null;

		},

		getItems : function() {
			return first;
		}


	}

}