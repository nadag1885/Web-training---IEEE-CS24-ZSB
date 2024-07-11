let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

//http => must start with it


//s? => s is optional it may or may not be present


//: => must be present


// \/\/ => it mean // =>escaping the slash and it must exist


//(?:[-\w]+\.)? => matches one or more "-" or word characters ,the entire group may exist or not


//([-\w]+) => matches one or more "-" or word characters


//\. => matches dot character


//\w+ => matches one or more word characters


//(?:\.\w+)? => escaped dot "." to match a literal dot ,matches one or more word characters ,
//the entire group may exist or not


//\/? => escaping a slash "/" to match a literal slash
// the slash may exist or not


//.* => matches any character except a newline


