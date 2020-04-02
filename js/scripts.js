

$(document).ready(function() {

  $("#piglatin").submit(function(event) {
      event.preventDefault();

      var input = $("#sentence").val();
      if(input === ''){
        alert("Please enter a number")
        return;
    }
      var output = converter(parseIn(input));
      
      $("#output").text(output);
  }); 
});


