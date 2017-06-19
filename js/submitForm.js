//Make sure everything is correct


$(document).ready(function(){

  $('.selectpicker').selectpicker();


  $('.order').click(function(){
    if ($('.fortifiedNum option:selected').val() == 0 && $('.breezerNum option:selected').val() == 0){
      console.log("need to enter a bike")
    }
  
  var data = {};
  data.numFortifiedBike = $('.fortifiedNum option:selected').val();
  data.numBreezerBike = $('.breezerNum option:selected').val();
  data.summer = false;
  if($('.summer').is(':checked')){
    data.summer = true;
  }

  data.startDate = $('#dateStart').val();
  data.endDate = $('#dateEnd').val();

  data.name = $('#name').val();
  data.email = $('#email').val();
  data.phone = $('#phone').val();
  data.age = $('#age').val();
  data.feet = $('#feet').val();
  data.inches = $('#inches').val();
  data.address = $('#street').val() + " "+ $('#city').val() +" "+ $('#zipcode').val();

  $.ajax({
    type: 'POST',
    data: JSON.stringify(data),
        contentType: 'application/json',
                url: '/endpoint',            
                success: function(data) {
                    console.log('success');
                    console.log(JSON.stringify(data));
                }
            });

  });

});