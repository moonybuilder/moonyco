var x;

        function valid(form) 
        {

            x = form.aName.value;

            if (x == "") 
            {

              alert("\t\t\tYou must enter a name");

              return false;
            }
            else
            {
              location="wardrobe.html";

              return true;
            }

        } 