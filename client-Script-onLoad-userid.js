function onLoad() {
    // This sets the 'assigned to' field to the userid of the logged in user
    // An alternative is to set 'assigned_to' in the data dictionary
    // Default value: javascript: gs.getUserID();
       if(!g_form.getValue('caller_id')) {
         g_form.setValue('assigned_to', g_user.userID, g_user.userName);
     
     }
 }