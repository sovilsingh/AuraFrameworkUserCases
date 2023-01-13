({
	callhandle : function(component, event, helper) {
		var appEvent = $A.get("e.c:ApplicationEventExample2");
         appEvent.fire();
	}
})