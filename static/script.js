var display_date = new Date()
let date= "Date: " + display_datete.toLocaleDateString()

$(document).ready(function(){
    $("#date").html(date)
    console.log('Ready')

    //  Fetch the current date and update it in the DOM




    //  write an event, when Submit button is clicked
    $('#button').click(function(){

        //  get the text value from the textarea using the 'val()' method
        let text_value = $('#text').val()

        //  Convert it to JS object.
        //  Provide a 'key' here and in write the same in app.py file as well to extract data
        let input_text = {'' : text_value}
        console.log(input_text)

        //  ajax request
        $.ajax({

            //  type of web request
            type : 'POST',
            url : "/predict-emotion", 
            //  Data to be sent in JSON format
            data : JSON.stringify(input_text),

            //  type of response expected is json
            dataType : 'json',

            //  contentType
            contentType : 'application/json',

            //  if everything is successful, run this function
            success : function(result){

                // extract prediction and emoticon url from result
                predicted_emotion = result.data.predicted_emotion
                emo_url = result.data.predicted_emotion_img_url

                //  update the DOM elements
                $("#sentiment").html(predicted_emotion)
                $("#sentiment").css("display" , "block");

                $("#emoji").attr('src', emo_url)
                $("#emoji").css("display" , "block");

                //  show them

            },

            //  if any error, run this function
            error : function(result){
                alert(result.responseJSON.message)
                console.log(result)
            }
        })


        //  clearing the textbox after every button push
        $('#text').val("")
    })
        
})