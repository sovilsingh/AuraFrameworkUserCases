({
	doSelect : function(component, event, helper) {
		var index = event.currentTarget.id;
        alert(index);
        var selectedRecord = component.get('v.recordList')[index];
        console.log(' selectedRecord', selectedRecord);
        var selectEvents = component.getEvent('selectEvent');
        selectEvents.setParams({
            record : selectedRecord  
        });
        selectEvents.fire();
	}
})