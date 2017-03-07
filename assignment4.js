function toggleSection1()
{
    var v = document.getElementById("area1");
    if (v.style.display === 'block')
    {
        v.style.display = 'none';
    }
    else
    {
          v.style.display = 'block';
    }
}
function toggleSection2()
{
    var v = document.getElementById("area2");
    if (v.style.display === 'block')
    {
        v.style.display = 'none';
    }
    else
    {
        v.style.display = 'block';
    }
}
function ClearToggle1()
{
    var v = document.getElementById("area2");
    v.style.display = 'none';
}
function ClearToggle2()
{
    var v = document.getElementById("area1");
    v.style.display = 'none';
}