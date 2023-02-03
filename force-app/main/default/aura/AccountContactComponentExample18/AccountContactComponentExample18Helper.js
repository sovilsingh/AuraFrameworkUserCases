({
	fetchContacts : function(component,event,helper) {
		var action = component.get("c.getContacts");
        //automatically get record id
        var accountId = component.get("v.recordId");
        action.setParams({
            accountIds: accountId
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            //state can be suvvess, error, incomplete
            if(state==='SUCCESS'){
                 var contactList = response.getReturnValue();
                 //console.log(contactList);
                 component.set("v.contactList",contactList);
            }else{
                alert('Error in getting data');
            }
        });
        $A.enqueueAction(action);
	},
    
    saveContacts : function(component, event, helper) {
        console.log("get started");
        var btn = event.getSource();
        var contactList = component.get('v.contactList');
        var recordViewForm = component.find('recordViewForm');
        var recordEditForm = component.find('recordEditForm');
        var saveAction = component.get('c.saveContactList');
        var toastEvent = $A.get('e.force:showToast');
          console.log("get completed");
          saveAction.setParams({
              contactList: contactList
          });
            console.log("Param set");
          saveAction.setCallback(this, function(response){
              console.log("callBack started");
              var state = response.getState();
              if(state === 'SUCCESS'){
                  var dataMap = response.getReturnValue();
                  //one app container
                  if(dataMap.status=='success'){
                      $A.util.addClass(recordEditForm, 'formHide');
                      $A.util.removeClass(recordViewForm, 'formHide');
                      btn.set('v.name', 'edit');
                      btn.set('v.label', 'Edit');
                          toastEvent.setParams({
                          'title' : 'Success!',
                          'type':'success',
                          'mode': 'dismissable',
                          'message':dataMap.message
                      });
                      toastEvent.fire();
                       console.log("toastEvent.fire");
                  }else if(dataMap.status=='failed'){
                           toastEvent.setParams({
                          'title' : 'Failed!',
                          'type':'error',
                          'mode': 'dismissable',
                          'message':dataMap.message
                      });
                      toastEvent.fire();
                  }   
              }else{
                  alert('Error in getting data');
                  console.log("Error");
              }
          });
         $A.enqueueAction(saveAction);   
      },
    
    removeContacts : function(component, event, helper){
        console.log("Enter the Method");
        var contactsToDelete = component.find("deleteContact");
        console.log("get deleteContacts");
        var idsToDelete = [];
        console.log("array");
        if(contactsToDelete.length!=undefined){
            console.log("if condition");
            for(var i=0; i<contactsToDelete.length; i++){
                if(contactsToDelete[i].get('v.checked')){
                    idsToDelete.push(contactsToDelete[i].get('v.value'));
                    console.log("Enter loop");
                }
            }
        }
        else{        
            if(contactsToDelete.get('v.checked')){
                    idsToDelete.push(contactsToDelete.get('v.value'));
                    console.log(JSON.stringify(idsToDelete));
                }
            }
          
        var toastEvent = $A.get('e.force:showToast');
        console.log("Toast loaded");
        var deleteAction = component.get('c.deleteContactList');
        console.log("c.deleteContactList");
        deleteAction.setParams({
            contactids : idsToDelete
        });
        deleteAction.setCallback(this, function(response){
            var state = response.getState();
            if(state==='SUCCESS'){
                var dataMap = response.getReturnValue();
                if(dataMap.status=='success'){
                    toastEvent.setParams({
                        'title': 'Success',
                        'type' : 'success',
                        'mode': 'dismissible',
                        'message': dataMap.message
                    });
                    toastEvent.fire();
                    window.location.reload();
                }
                else if(dataMap.status=='failed'){
                     toastEvent.setParams({
                        'title': 'Error',
                        'type' : 'error',
                        'mode': 'dismissible',
                        'message': dataMap.message
                    });
                     toastEvent.fire();
                }
            }
            else{
                alert('Error in getting data');
            }
        });
        $A.enqueueAction(deleteAction);
    }
})