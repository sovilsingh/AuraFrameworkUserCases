({
    handleSaveChange : function(component, event, helper) {
        component.find("savingRecord").saveRecord($A.getCallback(function(saveResult) {
            
           // Handling state of response(SUCCESS,INCOMPLETE,ERROR)
           
             if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                alert("Changes saved successfully.");
            }
            else if (saveResult.state === "INCOMPLETE" ) {
                alert("Error in saving record");
            }
            else if (saveResult.state === "ERROR") {
               alert("Problem saving record, error:" + 
                           JSON.stringify(saveResult.error));
            }
            else
            {
                 alert('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));
            }
            
         }));
            
        
    },
    
    recordUpdated: function(component, event, helper) {
        var eventParams = event.getParams();
        if(eventParams.changeType === "CHANGED") {
            // getting the fields that are changed for this record
            var changedFields = eventParams.changedFields;
           alert('Fields change detected on: ' + JSON.stringify(changedFields));
            // Refereshing the component after change
            var resultsToast = $A.get("e.force:showToast");
            resultsToast.setParams({
                "title": "Saved",
                "message": "Record updatesd."
            });
            resultsToast.fire();
        } else if(eventParams.changeType === "LOADED") {
            alert("Record is loaded successfully.");
        } else if(eventParams.changeType === "REMOVED") {
            var resultsToast = $A.get("e.force:showToast");
            resultsToast.setParams({
                "title": "Deleted",
                "message": "Record deleted."
            });
            resultsToast.fire();
        } else if(eventParams.changeType === "ERROR") {
            alert("Error: '"+ component.get("v.recordError"));
        }
    }

})