
async function ajax_cu(lid){
  
  return new Promise( (resolve, reject) => {
    $.ajax({
      type: 'GET',
      url : 'ajax_cu',
      data: {
        "lid" : lid
      },
      
      success : function(response){
        let cu = JSON.parse(response.cu)[0]
         console.log(cu.fields)
        // console.log('in success at resolve()');
        resolve([cu.fields.username, cu.fields.avatar]);
      },
      error : function(response){
        console.log('ajax_cu failed')
        reject(response)
      }

    })  // end ajax
  })  // end promise
} // ajax_cu

// renders the modal
function login_modal(){
  console.log('calling login modal')
  

  document.getElementById('review_modal_outer').innerHTML=`

  <!-- review modal -->
    <div id="login_modal" class="fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full ">
    <div class = "flex items-center justify-center h-screen" id="review_outer">
      
      <div id="inner" class="w-[60rem] h-[35rem] bg-white rounded">
    
        <!-- iReview logo and x button -->
        <div class="flex flex-row items-center">
        
          <!-- iReview logo -->
          <a class="navbar-brand mr-[43rem]" href="index.html">
            <svg width="222" height="120" viewBox="25 40 250 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="65.9826" cy="74.7414" r="29.7414" fill="#001B48"/>
            <rect x="53.5903" y="56.3154" width="4.33728" height="35.3179" rx="2.16864" transform="rotate(-27.7783 53.5903 56.3154)" fill="white"/>
            <rect x="71.7266" y="89.6865" width="4.14806" height="4.30049" rx="2.07403" transform="rotate(-27.7783 71.7266 89.6865)" fill="white"/>
            <path d="M130.948 69.828C130.948 71.34 130.54 72.708 129.724 73.932C128.908 75.156 127.72 76.056 126.16 76.632L131.668 87H122.74L118.348 77.964H115.396V87H107.44V62.232H122.596C124.372 62.232 125.884 62.58 127.132 63.276C128.404 63.948 129.352 64.872 129.976 66.048C130.624 67.2 130.948 68.46 130.948 69.828ZM122.848 70.152C122.848 69.504 122.632 68.964 122.2 68.532C121.768 68.1 121.24 67.884 120.616 67.884H115.396V72.456H120.616C121.24 72.456 121.768 72.24 122.2 71.808C122.632 71.352 122.848 70.8 122.848 70.152ZM143.87 67.56C147.35 67.56 150.002 68.376 151.826 70.008C153.674 71.64 154.598 74.136 154.598 77.496V78.72H140.342C140.342 80.088 140.642 81.12 141.242 81.816C141.866 82.512 142.838 82.86 144.158 82.86C145.358 82.86 146.234 82.608 146.786 82.104C147.362 81.6 147.65 80.928 147.65 80.088H154.598C154.598 82.392 153.722 84.192 151.97 85.488C150.218 86.784 147.662 87.432 144.302 87.432C140.774 87.432 138.038 86.616 136.094 84.984C134.15 83.328 133.178 80.832 133.178 77.496C133.178 74.232 134.126 71.76 136.022 70.08C137.918 68.4 140.534 67.56 143.87 67.56ZM144.158 72.132C141.902 72.132 140.642 73.2 140.378 75.336H147.362C147.362 74.352 147.074 73.572 146.498 72.996C145.946 72.42 145.166 72.132 144.158 72.132ZM162.144 87L154.944 67.992H162.648L166.14 79.836H166.392L169.884 67.992H176.94L169.668 87H162.144ZM179.364 65.76V60.9H186.528V65.76H179.364ZM179.364 87V67.992H186.528V87H179.364ZM200.928 67.56C204.408 67.56 207.06 68.376 208.884 70.008C210.732 71.64 211.656 74.136 211.656 77.496V78.72H197.4C197.4 80.088 197.7 81.12 198.3 81.816C198.924 82.512 199.896 82.86 201.216 82.86C202.416 82.86 203.292 82.608 203.844 82.104C204.42 81.6 204.708 80.928 204.708 80.088H211.656C211.656 82.392 210.78 84.192 209.028 85.488C207.276 86.784 204.72 87.432 201.36 87.432C197.832 87.432 195.096 86.616 193.152 84.984C191.208 83.328 190.236 80.832 190.236 77.496C190.236 74.232 191.184 71.76 193.08 70.08C194.976 68.4 197.592 67.56 200.928 67.56ZM201.216 72.132C198.96 72.132 197.7 73.2 197.436 75.336H204.42C204.42 74.352 204.132 73.572 203.556 72.996C203.004 72.42 202.224 72.132 201.216 72.132ZM232.968 87L230.016 76.416H229.872L226.884 87H219.9L212.952 67.992H220.656L223.536 79.224H223.788L226.776 67.992H233.904L236.784 79.224H237.036L239.952 67.992H246.936L239.952 87H232.968Z" fill="#001B48"/>
            </svg>
          </a>
          
        <!-- x button -->
        <a class="cursor-pointer" id="review_x">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-gray-500 w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </a>
    
      </div>
    
        
        <!-- user name and image -->
      <div class="flex flex-row items-center mt-0 ml-6">
        
    
        <!-- user image -->
        <div class="shrink-0">
            <a href="">
              <img class="h-20 w-20 rounded-full" src="https://stackdiary.com/140x100.png" alt="Ekim Kael" style="cursor: auto;">
            </a>
        </div>
        
        <!-- user name-->
        <div class="ml-3">
            <p class="text-xl font-medium text-skin-inverted">          
                <a href="https://stackdiary.com" class="hover:underline" style="cursor: auto;">
                              John Doe
                </a>      
            </p>
        </div>
      </div>
    
      <form method = 'post' id='post_review'>
        <span class="flex items-center ml-6 mt-4">
          <!-- stars -->
            <input type="hidden" id="s1" name="s1" value="off">
            <svg fill="none" stroke="currentColor" id="star1" onclick="return set_star('s1')" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 text-blue-500 hover:fill-current" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            
            <input type="hidden" id="s2" name="s2" value="off">
            <svg fill="none" stroke="currentColor" id="star2" onclick="return set_star('s2')" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 text-blue-500 hover:fill-current" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
    
            <input type="hidden" id="s3" name="s3" value="off">
            <svg fill="none" stroke="currentColor" id="star3" onclick="return set_star('s3')" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 text-blue-500 hover:fill-current" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
    
            <input type="hidden" id="s4" name="s4" value="off">
            <svg fill="none" stroke="currentColor" id="star4" onclick="return set_star('s4')" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 text-blue-500 hover:fill-current" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
    
            <input type="hidden" id="s5" name="s5" value="off">
            <svg fill="none" stroke="currentColor" id="star5" onclick="return set_star('s5')" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 text-blue-500 hover:fill-current" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <input type="hidden" id="stars" name="stars" value="0">
          </span>
  
          <!-- end stars -->
    
        <!-- review title + description -->
        <input required type="text" name="title" class="form-input rounded-md ml-6 mt-3 w-[20rem]" placeholder="review title" id="title" maxlength="255" required="">
        <textarea required name="description" class="ml-6 w-[56rem] h-[10rem] form-input rounded-lg overflow-auto" placeholder="More detailed reviews are more trusted" id="description" maxlength="255" required=""></textarea>
    
        <input type="hidden" name="pid" value='${parseInt(pid)}'>
    
        <div class="w-1/2 ml-[50rem]">
          <button type="submit" class="btn px-3 py-2 bg-sky-500">Post Review</button>
        </div>
      </form>
    
    </div>
      
    
    </div>
    </div>
    
    
    <!-- end review modal -->
    `;
  
}


function review_modal(){
    console.log('calling review_modal()');
    // gets pid to set <input type="hidden" value="${pid}" for the form
    let pid = document.getElementsByName('iReview')[0].getAttribute('id');
    let upload = document.getElementById('upload').getAttribute('value');
    console.log('upload is '+upload)
    let logo = ``;
    let theme = document.getElementById('theme').getAttribute('value');
    if(theme == 'dark'){
      bg_color = 'rgb(1 1 1)';
      review_bg_color = "bg-gray-900"
      review_title_color = "text-gray-400"
      review_description_color = "text-blue-500"
      text_color = 'text-gray-500';
      filter_color = 'text-gray-500';
      textarea_color = "bg-gray-800";
      daytime_color = "text-gray-400";
      ir_logo = `<svg width="222" height="120" viewBox="0 0 1189 507" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="223.021" cy="252.626" r="100.526" fill="white"/>
      <rect x="181.135" y="190.347" width="14.66" height="119.374" rx="7.33001" transform="rotate(-27.7783 181.135 190.347)" fill="#001B48"/>
      <rect x="242.436" y="303.14" width="14.0204" height="14.5357" rx="7.01021" transform="rotate(-27.7783 242.436 303.14)" fill="#001B48"/>
      <path d="M434.72 234.944C434.72 240.32 433.269 245.184 430.368 249.536C427.466 253.888 423.242 257.088 417.696 259.136L437.28 296H405.536L389.92 263.872H379.424V296H351.136V207.936H405.024C411.338 207.936 416.714 209.173 421.152 211.648C425.674 214.037 429.045 217.323 431.264 221.504C433.568 225.6 434.72 230.08 434.72 234.944ZM405.92 236.096C405.92 233.792 405.152 231.872 403.616 230.336C402.08 228.8 400.202 228.032 397.984 228.032H379.424V244.288H397.984C400.202 244.288 402.08 243.52 403.616 241.984C405.152 240.363 405.92 238.4 405.92 236.096ZM480.663 226.88C493.036 226.88 502.465 229.781 508.951 235.584C515.521 241.387 518.807 250.261 518.807 262.208V266.56H468.119C468.119 271.424 469.185 275.093 471.319 277.568C473.537 280.043 476.993 281.28 481.687 281.28C485.953 281.28 489.068 280.384 491.031 278.592C493.079 276.8 494.103 274.411 494.103 271.424H518.807C518.807 279.616 515.692 286.016 509.463 290.624C503.233 295.232 494.145 297.536 482.199 297.536C469.655 297.536 459.927 294.635 453.015 288.832C446.103 282.944 442.647 274.069 442.647 262.208C442.647 250.603 446.017 241.813 452.759 235.84C459.5 229.867 468.801 226.88 480.663 226.88ZM481.687 243.136C473.665 243.136 469.185 246.933 468.247 254.528H493.079C493.079 251.029 492.055 248.256 490.007 246.208C488.044 244.16 485.271 243.136 481.687 243.136ZM545.639 296L520.039 228.416H547.431L559.847 270.528H560.743L573.159 228.416H598.247L572.391 296H545.639ZM606.865 220.48V203.2H632.337V220.48H606.865ZM606.865 296V228.416H632.337V296H606.865ZM683.538 226.88C695.911 226.88 705.34 229.781 711.826 235.584C718.396 241.387 721.682 250.261 721.682 262.208V266.56H670.994C670.994 271.424 672.06 275.093 674.194 277.568C676.412 280.043 679.868 281.28 684.562 281.28C688.828 281.28 691.943 280.384 693.906 278.592C695.954 276.8 696.978 274.411 696.978 271.424H721.682C721.682 279.616 718.567 286.016 712.338 290.624C706.108 295.232 697.02 297.536 685.074 297.536C672.53 297.536 662.802 294.635 655.89 288.832C648.978 282.944 645.522 274.069 645.522 262.208C645.522 250.603 648.892 241.813 655.634 235.84C662.375 229.867 671.676 226.88 683.538 226.88ZM684.562 243.136C676.54 243.136 672.06 246.933 671.122 254.528H695.954C695.954 251.029 694.93 248.256 692.882 246.208C690.919 244.16 688.146 243.136 684.562 243.136ZM797.457 296L786.961 258.368H786.449L775.825 296H750.993L726.289 228.416H753.681L763.921 268.352H764.817L775.441 228.416H800.785L811.025 268.352H811.921L822.289 228.416H847.121L822.289 296H797.457Z" fill="white"/>
      </svg>`
    }
    else{
      bg_color = 'rgb(245 245 245)';
      review_bg_color = "bg-white"
      review_title_color = "text-white"
      review_description_color = "text-black"
      text_color = 'text-black';
      filter_color = 'text-black';
      textarea_color = "bg-white";
      daytime_color = "text-gray-400"
      ir_logo = `<svg width="222" height="120" viewBox="25 40 250 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="65.9826" cy="74.7414" r="29.7414" fill="#001B48"/>
      <rect x="53.5903" y="56.3154" width="4.33728" height="35.3179" rx="2.16864" transform="rotate(-27.7783 53.5903 56.3154)" fill="white"/>
      <rect x="71.7266" y="89.6865" width="4.14806" height="4.30049" rx="2.07403" transform="rotate(-27.7783 71.7266 89.6865)" fill="white"/>
      <path d="M130.948 69.828C130.948 71.34 130.54 72.708 129.724 73.932C128.908 75.156 127.72 76.056 126.16 76.632L131.668 87H122.74L118.348 77.964H115.396V87H107.44V62.232H122.596C124.372 62.232 125.884 62.58 127.132 63.276C128.404 63.948 129.352 64.872 129.976 66.048C130.624 67.2 130.948 68.46 130.948 69.828ZM122.848 70.152C122.848 69.504 122.632 68.964 122.2 68.532C121.768 68.1 121.24 67.884 120.616 67.884H115.396V72.456H120.616C121.24 72.456 121.768 72.24 122.2 71.808C122.632 71.352 122.848 70.8 122.848 70.152ZM143.87 67.56C147.35 67.56 150.002 68.376 151.826 70.008C153.674 71.64 154.598 74.136 154.598 77.496V78.72H140.342C140.342 80.088 140.642 81.12 141.242 81.816C141.866 82.512 142.838 82.86 144.158 82.86C145.358 82.86 146.234 82.608 146.786 82.104C147.362 81.6 147.65 80.928 147.65 80.088H154.598C154.598 82.392 153.722 84.192 151.97 85.488C150.218 86.784 147.662 87.432 144.302 87.432C140.774 87.432 138.038 86.616 136.094 84.984C134.15 83.328 133.178 80.832 133.178 77.496C133.178 74.232 134.126 71.76 136.022 70.08C137.918 68.4 140.534 67.56 143.87 67.56ZM144.158 72.132C141.902 72.132 140.642 73.2 140.378 75.336H147.362C147.362 74.352 147.074 73.572 146.498 72.996C145.946 72.42 145.166 72.132 144.158 72.132ZM162.144 87L154.944 67.992H162.648L166.14 79.836H166.392L169.884 67.992H176.94L169.668 87H162.144ZM179.364 65.76V60.9H186.528V65.76H179.364ZM179.364 87V67.992H186.528V87H179.364ZM200.928 67.56C204.408 67.56 207.06 68.376 208.884 70.008C210.732 71.64 211.656 74.136 211.656 77.496V78.72H197.4C197.4 80.088 197.7 81.12 198.3 81.816C198.924 82.512 199.896 82.86 201.216 82.86C202.416 82.86 203.292 82.608 203.844 82.104C204.42 81.6 204.708 80.928 204.708 80.088H211.656C211.656 82.392 210.78 84.192 209.028 85.488C207.276 86.784 204.72 87.432 201.36 87.432C197.832 87.432 195.096 86.616 193.152 84.984C191.208 83.328 190.236 80.832 190.236 77.496C190.236 74.232 191.184 71.76 193.08 70.08C194.976 68.4 197.592 67.56 200.928 67.56ZM201.216 72.132C198.96 72.132 197.7 73.2 197.436 75.336H204.42C204.42 74.352 204.132 73.572 203.556 72.996C203.004 72.42 202.224 72.132 201.216 72.132ZM232.968 87L230.016 76.416H229.872L226.884 87H219.9L212.952 67.992H220.656L223.536 79.224H223.788L226.776 67.992H233.904L236.784 79.224H237.036L239.952 67.992H246.936L239.952 87H232.968Z" fill="#001B48"/>
      </svg>`
    }
    let review_modal =document.getElementById('review_modal_outer')
    let text = "";
    text +=`
    <!-- review modal -->
    <div id="review_modal" class="fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto w-full ">
    <div class = "flex items-center justify-center" id="review_outer">
      
      <div id="inner" class="w-[60rem] h-[40rem] ${review_bg_color} border-[1px] border-blue-600 rounded">
    
        <!-- iReview logo and x button -->
        <div class="flex flex-row items-center">
        
          <!-- iReview logo -->
          <a class="navbar-brand mr-[43rem]" href="index.html">
            ${ir_logo}
          </a>
          
        <!-- x button -->
        <a class="cursor-pointer" id="review_x">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-gray-500 w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </a>
    
      </div>
    
        
        <!-- user name and image -->
      <div class="flex flex-row items-center mt-0 ml-6">
        
    
        <!-- user image -->
        <div class="shrink-0">
            <a href="">
              <img class="h-20 w-20 rounded-full" src="https://stackdiary.com/140x100.png" alt="Ekim Kael" style="cursor: auto;">
            </a>
        </div>
        
        <!-- user name-->
        <div class="ml-3">
            <p class="text-xl font-medium text-skin-inverted">          
                <a href="https://stackdiary.com" class="hover:underline" style="cursor: auto;">
                              John Doe
                </a>      
            </p>
        </div>
      </div>

      
    
      <form method = 'post' id='post_review'>
      
        <span class="flex items-center ml-6 mt-4">
          <!-- stars -->
            <input type="hidden" id="s1" name="s1" value="off">
            <svg fill="none" stroke="currentColor" id="star1" onclick="return set_star('s1')" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 text-blue-500 hover:fill-current" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            
            <input type="hidden" id="s2" name="s2" value="off">
            <svg fill="none" stroke="currentColor" id="star2" onclick="return set_star('s2')" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 text-blue-500 hover:fill-current" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
    
            <input type="hidden" id="s3" name="s3" value="off">
            <svg fill="none" stroke="currentColor" id="star3" onclick="return set_star('s3')" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 text-blue-500 hover:fill-current" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
    
            <input type="hidden" id="s4" name="s4" value="off">
            <svg fill="none" stroke="currentColor" id="star4" onclick="return set_star('s4')" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 text-blue-500 hover:fill-current" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
    
            <input type="hidden" id="s5" name="s5" value="off">
            <svg fill="none" stroke="currentColor" id="star5" onclick="return set_star('s5')" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 text-blue-500 hover:fill-current" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <input type="hidden" id="stars" name="stars" value="0">
          </span>
  
          <!-- end stars -->
    
        <!-- review title + description -->
        <input type="text" name="title" class="form-input  ${textarea_color} ${text_color} rounded-md ml-6 mt-3 w-[20rem]" placeholder="review title" id="title" maxlength="255" required="">
        <textarea name="description" class="ml-6 w-[56rem] ${textarea_color} ${review_description_color} h-[10rem] form-input rounded-lg overflow-auto" placeholder="More detailed reviews are more trusted" id="description" maxlength="255" required=""></textarea>
    
        <input type="hidden" name="pid" value='${parseInt(pid)}'>
    
`;
    if (upload == "true"){
      text +=`
      <input type="file" name="image"  class="ml-6 p-4"
      style="
      border-radius: 10px;
      border: 1px solid #ccc;
      display: inline-block;
      padding: 6px 12px;
      cursor: pointer;"
      >
    `
    }

      text += `
        <div class="w-1/2 ml-[50rem]">
          <button type="submit" class="btn px-3 py-2 bg-sky-500">Post Review</button>
        </div>

       
        
       
      </form>
    
    </div>
      
    
    </div>
    </div>
    
    
    <!-- end review modal -->
    `;

    review_modal.innerHTML = text;
}



// renders the modal
async function report_modal(){
    console.log('calling report_modal()');
    
    // gets pid or lid to set <input type="hidden" value="${pid or lid}" for the form
    let pid = document.getElementsByName('pid')[0].getAttribute('id');
    let lid = document.getElementsByName('lid')[0].getAttribute('id');
    let cu  = await ajax_cu(lid)
    let cu_username = cu[0]
    let cu_avatar   = cu[1]

    let logo = ``;
    let theme = document.getElementById('theme').getAttribute('value');
    if(theme == 'dark'){
      bg_color = 'rgb(1 1 1)';
      review_bg_color = "bg-gray-900"
      review_title_color = "text-gray-400"
      review_description_color = "text-gray-400"
      text_color = 'text-gray-500';
      filter_color = 'text-gray-500';
      textarea_color = "bg-gray-800";
      daytime_color = "text-gray-400";
      ir_logo = `<svg width="222" height="120" viewBox="0 0 1189 507" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="223.021" cy="252.626" r="100.526" fill="white"/>
      <rect x="181.135" y="190.347" width="14.66" height="119.374" rx="7.33001" transform="rotate(-27.7783 181.135 190.347)" fill="#001B48"/>
      <rect x="242.436" y="303.14" width="14.0204" height="14.5357" rx="7.01021" transform="rotate(-27.7783 242.436 303.14)" fill="#001B48"/>
      <path d="M434.72 234.944C434.72 240.32 433.269 245.184 430.368 249.536C427.466 253.888 423.242 257.088 417.696 259.136L437.28 296H405.536L389.92 263.872H379.424V296H351.136V207.936H405.024C411.338 207.936 416.714 209.173 421.152 211.648C425.674 214.037 429.045 217.323 431.264 221.504C433.568 225.6 434.72 230.08 434.72 234.944ZM405.92 236.096C405.92 233.792 405.152 231.872 403.616 230.336C402.08 228.8 400.202 228.032 397.984 228.032H379.424V244.288H397.984C400.202 244.288 402.08 243.52 403.616 241.984C405.152 240.363 405.92 238.4 405.92 236.096ZM480.663 226.88C493.036 226.88 502.465 229.781 508.951 235.584C515.521 241.387 518.807 250.261 518.807 262.208V266.56H468.119C468.119 271.424 469.185 275.093 471.319 277.568C473.537 280.043 476.993 281.28 481.687 281.28C485.953 281.28 489.068 280.384 491.031 278.592C493.079 276.8 494.103 274.411 494.103 271.424H518.807C518.807 279.616 515.692 286.016 509.463 290.624C503.233 295.232 494.145 297.536 482.199 297.536C469.655 297.536 459.927 294.635 453.015 288.832C446.103 282.944 442.647 274.069 442.647 262.208C442.647 250.603 446.017 241.813 452.759 235.84C459.5 229.867 468.801 226.88 480.663 226.88ZM481.687 243.136C473.665 243.136 469.185 246.933 468.247 254.528H493.079C493.079 251.029 492.055 248.256 490.007 246.208C488.044 244.16 485.271 243.136 481.687 243.136ZM545.639 296L520.039 228.416H547.431L559.847 270.528H560.743L573.159 228.416H598.247L572.391 296H545.639ZM606.865 220.48V203.2H632.337V220.48H606.865ZM606.865 296V228.416H632.337V296H606.865ZM683.538 226.88C695.911 226.88 705.34 229.781 711.826 235.584C718.396 241.387 721.682 250.261 721.682 262.208V266.56H670.994C670.994 271.424 672.06 275.093 674.194 277.568C676.412 280.043 679.868 281.28 684.562 281.28C688.828 281.28 691.943 280.384 693.906 278.592C695.954 276.8 696.978 274.411 696.978 271.424H721.682C721.682 279.616 718.567 286.016 712.338 290.624C706.108 295.232 697.02 297.536 685.074 297.536C672.53 297.536 662.802 294.635 655.89 288.832C648.978 282.944 645.522 274.069 645.522 262.208C645.522 250.603 648.892 241.813 655.634 235.84C662.375 229.867 671.676 226.88 683.538 226.88ZM684.562 243.136C676.54 243.136 672.06 246.933 671.122 254.528H695.954C695.954 251.029 694.93 248.256 692.882 246.208C690.919 244.16 688.146 243.136 684.562 243.136ZM797.457 296L786.961 258.368H786.449L775.825 296H750.993L726.289 228.416H753.681L763.921 268.352H764.817L775.441 228.416H800.785L811.025 268.352H811.921L822.289 228.416H847.121L822.289 296H797.457Z" fill="white"/>
      </svg>`
    }
    else{
      bg_color = 'rgb(245 245 245)';
      review_bg_color = "bg-white"
      review_title_color = "text-white"
      review_description_color = "text-gray-400"
      text_color = 'text-black';
      filter_color = 'text-black';
      textarea_color = "bg-white";
      daytime_color = "text-gray-400"
      ir_logo = `<svg width="222" height="120" viewBox="25 40 250 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="65.9826" cy="74.7414" r="29.7414" fill="#001B48"/>
      <rect x="53.5903" y="56.3154" width="4.33728" height="35.3179" rx="2.16864" transform="rotate(-27.7783 53.5903 56.3154)" fill="white"/>
      <rect x="71.7266" y="89.6865" width="4.14806" height="4.30049" rx="2.07403" transform="rotate(-27.7783 71.7266 89.6865)" fill="white"/>
      <path d="M130.948 69.828C130.948 71.34 130.54 72.708 129.724 73.932C128.908 75.156 127.72 76.056 126.16 76.632L131.668 87H122.74L118.348 77.964H115.396V87H107.44V62.232H122.596C124.372 62.232 125.884 62.58 127.132 63.276C128.404 63.948 129.352 64.872 129.976 66.048C130.624 67.2 130.948 68.46 130.948 69.828ZM122.848 70.152C122.848 69.504 122.632 68.964 122.2 68.532C121.768 68.1 121.24 67.884 120.616 67.884H115.396V72.456H120.616C121.24 72.456 121.768 72.24 122.2 71.808C122.632 71.352 122.848 70.8 122.848 70.152ZM143.87 67.56C147.35 67.56 150.002 68.376 151.826 70.008C153.674 71.64 154.598 74.136 154.598 77.496V78.72H140.342C140.342 80.088 140.642 81.12 141.242 81.816C141.866 82.512 142.838 82.86 144.158 82.86C145.358 82.86 146.234 82.608 146.786 82.104C147.362 81.6 147.65 80.928 147.65 80.088H154.598C154.598 82.392 153.722 84.192 151.97 85.488C150.218 86.784 147.662 87.432 144.302 87.432C140.774 87.432 138.038 86.616 136.094 84.984C134.15 83.328 133.178 80.832 133.178 77.496C133.178 74.232 134.126 71.76 136.022 70.08C137.918 68.4 140.534 67.56 143.87 67.56ZM144.158 72.132C141.902 72.132 140.642 73.2 140.378 75.336H147.362C147.362 74.352 147.074 73.572 146.498 72.996C145.946 72.42 145.166 72.132 144.158 72.132ZM162.144 87L154.944 67.992H162.648L166.14 79.836H166.392L169.884 67.992H176.94L169.668 87H162.144ZM179.364 65.76V60.9H186.528V65.76H179.364ZM179.364 87V67.992H186.528V87H179.364ZM200.928 67.56C204.408 67.56 207.06 68.376 208.884 70.008C210.732 71.64 211.656 74.136 211.656 77.496V78.72H197.4C197.4 80.088 197.7 81.12 198.3 81.816C198.924 82.512 199.896 82.86 201.216 82.86C202.416 82.86 203.292 82.608 203.844 82.104C204.42 81.6 204.708 80.928 204.708 80.088H211.656C211.656 82.392 210.78 84.192 209.028 85.488C207.276 86.784 204.72 87.432 201.36 87.432C197.832 87.432 195.096 86.616 193.152 84.984C191.208 83.328 190.236 80.832 190.236 77.496C190.236 74.232 191.184 71.76 193.08 70.08C194.976 68.4 197.592 67.56 200.928 67.56ZM201.216 72.132C198.96 72.132 197.7 73.2 197.436 75.336H204.42C204.42 74.352 204.132 73.572 203.556 72.996C203.004 72.42 202.224 72.132 201.216 72.132ZM232.968 87L230.016 76.416H229.872L226.884 87H219.9L212.952 67.992H220.656L223.536 79.224H223.788L226.776 67.992H233.904L236.784 79.224H237.036L239.952 67.992H246.936L239.952 87H232.968Z" fill="#001B48"/>
      </svg>`
    }

    document.getElementById('report_modal_outer').innerHTML += `
    <!-- report modal -->
    <div id="report_modal" class="fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full ">
    <div class = "flex items-center justify-center h-screen" id="report_outer">
      
      <div id="inner" class="w-[60rem] h-[19rem] ${review_bg_color} border-[1px] border-blue-500 rounded">
    
        <!-- iReview logo and x button -->
        <div class="flex flex-row items-center">
        
          <!-- iReview logo -->
          <a class="navbar-brand mr-[43rem]" href="index.html">
            ${ir_logo}
          </a>
          
        <!-- x button -->
        <a class="cursor-pointer" id="report_x">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-gray-500 w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </a>
    
      </div>
    
        
        <!-- bo name and image -->
      <div class="flex flex-row items-center mt-0 ml-6">
        
        <!-- bo image -->
        <div class="shrink-0">
            <a href="">
              <img class="h-20 w-20 rounded-full" src="${cu_avatar}" alt="Ekim Kael" style="cursor: auto;">
            </a>
        </div>
        
        <!-- bo name-->
        <div class="ml-3">
            <p class="text-xl font-medium text-skin-inverted">          
                <a href="https://stackdiary.com" class="hover:underline" style="cursor: auto;">
                              ${cu_username}
                </a>      
            </p>
        </div>
      </div>
    
      <form method = 'post' id='post_report' class='mt-5'>
    
        <!-- reason and submit -->
        <div class="flex items-center">
    
          <!-- report reason -->
          <input required type="text" name="reason" class="form-input ${textarea_color} ${text_color} rounded-md ml-6 mt-3 w-[30rem]" placeholder="Specify a valid reason" id="title" maxlength="255" required="">

          <input type="hidden" name="lid" value='${parseInt(lid)}'>
          <input type="hidden" name="pid" value='${parseInt(pid)}'>
    
          <div class="w-1/2" id='last'>
            <button type="submit" class="btn px-3 py-2 w-28 ml-[21rem] bg-red-500 hover:bg-red-400">Report</button>
          </div>
        </div>
      </form>
    
    </div>
      
    
    </div>
    </div>
    
    <!-- end report modal -->` ;

}