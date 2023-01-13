({
	handleEvent : function(component, event, helper) {
        console.log('Handled by ParentA comp');
        var empNameVal = event.getParam("empName");
        component.set("v.myEmpName", empNameVal);
		
	}
})