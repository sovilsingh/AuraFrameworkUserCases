({
	handleSave : function(component, event, helper) {
		//call apex
		 var action = component.get('c.insertNewContact');
          //set the apex parameter
             action.setParams({
                    con: component.get('v.newContact')
        });
        //set call back
        action.setCallback(this,  function(response){
            var state = response.getState();
            if(state=='SUCCESS'){
                var contactResult = response.getReturnValue();
                console.log('contactResult '+ JSON.stringify(contactResult));
                if(JSON.stringify(contactResult)!= null)
                {
                   // var appEvent = $A.get("e.c:ComponentTypeEventExample3");
                    var compEvent = component.getEvent("compEvent");
                    console.log('contactResult inside If');
                    var con = component.get('v.newContact');
                    //appEvent.setParams({"newConRec" : con});
                    //appEvent.fire();
                    compEvent.setParams({"newConRec" : con});
                    compEvent.fire();
                }
            }
        });
        
        $A.enqueueAction(action);
	}
})