({
	forwardLPComplaints : function(component, event, helper) {
        
        //fire the Component Event, below are the steps involved
        //1. ger a refrence to our component events 
        var LPCEvent = component.getEvent("LowPriorityComplaintFromTownship_1");
        // 2. Set the attribute value
        LPCEvent.setParams({"complaintMessage":"Township 2 isn not behaving properly."});
        // 3. fire the event
        LPCEvent.fire();
	},
    
    forwardMPComplaints : function(component, event, helper) {
        
        //fire the Component Event, below are the steps involved
        //1. ger a refrence to our component events 
        var MPCEvent = component.getEvent("MediumPriorityComplaintFromTownship_1");
        // 2. Set the attribute value
        MPCEvent.setParams({"complaintMessage":"Township 2 is dumping waste in Township 1."});
        // 3. fire the event
        MPCEvent.fire();
	},
    
    
    forwardHPComplaints : function(component, event, helper) {
        
        //fire the Component Event, below are the steps involved
        //1. ger a refrence to our component events 
        var HPCEvent = component.getEvent("HighPriorityComplaintFromTownship_1");
        // 2. Set the attribute value
        HPCEvent.setParams({"complaintMessage":"Township 2 is not contaminating water supplied to Township 1."});
        // 3. fire the event
        HPCEvent.fire();
	}
})