({
    navigate : function(component, event, helper) {
         var navService = component.find("navService");
     
        var pageReference = {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'list'
            },
            state: {
                filterName: "MyAccounts"
            }
        };
        navService.navigate(pageReference);
    }
})