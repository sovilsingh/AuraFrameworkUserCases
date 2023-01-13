({
	callMe : function(component, event, helper) {
        
        var col = [
                     {label: 'First Name', fieldName: 'FirstName', type: 'text'},
                     {label: 'Last Name', fieldName: 'LastName', type: 'text'},
                     {label: 'Email Name', fieldName: 'Email', type: 'text'},
                     {label: 'Phone', fieldName: 'Phone', type: 'text'},
                  ];    
            component.set("v.acolumns", col);
            var action = component.get('c.getContacts');
          //set the apex parameter
             action.setParams({
        });
            action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.contacts", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
		
	},
    
    showMe : function(component, event, helper) {
		
            var con = event.getParam("newConRec");
            // To retain existing Data - pull the exisitng data from comp
            var contactDetails = component.get("v.contacts");
            //To retain exisitng data - push the data recieved from event attribute previous
            contactDetails.push(con);
            component.set("v.contacts", contactDetails);
	},
})