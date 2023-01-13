({
	handleClick : function(component, event, helper) {
		//fire the event
		console.log('fired by component - childA');
        var eventRef =  component.getEvent('empEvent');
        eventRef.setParams({empName:"Sovil Singh"});
        eventRef.fire();
	},
    
    handleEvent : function(component, event, helper) {
     console.log('Handled by childA');
     console.log('Handled by ParentA comp');
     var empNameVal = event.getParam("empName");
     component.set("v.myEmpName", empNameVal);
    },
})