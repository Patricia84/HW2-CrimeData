var exercise = {};

exercise.countRecords = function(data){
   data.length
    return data.length; 
};

exercise.countDistrictCrimes = function(data,district){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given district
    //-------------------------------------------
var ncrimes = 0;

    data.forEach(function(row){
        if (row[19]===district){
ncrimes++;

    }

});
    return ncrimes;
};



exercise.countPrimaryType = function(data,primaryType){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the giving primary type
    //-------------------------------------------
var nType =0;
    data.forEach (function(row){
        if(row[13]===primaryType) nType++;
    })
    return nType;
};

exercise.countLocation = function(data,location){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given location
    //-------------------------------------------
    var nCrime =0;
    data.forEach (function(row){
        if(row[29]===nCrime) nType++;
    })
    return nCrime;
};


exercise.buildLatLngPoint = function(crime){
    //-------------------------------------------
    // YOUR CODE
    // build the point for the given crime
    // 
    // For example:
    //
    // var point = {};    
    // point.latitude = crime[latitudeColumnNumber];
    // point.longitude = crime[longitudeColumnNumber];
    // return point;    
    //-------------------------------------------    
    
    var point = {};
    point.latitude = crime[26];
    point.longitude = crime[28];
    return point;
        


};




