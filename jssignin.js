
    function fun2()
    {
    var u2=document.f2.us2.value;
	var p2=document.f2.ps2.value;
    if(u2=="" ||u2==null)
	{
		alert("enter name");
	}
    else if(p2=="" ||p2==null)
	{
		alert("enter password");
	}
	else if(u2=="naveendevella123@gmail.com" && p2=="Naveen@2001")
	{
		window.open("main.html");
	}
	else
	{
		alert("Email or Password is Fail");
	}
    }