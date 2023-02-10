({
	doInit : function(component, event, helper) {
        component.find('recordCreator').getNewRecord(
            'Contact',
            null,
            false,
            $A.getCallback(function(){
                var record = component.get('v.record');
                var error = component.get('v.recordError');
                if(error || (record === null)){
                    console.log(' Error while creatinng the template ', +error);
                }else{
                    console.log(' successfully created');
                    alert('Template init');
                }
            })
        );
	},
    
    hanldesaveRecord : function(component, event, helper) {
        console.log('Enter method');
        //component.set('V.recordFields.FieldName', 'Value');
        component.find('recordCreator').saveRecord(function(saveResult){
            console.log('Enter saveMethod method');
            if(saveResult.state === 'SUCCESS' || saveResult.state === 'DRAFT'){
                console.log('Success');
               var showToast = $A.get('e.force:showToast');
            showToast.setParams({
                "title":"Record Saved",
                "type":"SUCCESS",
                "message": "Contact record is Saved"+saveResult.Id
            });
            showToast.fire();
            }else if(saveResult.state === 'INCOMPLETE'){
                
            }else if(saveResult.state === 'ERROR'){
                
            }else{
                alert('nothing happen');
            }
        });
    }
})