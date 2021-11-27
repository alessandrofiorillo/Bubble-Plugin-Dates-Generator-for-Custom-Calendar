function(instance, properties, context) {
    	var calendarArray= new Array();	
        const initialDate = new Date (properties.newDate);
        var mm = initialDate.getMonth();
        var yyyy= initialDate.getFullYear();
    		
        function calendarArryMonthCalculation(){
            // I calculate two dates, the second will be modified according to the calendar days (dd) that increase: in 			this way I can get a day out for all the calendar days
            const d = new Date(yyyy, mm, 1, 00, 00, 00, 0);
            var dd=01;
            const newd = new Date(yyyy, mm, 1, 00, 00, 00, 0);
            
            // I calculate the first days of the calendar (those of the month before) if the month does not start on 				Sunday
            if(d.getDay()>0){
                var deltaFirstDays=d.getDay();
                while(deltaFirstDays>0){
                    var dayForCalendar=new Date(yyyy, mm, 01, 00, 00, 00, 0);
                    dayForCalendar.setDate(dayForCalendar.getDate()-deltaFirstDays);
                    calendarArray[calendarArray.length]=dayForCalendar;
                    deltaFirstDays--;
                }
            }
    
            // I put the cycle that takes out all the days of the calendar of the month in question
            while(newd.getMonth()==d.getMonth()){
                var dayForCalendar=new Date(yyyy, mm, dd, 00, 00, 00, 0);
                calendarArray[calendarArray.length]=dayForCalendar;
                dd++;
                newd.setDate(dd);
                }

            // I calculate the last days of the calendar (those of the following month) in the event that the month does 				not end on Saturday
            var dateForLastDays=new Date(yyyy, mm+1, 1, 00, 00, 00, 0);
            dateForLastDays.setDate(dateForLastDays.getDate()-1);
            if(dateForLastDays.getDay()<6){
                var deltaLastDays=dateForLastDays.getDay();
                while(deltaLastDays<6){
                    dateForLastDays.setDate(dateForLastDays.getDate()+1);
                    calendarArray[calendarArray.length]=new Date(dateForLastDays);
                    deltaLastDays++;
                }
            }    

        }
    

    
	// I use the function
	calendarArryMonthCalculation();

    
	instance.publishState('result', calendarArray);
}
