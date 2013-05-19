
guidedModel =// @startlock
{
	Visitors :
	{
		email :
		{
			events :
			{
				onLoad:function(attributeName)
				{// @endlock
					try {
						currentSession().checkPermission('admin');
					}catch(e){
						this.email = "****";
					}
				}// @startlock
			}
		}
	}
};// @endlock
