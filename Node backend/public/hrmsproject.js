 var getUrl = function getUrl(param){
        var pageUrl = window.location.search.substring(1);
        var urlVariables = pageUrl.split("&");
        var parameterName;
        var i;
        for(i=0; i<urlVariables.length; i++){
            parameterName = urlVariables[i].split("=");
            if(parameterName[0] == param){
                return  parameterName[1] == undefined ? true : decodeURIComponent(parameterName[1]);
            }
        }
    }

         var ProjectID=getUrl("id");
        console.log(ProjectID);
                
                 var Role=getUrl("role");
        console.log(Role);
      var info;
           
            //$(#"deleteData").cli
           
            $(document).ready(function(){
              
                
                
                

                $.ajax({
                    type: 'GET',
                    url: 'http://localhost:8000/Projects/' + ProjectID,

                    success: function(Data) {
                         info=Data[0];
                        console.log(info);
                        document.getElementById("nameop").innerHTML=info.Name; 
                        document.getElementById("Progress").value=info.Progress; 
                        document.getElementById("Client").value=info.Client;
                        document.getElementById("demo").value=info.Progress;

                        document.getElementById("myRange").value=info.Progress;

                        console.log(info.Progress+info.Client);


                    }
                });
        

                $.ajax({
                    type: 'GET',
                    url: 'http://localhost:8000/Projects/emprole/'+ ProjectID,
                    success: function(Data) {
                        console.log(Data);
                        for(i=0; i<Data.length;i++){
                            $('#members').append(
                                '<tr><td id = "Name">' + Data[i].FirstName+" "+Data[i].LastName+
                                '</td><td id = "Designation">' + Data[i].Role +
                                '</td><td id = "Email">' + Data[i].Email+
                                '</td></tr>'
                            );
                        }

                    },

                });
                
                
                
         
                
            });

 

function put(){
            var prog=Number(output.value);   
            console.log(prog);
    console.log(info);

    var date=info.DateAssigned;
                var senddate=date.slice(0,10);
                console.log(senddate);
    
            var dts={  
                "ProjectID": info.ProjectID,
                 "Name": info.Name,
        "Tenure": info.Tenure,
        "Client": info.Client,
        "Description": info.Description,
        "IsFinished":Number(info.IsFinished),
        "Progress": prog,
        "DateAssigned": senddate,
        "isPipeline": Number(info.isPipeline)
                
                 }
           

            $.ajax({
                url: 'http://localhost:8000/projects/'+ ProjectID ,
                data: dts,
                type: 'PUT',
                dataType:'JSON',
                success: function(res){
                    console.log(res);
                    alert("Progress Updated");
                }
            });
     console.log(dts);
        } 








