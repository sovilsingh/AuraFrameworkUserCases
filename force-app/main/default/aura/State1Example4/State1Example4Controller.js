({
	    handlingMediumPComplaints : function(component, event, helper) {
        console.log("MP Message Received at State Level");
        //read the attribute value
        var messageReceived = event.getParam("complaintMessage");
		console.log(messageReceived);
        
	},
    
        handlingHighPComplaints : function(component, event, helper) {
        console.log("HP Message Received at State Level");
        //read the attribute value
        var messageReceived = event.getParam("complaintMessage");
		console.log(messageReceived);
        var EvtSourceInfo = event.getSource();
        var SourceComponentName = event.getSource().getName();
        console.log(SourceComponentName);
	}
})