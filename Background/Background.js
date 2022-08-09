/*Made by Matthew Amurao*/
var Backgrounds = [];

function DataFrameLoaded()
{
    Backgrounds.push(document.getElementById("dataframe").contentDocument.getElementsByClassName("text")[0].innerHTML);
    console.log(Backgrounds);
}

document.getElementById("dataframe").onload = DataFrameLoaded;