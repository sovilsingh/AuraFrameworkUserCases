({
	loadAccounts : function(component, event, helper) {
	var action = component.get("c.getAccounts");
        action.setCallback(this, function(response){
        var state = response.getState();
            if(state == "SUCCESS"){
            var listAcc = response.getReturnValue();
                console.log("listAcc :"+JSON.stringify(listAcc));
                component.set("v.listAccWrapper", listAcc);
            }
        });
        $A.enqueueAction(action);
	}
})