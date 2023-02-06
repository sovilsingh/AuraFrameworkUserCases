public class DisplayAccountWrapperControllerExample20 {
    
    @AuraEnabled
    public static List<AccountWrapper> getAccounts(){
        List<AccountWrapper> listAccWraper = new List<AccountWrapper>();
        for(Account objAcc : [Select Id, Name, Industry, Rating From Account Where Industry <> null]){
            AccountWrapper objectwrap = new AccountWrapper();
            objectwrap.isSelected = false;
            objectwrap.objAcc = objAcc;
            listAccWraper.add(objectwrap);
        }       
        return listAccWraper;
    }

    public class AccountWrapper{
        @AuraEnabled
        public boolean isSelected;
        @AuraEnabled
        public Account objAcc;
        
        public AccountWrapper(){
            this.isSelected = false;
            this.objAcc = new Account();
        }
        
    }
}