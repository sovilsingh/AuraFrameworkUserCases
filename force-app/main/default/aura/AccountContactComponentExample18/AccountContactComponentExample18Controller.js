({
	getContactsList : function(component, event, helper) {
		helper.fetchContacts(component,event,helper);
	},
    
    newContact : function(component, event, helper) {
        //one app container
        //Global Method
        var createContact = $A.get("e.force:createRecord");
        createContact.setParams({
            'entityApiName' : 'Contact',
           'defaultFieldValue' :{
               'AccountId' : component.get("v.recordId")
           }
       });
       createContact.fire(); 
	},
    
    editContact : function(component, event, helper) {
       var btn = event.getSource();
       var name = btn.get('v.name');
       var recordViewForm = component.find('recordViewForm');
       var recordEditForm = component.find('recordEditForm');
        if(name=='edit'){
            $A.util.addClass(recordViewForm, 'formHide');
            $A.util.removeClass(recordEditForm, 'formHide');
            btn.set('v.name', 'save');
            btn.set('v.label', 'Save');
        }
        else if(name=='save'){
            var contactFields = component.find("fieldToValidate");
            var black=0;
            if(contactFields.lenght != undefined){
                
                var allValid = contactFields.reduce(function(validSoFar, inputCmp){
                    inputCmp.showHelpMessageIfInvalid();
                    return validSoFar && inputCmp.get('v.validity').valid;
                }, true);
                if(!allValid){
                    blank++;
                }
            }else{
                 var allValid = contactFields;
                if(!allValid.get('v.validity').valid){
                    blank++;
                }
            }
            if(blank==0){
             helper.saveContacts(component, event, helper);
           }
        }      
	},
    
    deleteContacts : function(component, event, helper){
     helper.removeContacts(component, event, helper);
    },
    
    openModal : function(component, event, helper){
     var modal = component.find("contactModal");
     var modalBackdrop = component.find("contactModalDrop");
     $A.util.addClass(modal, 'slds-fade-in-open');
     $A.util.addClass(modalBackdrop, 'slds-backdrop_open');
    },
    
    closeModal : function(component, event, helper){
     var modal = component.find("contactModal");
     var modalBackdrop = component.find("contactModalDrop");
     $A.util.removeClass(modal, 'slds-fade-in-open');
     $A.util.removeClass(modalBackdrop, 'slds-backdrop_open');
    },
    
    createContactModal : function(component, event, helper){
    var isContactValid = component.validateContact(component, event, helper);
        if(isContactValid){
        helper.insertContact(component, event, helper);
        }
    },
    
    validateContact : function(component, event, helper){
        var allValid = component.find("formFieldToValidate").reduce(function(validsoFar, inputCmp){
         inputCmp.showHelpMessageIfInvalid();
            var name = inputCmp.get('v.name');
            if(name == 'emailField'){
            var value = inputCmp.get("v.value");
                if(value != 'rahul@gmail.com'){
                    inputCmp.focus();
                    inputCmp.set('v.validity', {valid: false, badInput:true});
                }
            }
           return validsoFar    && inputCmp.get('v.validity').valid;
        }, true);
        return allValid;
    }
})