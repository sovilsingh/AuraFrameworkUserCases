({
	doHandleSearchEvent : function(component, event, helper) {
        var searchParam = event.getParam('searchText');
        //alert(searchParam);
        var action = component.get('c.getRecordList');
        action.setParams({
            ObjectName  : component.get('v.objName'),
            searchText  : searchParam,
            fieldInSearch  : component.get('v.fieldName')
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state==='SUCCESS' || state === 'DRAFT'){
                 var responseValue = response.getReturnValue();
                console.log('responseValue ', responseValue);
                component.set('v.recordList',responseValue );
            }
        });
        
        $A.enqueueAction(action);
	},
    
    doHandleSelectEvent : function(component, event, helper){
        var record = event.getParam('record');
        console.log('record ', record);
        component.set('v.selectRecord', record);
        component.set('v.recordList', null);
    },
    
     handleRemove: function (component, event) {
        event.preventDefault();
        component.set('v.selectRecord', record);
    }
})