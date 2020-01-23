var list= {
        "users": [
            {
            name:"preeti",password:"hello"
            },
            {
            name:"sarah",password:"hihi"
            },
            {
            name:"peter",password:"hoho"
            }
        ]
    }

function check()
{
    var x=document.getElementById("username").value;
    var y=document.getElementById("password").value;
    
  
  var count=0;
  for(var i =0;i<list.users.length;i++)
      {
          if(list.users[i].name == x && list.users[i].password == y)
              {
                  count=1;
                  //setCookie()
                  localStorage.setItem("name",list.users[i].name);
              }
      }
    if(count==1)
        {
          
            location.assign("assesment.html")
        } else{
        console.log("Invalid credentials");
    }
}
function get()
{
    var sto = localStorage.getItem("name");
    var stoo = sto.charAt(0).toUpperCase()+sto.slice(1); 
   /* for(var i=0;i<list.users.length;i++)
        {
            if(sto==list.users[i].name){*/
                document.getElementById("n").innerHTML = stoo;
    document.getElementById("nn").innerHTML = sto;
    
//            }
  //      }
}