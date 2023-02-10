({
 getMapValues : function(component, event, helper) {
  var action=  component.get('c.getmymap'); 
        action.setCallback(this,function(response)  
        {         var arrayToStoreKeys=[];  // Declaring array to store values.
                  var state=response.getState();  
                  var response1=response.getReturnValue();
        if(state==='SUCCESS')
        {
      component.set('v.map1',response.getReturnValue());  // Storing response in map.
        }
            for(var key in response1 )
                {     
                   arrayToStoreKeys.push(key);   // Pushing keys in array
                }
         component.set('v.list1',arrayToStoreKeys); // Storing keys in list.
        });
  $A.enqueueAction(action);
 }
})