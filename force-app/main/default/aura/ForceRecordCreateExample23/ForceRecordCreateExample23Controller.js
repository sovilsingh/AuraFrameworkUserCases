({
	createContact : function(component, event, helper) {
        var createRecord = $A.get('e.force:createRecord');
        createRecord.setParams({
            "entityApiName" : "Contact",
             "defaultFieldValues":{
                "Industry":"Apparel",   
                 "AccountId": component.get('v.recordId')
            }
        });
		createRecord.fire();
	},
    
    editAccount : function(component, event, helper) {
        var editRecord = $A.get('e.force:editRecord');
        editRecord.setParams({
         "recordId": component.get("v.recordId")
        });
		editRecord.fire();
	},
})