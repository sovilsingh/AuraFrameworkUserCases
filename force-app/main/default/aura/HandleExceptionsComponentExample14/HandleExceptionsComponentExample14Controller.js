({
	throwError : function(component, event, helper) {
        var  hasPerm = false;
        try{
            if(!hasPerm){
                throw new Error('I can not go on. This is the End');
            }
        }
        catch(e){
            $A.createComponents([
                ["ui:message",{
                    "title" : "Sample Throw Error",
                    "severity" : "error"
                }],
                ["ui:outputText",{
                    "value" : e.message
                }]
                ],
                
                function(components, status, errorMessage){
                    if(status ==="SUCCESS"){
                        var message = components[0];
                        var outputText = components[1];
                        message.set("v.body", outputText);
                        var div1 = component.find("div1");
                        div1.set("v.body", message);
                    }else if(status === "INCOMPLETE"){
                        console.log("No response from server or client is offline");
                    }else if(status === "ERROR"){
                        console.log("ERROR "+ errorMessage);
                    }
                }
            );
        }
		
	}
})