public class ContactApexEventExample3 {
    
    @AuraEnabled
    public static String insertNewContact(Contact con){
       string result;
        try{
             insert con;
              result = con.Id;
        }catch(Exception ex){
            result = ex.getMessage();
        }
        return result;
    }
    
    @AuraEnabled
    public static List<Contact> getContacts(Id accId){
        List<Contact> conList;
        if(String.isEmpty(accId)){
            conList = [Select LastName, firstName, Phone, Email From Contact];
        }else{
            conList = [Select LastName, firstName, Phone, Email From Contact 
                       Where accountId =: accId];
        }
        return conList;
    }

}