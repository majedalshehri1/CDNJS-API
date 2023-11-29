$(document).ready(function() {
    let inputText = $("#input-text")
    let searchButton = $("#search-button")
    let clearButton = $("#clear-button")
    let nameTool = $("#name-tool")
    let latestCdn = $("#latest-cdn")
    let sourceTool = $("#source-tool")
    let descriptionTool = $("#description-tool")
    let filenameTool = $("#filename-tool")

       //enter key press
document.onkeydown = function(event) {
    if (event.keyCode == 13){
        searchButton.click()
    }
    }

    searchButton.click(function() {
        var settings = {
            "url": `https://api.cdnjs.com/libraries/${inputText.val()}`,
            "method": "GET",
            "timeout": 0,
        };

        $.ajax(settings).done(function(response) {
            console.log(response)
            
            
            nameTool.html(`<span style="font-weight: bold ;">Name :</span> ${response.name}`)
            latestCdn.html(`<span style="font-weight: bold ;">Latest CDN : </span>${response.latest}`)
            sourceTool.html(`<span style="font-weight: bold ;">Source : </span>${response.repository ? response.repository.url : 'Not available'}`)
            descriptionTool.html(`<span style="font-weight: bold ;">Description: </span>${response.description}`)
            filenameTool.html(`<span style="font-weight: bold ;">Main File : </span>${response.filename}`)
        }).fail(function() {
            alert("Library not found or an error occurred")
        })
    })

    
    
    clearButton.click(function() {
        inputText.val("")
        nameTool.text("")
        latestCdn.text("")
        sourceTool.text("")
        descriptionTool.text("")
        filenameTool.text("")
    })

});
