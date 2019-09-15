     var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
     floatAge = parseFloat(prompt("Enter age"));
    floatDays = floatAge * 365.25
    floatMonths = floatAge * 12
    intWeeks = floatDays / 7
    intFortnights =floatDays /14
     alert("Age in Days = " + floatDays);
     alert("Age in Months = " + floatMonths);
     alert("Age in Weeks = " + intWeeks);
     alert("Age in Fortnights = " + intFortnights);
     