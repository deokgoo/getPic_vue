import store from '../store'

export default{
    searchAnalys(urlv){
        // **********************************************
        // *** Update or verify the following values. ***
        // **********************************************

        // Replace <Subscription Key> with your valid subscription key.
        var subscriptionKey = "9c332e97b9ec43249e7040d33074aea8";

        // You must use the same region in your REST call as you used to get your
        // subscription keys. For example, if you got your subscription keys from
        // westus, replace "westcentralus" in the URI below with "westus".
        //
        // Free trial subscription keys are generated in the westcentralus region.
        // If you use a free trial subscription key, you shouldn't need to change
        // this region.
        var uriBase =
            "https://australiaeast.api.cognitive.microsoft.com//vision/v2.0/analyze";

        // Request parameters.
        var params = {
            "visualFeatures": "Categories,Description,Color",
            "details": "",
            "language": "en",
        };

        // Display the image.
        // var sourceImageUrl = document.getElementById("inputImage").value;
        var sourceImageUrl = urlv
        // document.querySelector("#sourceImage").src = sourceImageUrl;

        // Make the REST API call.
        $.ajax({
            url: uriBase + "?" + $.param(params),

            // Request headers.
            beforeSend: function(xhrObj){
                xhrObj.setRequestHeader("Content-Type","application/json");
                xhrObj.setRequestHeader(
                    "Ocp-Apim-Subscription-Key", subscriptionKey);
            },

            type: "POST",

            // Request body.
            data: '{"url": ' + '"' + sourceImageUrl + '"}',
        })

        .done(function(data) {
            // Show formatted JSON on webpage.
            var contact = JSON.parse(JSON.stringify(data, null, 2));
            var arrCat = contact.description.tags

            store.commit('SET_Keyword_CHANGE',arrCat)
            console.log(store.state.keywords)

            // for(var s in arrCat){
            //     htmlLabel+="<span class='col-md-3 lab "+labels[s%labels.length]+"'>"+arrCat[s]+'</span>'
            // }
            // document.querySelector('.keyword_set').innerHTML = htmlLabel
            // BoardView.showImg(0)
            // BoardView.reBindEvent()
            // $("#responseTextArea").val(JSON.stringify(data, null, 2));
        })

        .fail(function(jqXHR, textStatus, errorThrown) {
            // Display error message.
            var errorString = (errorThrown === "") ? "Error. " :
                errorThrown + " (" + jqXHR.status + "): ";
            errorString += (jqXHR.responseText === "") ? "" :
                jQuery.parseJSON(jqXHR.responseText).message;
            alert(errorString);
            BoardView.showImg(0)
        });
    }
}