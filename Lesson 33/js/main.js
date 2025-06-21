function validation(){
    var name = document.getElementById("name").value

    var valid_name_regex = /^[A-Za-z]+$/;


    var name = document.getElementById("age").value

    var valid_age_regex = /^[0-9]+$/;

    var city = document.getElementById("city");

    if(!(name.match(valid_name_regex)) || !(age.match(valid_name_regex)) || !(city==""))
        
      {
        if(!(name.match(valid_name_regex))){
            document.getElementById("name_error").style.visibility="visible"
             document.getElementById("name").style.borderBlockColor="red"
        }else{
          document.getElementById("name_error").style.visibility="hidden"
          document.getElementById("name").style.borderBlockColor="black"
        }
      


        if(!(age.match(valid_age_regex))){
            document.getElementById("age_error").style.visibility="visible"
             document.getElementById("age").style.borderBlockColor="red"
        }else{
          document.getElementById("age_error").style.visibility="hidden"
          document.getElementById("age").style.borderBlockColor="black"
        }
      


        if(!city==""){
            document.getElementById("city_error").style.visibility="visible"
             document.getElementById("city").style.borderBlockColor="red"
        }else{
          document.getElementById("city_error").style.visibility="hidden"
          document.getElementById("city").style.borderBlockColor="black"
        }
      return false;
      }
    else{
        document.getElementById("name_error").style.visibility="hidden"
          document.getElementById("name").style.borderBlockColor="black"
          document.getElementById("age_error").style.visibility="hidden"
          document.getElementById("age").style.borderBlockColor="black"
           document.getElementById("city_error").style.visibility="hidden"
          document.getElementById("city").style.borderBlockColor="black"
      }


}