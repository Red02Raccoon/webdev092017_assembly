(function() {

    var box = document.querySelector(".box-effect.effect__click");



        var btn = document.querySelectorAll(".changeBox");

        btn.forEach(function(item){
            item.addEventListener( "click", function(e) {
                e.preventDefault();
    
                var c = box.classList;
                c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
    
                this.classList.toggle("hidden");
            })
        })


})();