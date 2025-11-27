
// Task 1   the first char in this string (lowercase) in 6 different ways + repeat (the last) it 3 times
let userName = "Elzero";
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName[0].toLowerCase()); // e
console.log(userName.slice(0,1).toLowerCase()); // e
console.log(userName.substring(0,1).toLowerCase()); // e
console.log(userName.substr(0,1).toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase().repeat(3)); // eee

// Task 2
/*
 لديك بعض المتغيرات عبارة عن كلمة ومجموعة حروف
في السطر الأول تأكد أن الحرف Z موجود داخل الكلمة وان النتيجة التي ستخرج هي true
في السطر الثاني تأكد أن الكلمة تبدا بالحرف E وأن النتيجة التي ستخرج هي true
في السطر الثالث تأكد أن الكلمة تنتهي بالحرف o وأن النتيجة التي ستخرج هي true
لاحظ حالة الأحرف Capital And Small
غير مسموح التلاعب بالمتغيرات
 */
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toLocaleUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True