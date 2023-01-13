<aura:application extends="force:slds" >
    <aura:handler name="HighPriorityComplaintFromTownship_1" event="c:ComponentEventWithComplaintMsgExample4"
                  action="{!c.handlingHighPComplaints}" Phase="capture"/>
	<P>This is From Country (Application level)</P>
    <c:State1Example4/>
</aura:application>