({
	render : function(component, helper) {
    	var ret = this.superRender();
	    console.log('child2 render - title: ' + component.get("v.child2title"));
    	return ret;
	},
    rerender : function(component, helper){
        this.superRerender();
        console.log('child2 rerender - title: ' + component.get("v.child2title"));
    },
    afterRender: function (component, helper) {
        this.superAfterRender();
 		console.log('child2 afterRender - title: ' + component.get("v.child2title"));
    },
    unrender: function () {
        this.superUnrender();
        console.log('child2 unrender');
    }
})