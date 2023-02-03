({
    handlePopup : function(component, event,helper) {
        //Create Dynamic Component
        $A.createComponent('c:DyanamicModalPopupComponentExample11', {
            title: 'Please enter your name',
             
        }, function attachModal(modalCmp, status) {
            if (component.isValid() && status === 'SUCCESS') {
                var body = component.get("v.body");
                body.push(modalCmp);
                component.set("v.body", body);    
            }
        });
    }
})