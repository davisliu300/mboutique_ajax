/* MBoutique ajax exercise 

*/
var pages={
    Welcome: 
        {pageUrl : 'home.html'},
    "Our Macarons" : 
        { pageUrl : 'macarons.html'},
    "Gifts & Parties" : 
        { pageUrl :'gifts-parties.html'},
    Contact : 
        { pageUrl : 'contact.html', default:true}
};

//beginnings of an object for use with error validation
var input_validation = {
    name: 
        {regex: /[a-zA-Z]{3,}/,
         error_msg:"Must be at least 3 characters long, no numbers or characters"},
    email: 
        {regex:/([a-zA-Z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
         error_msg:"Must be a valid email address "},
    phone: 
        {regex: /\d{3}.+?\d{3}.?\d{4}/,
         error_msg:"Must be a valid us phone number "},
	subject: 
		{regex: /.{5,50}/,
		error_msg: "Must be a valid subject"},
	comments: 
		{regex: /.{3,250}/,
		error_msg: "Must be at lease 3 charactor long"}
};

$("document").ready(function(){
//do stuff when the document is ready!
/*$(".main-nav li a").each(function(){
        //do something to each item found
        $(this).click(function(){
            var my_page = pages[$(this).text()];
            console.log(my_page);
            load_page(my_page.pageUrl);
        });
    });*/
    create_menu();
});
/*<li data-url="home.html"><a >Welcome</a></li>*/
function create_menu(){
    var main_nav_ul = $(".main-nav ul");
    for(var index in pages){
//        console.log("The index is "+index);
        var li = $("<li/>");
        var a = $("<a/>").text(index);
        (function(){
            var my_index = index;
            li.on("click","a",function(){
                var my_page = pages[my_index];
                load_page(my_page.pageUrl);
            });
        })();
        li.append(a);       //a.appendTo(li);
        main_nav_ul.append(li);
        if(pages[index].default==true){
            load_page(pages[index].pageUrl);
        }
    }
}

function load_page(page_url){
    //load the indicated page into the #main_content section
    $.get(page_url,function(data){
        $("#main_content").html(data);
    });    
}
function validate_contact(){
        //input_validation[$(this).attr('name')];  
		//beginnings of USING the object for input validation
    var contact_inputs = $("#contact_form input, #contact_form textarea");
    $("#contact_form .error_msg .alert .alert-danger").parent().remove();
	var was_focused=false;
    $(contact_inputs).each(function(){
//	console.log("i am contact_inputs" ,contact_inputs);
	$("#contact_form .error_msg .alert .alert-danger").remove();
			var indexObj = $(this).attr('name');
//			console.log("this is the name of the indxobj: " + indexObj);
			var this_inputs = $(this).val();
			var this_formRegex = input_validation[indexObj].regex;			
			
			if (this_formRegex.test(this_inputs) == true ){
				console.log("ok pass");	
				send_message(this_inputs);
			}else {
				thisErrorMsg = input_validation[indexObj].error_msg;
//				console.log("erromsg in else statement is: " + thisErrorMsg);
				warning_message(thisErrorMsg, this);
				if(!was_focused){
					was_focused=true;
					this.focus();
				}
			}
//		console.log('this is from form validation '+input_validation[$(this).attr('name')]);
//		console.log(input_validation[$(this).attr('name')]);
//		$(this).focus();		
    });
//	return false;
}

function warning_message(this_error, this_location){  
//    console.log('to be continued...');
//	console.log("mssage erro variable is : " + this_error);

	(function(){
	$('#contact_form').on('click', 'button', function(){
		$('#contact_form alert alert-danger').remove();
		console.log("ok selfie");
		});
	})();
	
	$('#contact_form alert').parent().remove();
//	console.log('deleing the following class div' ,$('#contact_form alert').parent());
	var error_div = $("<div/>").addClass('alert alert-danger').text(this_error);
	var close_btn = $("<button/>",{type:'button',class:'close',"data-dismiss":'alert','aria-label':'Close'});
	var span = $("<span/>",{'aria-hidden':'true'}).html('&times;');
	close_btn.append(span);
	error_div.append(close_btn);
				
	error_div.insertAfter($(this_location));
}

	var msgArray = [];
function send_message(this_inputs){  //dummy function for sending message
//    console.log('to be continued...');

	msgArray.push(this_inputs);
//	console.log('msg Arragy includse ;:: '+msgArray);

	var successMsg = $("<div/>").css(
		{
		padding: '20px',
		dispaly: 'inline-block'
	}).addClass('alert alert-success').text(msgArray);
	
//	console.log(successMsg);
	$('#contact_form').html(successMsg);
}

























































	/*
        switch($(this).attr('name')){
                case 'name':
                    str = $(this).val();
                    regex =  /[a-zA-Z]{3,}/;
                    error_msg="Must be at least 3 characters long, no numbers or characters";
					console.log("this is form name consolelog");
                    break;
                case 'email':
                    str = $(this).val();
                    regex = /([a-zA-Z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
                    error_msg="Must be a validate email address";
					console.log("email didn't go thor");
                    break;
                case 'phone':
                    str = $(this).val();
                    regex = /\d{3}.+?\d{3}.?\d{4}/;
                    error_msg="wrong phone#";
                    break;
                case 'subject':
                    str = $(this).val();
                    regex =/[a-zA-Z]{3,}/;
                    error_msg="wrong subject";
                    break;
                case 'comments':
                    str = $(this).val();
                    regex = /.{3,250}/;
                    error_msg="Comments can only be between 3 and 250 characters";
                    break;
                default:
					console.log("default is running"); */
					
					
					
					









/* working version, but simple and need to improve it 

$("document").ready(function()
    {
        $(".main-nav ul li a").each(function()
        {
            var my_li = this;
            $(this).click(function()
            {
                console.log($(this).attr('data-url'));
                var get_url = $(this).attr('data-url');
                
                //put your ajax code here
                $.get(get_url,function(data)
                    {
                        //fill the contents of #main_content with the data of the retrieved file
//								}).done(function(data) {
					$('#main_content').html(data); 
console.log('i am here ' ); 
                    });
            });
            
        });
    });
	
*/