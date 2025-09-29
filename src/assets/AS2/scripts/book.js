const MAX_COUNT = 18;
function book()
{

    var n = prompt("Your Name");
    

    if (localStorage.taken) 
    {
                                
        localStorage.taken = Number(localStorage.taken)+1;
                            
    } 
    else 
    {
                        
        localStorage.taken = 1;
                            
    }
    var name = n.charAt(0).toUpperCase() + n.slice(1)

    var roomID = booker(); 

    var ID = roomID;

    var dataA = new Array(); 

        if(ID === 0)
        {
            document.getElementById("memo").innerHTML = "<br><strong>NO ROOMS AVAILABLE</strong>";
        }
        else
        {
        
        dataA[0] = "<h5>Thanks for your booking " + name + "</h5>";

        dataA[1] = "<br>You're in our <br><br><strong>" + localStorage.getItem("type") + " ROOM</strong>";
                    
        dataA[2] = "<br>You're booked for <br><br><strong>Room " + ID + "</strong><br><br><i> ENJOY! </i>";

        dataA[3] = "<br><br><br><br>=========================<br><h3>INVOICE FOR ROOM " + ID + "</h3><br>=========================<br><br><i style ='color: green;'>Billed To: </i><br><br><b>GUEST:</b>   " + name + "<br><br><br><b style ='color: red;'>AMOUNT DUE:   </b>" + localStorage.getItem("price") + "<br><br>-------------------------";

        dataA[4] = "<br><br><br><i style='color: red; font-size: 18px;'>****************To cancel a booking please visit the main hotel page by clicking  '<strong style='color: white;'>Cancel</strong>' ,  '<strong style='color: white;'>New Room</strong>' , or the  '<strong style='color: white; font-family: marker felt;'>MOONY</strong>  logo'****************</i>";

        document.getElementById("memo").innerHTML = dataA.join("<br>");   

        }

    if(localStorage.taken > 18)
    {
  
        localStorage.clear();

    }

}

function booker()
{
    var avail = MAX_COUNT - Number(localStorage.taken);

    if(localStorage.getItem("type") === "STANDARD")

    {

        if (localStorage.stan) 
        {
                                
            localStorage.stan = Number(localStorage.stan)+1;
                            
        } 
        else 
        {
                        
            localStorage.stan = 1;
                            
        }

        if(avail > -1 && Number(localStorage.stan) < 7) 
        {
            return bookS();

        }
        else
        {
  
        return 0;

        }

    }

    else if(localStorage.getItem("type") === "DELUXE")

    {

        if (localStorage.delu) 
        {
                                
            localStorage.delu = Number(localStorage.delu)+1;
                            
        } 
        else 
        {
                        
            localStorage.delu = 1;
                            
        }

        if(avail > -1 && Number(localStorage.delu) < 7)
        {
            return bookD();
        }

        else
        {
  
        return 0;

        }

    }


   else if(localStorage.getItem("type") === "PREMIUM")

    {
            if (localStorage.prem) 
            {
                                
                localStorage.prem = Number(localStorage.prem)+1;
                            
            } 
            else 
            {
                        
                localStorage.prem = 1;
                            
            }

        if(avail > -1 && Number(localStorage.prem) < 7)
        {
            
            return bookP();

        }
        else
        {
  
            return 0;
        
        }

    }
}

function bookP()
{

    switch(Number(localStorage.prem))
    {

        case 1: 

        return 1;
        break;

        case 2: 

        return 2;
        break;

        case 3:

        return 3;
        break;

        case 4:

        return 4;
        break;

        case 5:

        return 5;
        break;

        case 6:

        return 6;
        break;

        default:

        return 0;
        break;

    }

}


function bookD()
{
    
    switch(Number(localStorage.delu))
    {

        case 1: 

        return 7;
        break;

        case 2: 

        return 8;
        break;

        case 3:

        return 9;
        break;

        case 4:

        return 10;
        break;

        case 5:

        return 11;
        break;

        case 6:

        return 12;
        break;

        default:

        return 0;
        break;
    }
}

function bookS()
{
    
    switch(Number(localStorage.stan))
    {

        case 1: 

        return 13;
        break;

        case 2: 

        return 14;
        break;

        case 3:

        return 15;
        break;

        case 4:

        return 16;
        break;

        case 5:

        return 17;
        break;

        case 6:

        return 18;
        break;

        default:

        return 0;
        break;
    }
}