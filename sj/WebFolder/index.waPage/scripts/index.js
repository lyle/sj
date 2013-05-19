
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var createVisitor = {};	// @button
	var saveVisitors = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	createVisitor.click = function createVisitor_click (event)// @startlock
	{// @endlock
				$('#visitorForm').show();

	};// @lock

	saveVisitors.click = function saveVisitors_click (event)// @startlock
	{// @endlock
		$('#saveVisitors').focus();
		waf.sources.visitors.save({
			onSuccess: function(event){
				alert('Thanks '+ sources.visitors.firstName);
				$('#visitorForm').hide();
			},
			onError: function(event){
				alert('oh, drat '+event.error[0].message);
			}
		});
	
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("createVisitor", "click", createVisitor.click, "WAF");
	WAF.addListener("saveVisitors", "click", saveVisitors.click, "WAF");
// @endregion
};// @endlock
