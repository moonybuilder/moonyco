start();

function start()
{
    const SMAX_PRICE = 201, SMIN_PRICE = 99, DMAX_PRICE = 301, DMIN_PRICE = 99, PMAX_PRICE = 401, PMIN_PRICE = 99;

    var standardP = (
                        ((Math.random() * (SMAX_PRICE - SMIN_PRICE)) + SMIN_PRICE) + 
                        ((Math.random() * (SMAX_PRICE - SMIN_PRICE)) + SMIN_PRICE) + 
                        ((Math.random() * (SMAX_PRICE - SMIN_PRICE)) + SMIN_PRICE)

                    );

    var deluxeP = (
                        ((Math.random() * (DMAX_PRICE - DMIN_PRICE)) + DMIN_PRICE) + 
                        ((Math.random() * (DMAX_PRICE - DMIN_PRICE)) + DMIN_PRICE)

                  );

    var premiumP = (((Math.random() * (PMAX_PRICE - PMIN_PRICE)) + PMIN_PRICE));

    var s = standardP/3; var d = deluxeP/2;

    var sT = "<h3> $" + s.toFixed(2) + "   STANDARD  </h3>";
    var dT = "<h3> $" + d.toFixed(2) + "   DELUXE   </h3>";
    var pT = "<h3> $" + premiumP.toFixed(2) + "   PREMIUM  </h3>";

    var discount = [sT, dT, pT];

    discount.sort();

    document.getElementById("discountS").innerHTML = discount[0];
    document.getElementById("discountD").innerHTML = discount[1];
    document.getElementById("discountP").innerHTML = discount[2];
        
}

function standard()
{
    location="standard.html";

    localStorage.setItem("selection", document.getElementById("discountS").innerHTML);
    localStorage.setItem("type", (localStorage.getItem("selection").slice(14, 23).trim()));
    localStorage.setItem("price", (localStorage.getItem("selection").slice(4, 12).trim()));
}

function deluxe()
{
    location="deluxe.html";

    localStorage.setItem("selection", document.getElementById("discountD").innerHTML);
    localStorage.setItem("type", (localStorage.getItem("selection").slice(14, 23).trim()));
    localStorage.setItem("price", (localStorage.getItem("selection").slice(4, 12).trim()));
}

function premium()
{
    location="premium.html";

    localStorage.setItem("selection", document.getElementById("discountP").innerHTML);
    localStorage.setItem("type", (localStorage.getItem("selection").slice(14, 23).trim()));
    localStorage.setItem("price", (localStorage.getItem("selection").slice(4, 12).trim()));
}
        