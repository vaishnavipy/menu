
                window.onload = function(){

                    let btns =   document.querySelectorAll("button");
                   btns.forEach(element => {
                       return element.addEventListener("click",myFunc)
                   });

                   function myFunc(){

                       if(this.id == "breakfast_btn"){

                          var items = document.querySelectorAll(".item");
                          items.forEach(function(elm){

                               if(elm.classList.contains("breakfast")){

                                   elm.style.display="flex"
                                   
                               }else{

                                   elm.style.display="none"

                               }


                          })


                       }

                       if(this.id == "lunch_btn"){

                       var items = document.querySelectorAll(".item");
                          items.forEach(function(elm){

                               if(elm.classList.contains("lunch")){

                                   elm.style.display ="flex";
                                   
                               }else{
                                   elm.style.display ="none";
                               }


                          })


                       }   
                       if(this.id == "shakes_btn"){

                          var items = document.querySelectorAll(".item");
                           items.forEach(function(elm){

                               if(elm.classList.contains("shakes")){

                                   elm.style.display ="flex";
                                   
                               }else{
                                   elm.style.display ="none";
                               }


                           })


                           }

                           if(this.id == "dinner_btn"){

                              var items = document.querySelectorAll(".item");
                               items.forEach(function(elm){

                                   if(elm.classList.contains("dinner")){

                                       elm.style.display ="flex";
                                       
                                   }else{
                                       elm.style.display ="none";

                                   }


                               })


                               }
                               if(this.id == "all_btn"){

                                   var items = document.querySelectorAll(".item");
                                   items.forEach(function(elm){

                                       

                                       elm.style.display ="flex";
                                           
                                       


                                   })


                                   }





                   }

               }


