function confirm_del(pid){

  // let pid = document.getElementsByName('iReview')[0].getAttribute('id');
  // let pid = document.getElementsByName('iReview')[0].value;
  console.log(pid)
  console.log(document.getElementsByName('iReview'))
  console.log(document.getElementById("confirm_del_modal_outer"));
   document.getElementById('confirm_del_modal_outer').innerHTML +=`
    <!-- review modal -->
 
    <div id="confirm_del_modal" class="fixed  inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full ">
    <div class = "flex items-center justify-center h-screen" id="confirm_del_outer">
      <div id="inner" class="w-96 h-40 bg-white rounded">
        <div class="flex flex-row items-center"></div>
      <!-- x button -->
      <a class="cursor-pointer" id="confirm_del_x">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-gray-500 w-10 h-10">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </a>
   
      <div class="flex flex-row items-center mt-0 ml-6">
      <h1 class=" text-gray-800 text-lg">Are you sure you want to delete the product?</h1>
      </div>
      <div class="m-4"> 
   <form method="post" id="delete-prod">
      <input type="hidden" name="type" value="delete">
      <!-- <input type="hidden" name="id" value="{{prod.id}}"> -->
      <input type="hidden" name="pid" value='${parseInt(pid)}'>

        <button type="submit" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Yes</button>
</form>
     </div>
    </div>
    </div>
    </div>
    
    <!-- end review modal -->
    `;
  console.log(pid)
  console.log(document.getElementById("confirm_del_modal_outer"));

  // modal.style.display = 'block';

}
// auxiliary function that waits for element to load then execute
function waitForElement(elementId, callBack){
    window.setTimeout(function(){
      var element = document.getElementById(elementId);
      if(element){
        callBack(elementId, element);
      }else{
        waitForElement(elementId, callBack);
      }
    },500)
  }
  // end auxiliary
  
  // sets event listeners : should be called after all api have been loaded
  function set_events(){
    console.log('calling set_events()');

    if(current_page() == 'api'){
      let review_modal = document.getElementById("review_modal");
      let report_modal = document.getElementById("report_modal");
      let review_x = document.getElementById("review_x");         // x button
      let report_x = document.getElementById("report_x");         // x button
      let more = document.getElementById("more");                 // 3 dots

      review_modal.addEventListener("click", close_modal , false);
      report_modal.addEventListener("click", close_modal , false); 
      review_x.addEventListener("click", close , false);
      report_x.addEventListener("click", close , false);
      more.addEventListener("click", open_rep , false);  
    }
    else if(current_page() == 'home'){
      let review_modal = document.getElementById("review_modal");
      let review_x = document.getElementById("review_x");         // x button

      review_modal.addEventListener("click", close_modal , false);
      review_x.addEventListener("click", close , false);
  
    }
    else if(current_page() == 'my-prod'){
      
     let confirm_del = document.getElementById("confirm_del_outer");
      let confirm_del_x = document.getElementById("confirm_del_x");         // x button

      confirm_del.addEventListener("click", close_modal , false);
      confirm_del_x.addEventListener("click", close , false);
    }
    else{
      let review_modal = document.getElementById("review_modal");
      let review_x = document.getElementById("review_x");         // x button

      review_modal.addEventListener("click", close_modal , false);
      review_x.addEventListener("click", close , false);
  
    }


  }
  
  // opens modal when clicking 'review' / 'delete-prod' / 'report'
  function open_modal(modal_id,pid){
    console.log('calling open_modal(     )');

    if(modal_id == "confirm_del_modal"){
      confirm_del(pid)     

    }

    else if(modal_id == 'login_modal'){
      let modal = document.getElementById(modal_id); 

      modal.style.display = "block";
    }
    
    else{
      let modal = document.getElementById(modal_id); 

      modal.style.display = "block";

    }
  }

  // when more button is clicked toggle show report button
  function open_rep(){
    console.log('in open_rep()');
    let div = document.getElementById('show_report');

    // the actual toggle
    if(div.style.display == 'none'){
      div.style.display = 'block';
    }
    else{
      div.style.display='none';
    }

    // console.log(modal)

    // console.log(`dispaly : ${modal.style.display}`)
  }
  
  // closes modal when outer window is clicked
  function close_modal(){
    console.log('calling close_modal()');

    // if outer window is clicked
    if(current_page() == 'api'){
      if(event.target == document.getElementById("review_outer") || event.target == document.getElementById("report_outer")){
        close();
      } 
    }
    else if(current_page() == 'home'){
      if(event.target == document.getElementById("review_outer")){
        close();
      }
    }
    else if(current_page() == 'my-prod'){
      console.log('in my-prod');
      console.log(event.target);
      if(event.target == document.getElementById("confirm_del_outer")){
        close();
      }
    }
    else{
      if(event.target == document.getElementById("review_outer")){
        close();
      }
    }
    

       
  }
  
  // closes modal when x button is clicked
  function close(){
    console.log('calling close()');

    if(current_page() == 'api' ){
      review_modal = document.getElementById('review_modal');
      report_modal = document.getElementById('report_modal');
      show_report  = document.getElementById('show_report');
      more = document.getElementById('more');

      more.style.display = 'block';
      show_report.style.display  = 'none';
      review_modal.style.display = "none";
      report_modal.style.display = "none";
    }
    else if(current_page() == 'home'){
      review_modal = document.getElementById('review_modal');
      review_modal.style.display = "none";
    }
    else if(current_page() == 'my-prod'){
      confirm_del_modal = document.getElementById('confirm_del_modal');
      confirm_del_modal.style.display = "none";  
    }
    else{
      review_modal = document.getElementById('review_modal');
      report_modal = document.getElementById('report_modal');  
     // show_report  = document.getElementById('show_report');
      // more = document.getElementById('more');

      // more.style.display = 'block';
      // show_report.style.display  = 'none';
      review_modal.style.display = "none";
            
    }

  }
  
  // when everything loads
  function loaded(){
    console.log('calling loaded()');
  // when review is posted
  $('#post_review').submit(function(event) {
  
    event.preventDefault();
    let serialized = $(this).serialize();

    // csrf_token = $("#csrfmiddlewaretoken").val();

    $.ajax({
      type: 'POST',
      url : 'post_review',
      data: serialized,
      
      success : function(response){
          // reload page after data is added to the database
          console.log('post: review should be posted');
          window.location.reload();
      },
      error : function(response){
        console.log('post review failed')
        alert(response["responseJSON"]["error"])
      }
  
  
    })
  
  })


  // to delete a product 
  $('#delete_prod').submit(function(event) {
  
    event.preventDefault();
    let serialized = $(this).serialize();
  
    $.ajax({
  
      type: 'POST',
      url : 'delete_prod',
      data: serialized,
      
      success : function(response){
          // reload page after data is added to the database
          window.location.reload();
      },
      error : function(response){
        console.log('deleting product')
        alert(response["responseJSON"]["error"])
      }
  
  
    })
  
  })

  // when report is posted
  $('#post_report').submit(function(event) {

    event.preventDefault();
    let serialized = $(this).serialize();
    // let csrf = document.getElementsByName('csrf')[0].getAttribute('id');
    // serialized['csrfmiddlewaretoken'] = csrf;
    $.ajax({
  
      type: 'POST',
      url : 'post_report',
      data: serialized,
      
      success : function(response){
          // reload page after data is added to the database
          window.location.reload();
      },
      error : function(response){
        console.log('post report failed')
      }
  
    })

  })

}

// returns current page
function current_page(){
  if(document.getElementById('api')){
    return 'api';
  }
  else if(document.getElementById('home')){
    return 'home';
  }
  else if(document.getElementById('my-prod')){
    return 'my-prod';
  }
  
}
              // outer star
function set_star(s_id){

  id = parseInt(s_id[1]);

  console.log(`calling set_star(${s_id})`);

  for(let c = 1 ; c <= id ; c++){
    // set outer star
    s = document.getElementById(`s${c}`);
    s.value="on";

    // set inner star
    star = document.getElementById(`star${c}`);
    star.style.fill = 'currentColor';
  }

  for(let c = id+1 ; c<=5 ; c++){
    // set outer star
    s = document.getElementById(`s${c}`);
    s.value="off";

    // set inner star
    star = document.getElementById(`star${c}`);
    star.style.fill = 'none';
  }

  stars = document.getElementById('stars');
  stars.value = String(id);
}

  if(current_page() == 'api'){
    waitForElement('review_modal_outer', review_modal);
    waitForElement('report_modal_outer', report_modal);
    waitForElement('post_report', loaded);    
  //  loaded();
    waitForElement('post_report', set_events);
    // instead of calling set_events() alone
    // set_events();
  }
  else if(current_page() == 'home'){
    waitForElement('review_modal_outer', review_modal);    
  }
  else if(current_page() == 'my-prod'){
    // waitForElement('confirm_del_modal_outer', confirm_del);
    loaded();
    waitForElement('confirm_del_x', set_events);
    // set_events();
  }
  else{
    loaded();
    waitForElement('review_modal_outer', review_modal);
    waitForElement('review_modal', set_events);
    }

  //waitForElement('last' , set_events);   // when the last element in the api loads call set_events() function that sets event listeners
