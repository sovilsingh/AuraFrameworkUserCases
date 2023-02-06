public class AccountContactsExample18 {
    
    @AuraEnabled
    public static List<Contact> getContacts(List<id> accountIds){
        return [Select ID, FirstName, LastName, AccountID, Phone, Email From Contact where AccountID IN : accountIds];
    }
    
    @AuraEnabled
    public static Map<String,String> saveContactList(List<Contact> contactList){
        Map<String,String> resultMap = new Map<String,String>();
        try{
             update contactList;
             resultMap.put('status', 'success');
             resultMap.put('message', 'Contact Updated Successfully');
        }catch(Exception ex){
             resultMap.put('status', 'failed');
             resultMap.put('message', ex.getMessage()+'Contact Update Failed');
        }    
        return resultMap;
    }
    @AuraEnabled
    public static Map<String,String> deleteContactList(List<ID> contactids){
        Map<String,String> resultMap = new Map<String,String>();
         List<Contact> contactToDelete = [Select ID From Contact where ID IN : contactids];
        try{
             delete contactToDelete;
             resultMap.put('status', 'success');
             resultMap.put('message', 'Contact Deleted Successfully');
        }catch(Exception ex){
             resultMap.put('status', 'failed');
             resultMap.put('message', ex.getMessage()+'Contact deletion Failed');
        }    
        return resultMap;
    }
    @AuraEnabled
    public static Map<String,String> newContactRecord(Contact newContact){
        Map<String,String> resultMap = new Map<String,String>();
        try{
             Insert newContact;
             resultMap.put('status', 'success');
             resultMap.put('message', 'Contact Inserted Successfully');
        }catch(Exception ex){
             resultMap.put('status', 'failed');
             resultMap.put('message', ex.getMessage()+'Contact Insert Failed');
        }    
        return resultMap;
    }
}