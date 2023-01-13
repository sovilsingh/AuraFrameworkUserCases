({
	handlingLowPComplaints : function(component, event, helper) {
        console.log("LP Message Received at District Level");
        //read the attribute value
        var messageReceived = event.getParam("complaintMessage");
		console.log(messageReceived);
        
	},
    
    handlingMediumPComplaints : function(component, event, helper) {
        console.log("MP Message Received at District Level");
        //read the attribute value
        var messageReceived = event.getParam("complaintMessage");
		console.log(messageReceived);
        var EvtSourceInfo = event.getSource();
        var SourceComponentName = event.getSource().getName();
        console.log(SourceComponentName);
        if(SourceComponentName === "cTownShip1Example4"){
           event.pause();
           //Analysis --> outcome is "can be resolved" so stop Propagation ---> server side call or Logic within client side controller
           //event.stopPropagation();
           event.resume();
        }
	},
    
        handlingHighPComplaints : function(component, event, helper) {
        console.log("HP Message Received at District Level");
        //read the attribute value
        var messageReceived = event.getParam("complaintMessage");
		console.log(messageReceived);
        var EvtSourceInfo = event.getSource();
        var SourceComponentName = event.getSource().getName();
        console.log(SourceComponentName);
	}
})