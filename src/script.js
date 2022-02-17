function increase()
{
    var disp = document.getElementById('display').value;
    disp = parseInt(disp);
    
    if (disp >= 0)
    {
        disp = disp + 1;
        console.log(disp);
        document.getElementById("minus").disabled = false;
    }
    display(disp);
}

function decrease()
{
    var disp = document.getElementById('display').value;
    disp = parseInt(disp);

    if (disp >= 1)
    {
        disp = disp - 1;
    }
    if (disp == 0)
    {
        document.getElementById("minus").disabled = true;
    }
    display(disp);
}

function display(disp)
{
    document.getElementById('display').value = disp;
}