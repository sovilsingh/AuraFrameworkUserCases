public class customLookupComponentServiceExample21 {
    
    @AuraEnabled
    public static List<sObject> getRecordList(String ObjectName, String searchText, String fieldInSearch){
        String searchKey = '%' + searchText + '%';
        String Query = 'SELECT Id, '+ fieldInSearch;
        Query+=' From '+ObjectName;
        Query+=' Where '+fieldInSearch+' Like : searchKey';
        List<sObject> sObjectList = Database.query(Query);
        System.debug('#### sObjectList '+sObjectList);
        return sObjectList;
        
    }

}