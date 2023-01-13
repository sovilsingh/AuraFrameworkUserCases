({
	doInIt : function(component, event, helper) {
		
        var action = component.get("c.getAccounts");
        action.setCallback(this, function(response){
        var state = response.getState();
        if(state === "SUCCESS")
        {
            component.set("v.accList", response.getReturnValue());
        }
     });
      $A.enqueueAction(action);
	},
    
    handleChange : function(component, event, helper) {
        
        component.set("v.recordId", component.find("SelectOne").get("v.value"));
    },
    
    handleClick : function(component, event, helper) {
        
        component.set("v.recordId", component.find("SelectOne").get("v.value"));
    }

})