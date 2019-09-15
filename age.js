     var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
     floatAge = parseFloat(prompt("Enter age"));
    floatDays = parseFloat(floatAge * 365.25).toFixed(2)
    floatMonths = parseFloat(floatAge * 12).toFixed(2)
    intWeeks = parseFloat(floatDays / 7).toFixed(2)
    intFortnights = parseFloat(floatDays /14).toFixed(2)
     alert("Age in Days = " + floatDays);
     alert("Age in Months = " + floatMonths);
     alert("Age in Weeks = " + intWeeks);
     alert("Age in Fortnights = " + intFortnights);
     