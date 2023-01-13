public class SystemAndBrowserExample5 {

    @AuraEnabled
    public static List<Account> getAccounts(){
        List<Account> accList = new List<Account>();
        accList = [Select Id, name From Account Limit 5];
        return accList;
    }
}