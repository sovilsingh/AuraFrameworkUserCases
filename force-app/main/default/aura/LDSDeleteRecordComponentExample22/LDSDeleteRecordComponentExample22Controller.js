({
   
	hanldeDeleteRecord : function(component, event, helper) {
        //component.set('V.recordFields.FieldName', 'Value');
        component.find('recordHandler').deleteRecord($A.getCallback(function(deleteResult){
            if(deleteResult.state === 'SUCCESS' || deleteResult.state === 'DRAFT'){
            var showToast = $A.get('e.force:showToast');
            showToast.setParams({
                "title":"Record Saved",
                "type":"SUCCESS",
                "message": "Contact record is deleted"+JSON.stringify(deleteResult.Id)
            });
            showToast.fire();
            var pageReference = component.find('naveReference');
            var pageReferenceNav = {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'list'
            },
            state: {
                filterName: "MyAccounts"
            }
        };
        pageReference.navigate(pageReferenceNav);
            }else if(deleteResult.state === 'INCOMPLETE'){
                
            }else if(deleteResult.state === 'ERROR'){
                
            }else{
                alert('nothing happen');
            }
        }));	
	}
})