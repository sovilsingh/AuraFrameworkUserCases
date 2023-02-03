public class LightningDataTableExample12 {

    @AuraEnabled
    public static List<Contact> getContactsList(id recordsId){
        return [Select ID, FirstName, LastName, Email, Phone From Contact Where AccountId =: recordsId];
    }
}