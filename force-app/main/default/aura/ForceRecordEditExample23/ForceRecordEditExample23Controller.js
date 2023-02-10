({
	 editAccount : function(component, event, helper) {
        var editRecord = $A.get('e.force:editRecord');
        editRecord.setParams({
         "recordId": component.get("v.recordId")
        });
		editRecord.fire();
	},
})