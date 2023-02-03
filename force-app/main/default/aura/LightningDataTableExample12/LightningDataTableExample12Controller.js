({
	myaction : function(component, event, helper) {
		component.set("v.Columns", [
            {label:"First Name", fieldName:"FirstName", Type:"text" },
            {label:"Last Name", fieldName:"LastName", Type:"text" },
            {label:"Phone", fieldName:"Phone", Type:"Phone" }
        ]);
        
        var action = component.get("c.getContactsList");
        action.setParams({
            recordsId: component.get("v.recordId")
        });
        
        action.setCallback(this,function(data){
            component.set("v.Contacts", data.getReturnValue());
        });
        
        $A.enqueueAction(action);
	}
})